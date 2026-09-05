/* ==========================================================================
   ANIVERSE - HOMEPAGE CONTROLLER (app.js)
   Handles real-time search, genre filtering, dynamic cover fallbacks,
   and the upgraded Trailer Modal.
   ========================================================================== */

// ---- Master Anime List ----
const animeList = [];
let idCounter = 1;

(function buildList() {
  if (typeof rawAnimeDatabase === "undefined") {
    console.error("rawAnimeDatabase is not loaded.");
    return;
  }

  const cache = typeof preseededCache !== "undefined" ? preseededCache : {};
  const genres = Object.keys(rawAnimeDatabase);

  genres.forEach(genre => {
    rawAnimeDatabase[genre].forEach(item => {
      const title = item[0];
      const rating = item[1];
      const mangaSource = item[2];
      const description = item[3];
      const key = title.toLowerCase();
      const cached = cache[key] || {};

      // 1. Resolve working trailer video ID (every single anime gets one)
      const ytId = typeof resolveAnimeTrailer === "function"
        ? resolveAnimeTrailer(title, genre, cached.youtubeId)
        : (cached.youtubeId || "LHtdKWJdif4");

      // 2. Resolve cover image (preseeded CDN or dynamic stylized SVG cover)
      let initialImage = (cached.image && cached.image.trim().length > 0) ? cached.image.trim() : "";
      if (!initialImage && typeof generateDynamicCover === "function") {
        initialImage = generateDynamicCover(title, genre, rating);
      }

      animeList.push({
        id: idCounter++,
        title: title,
        rating: rating,
        mangaSource: mangaSource,
        description: description,
        genre: genre,
        image: initialImage,
        youtubeId: ytId
      });
    });
  });
})();

// ---- State ----
// ---- State ----
let currentGenre = "all";
let searchQuery = "";
let displayCount = 24;
const PAGE_SIZE = 24;
let lastFocusedCard = null;

// ---- Image Fallback Handler ----
// Safely looks up anime by ID to generate stylized procedural vector SVG cover
function handleImageError(imgEl, id) {
  if (typeof generateDynamicCover === "function") {
    imgEl.onerror = null; // prevent infinite loops
    const anime = animeList.find(a => a.id === Number(id));
    if (anime) {
      imgEl.src = generateDynamicCover(anime.title, anime.genre, anime.rating);
    } else {
      imgEl.src = generateDynamicCover("Anime", "Action", "8.5");
    }
  }
}
window.handleImageError = handleImageError;

// ---- Filter Logic ----
function getFiltered() {
  const query = searchQuery.trim().toLowerCase();
  const seenTitles = new Set();

  return animeList.filter(anime => {
    const genreMatch = currentGenre === "all" || anime.genre.toLowerCase() === currentGenre.toLowerCase();
    const queryMatch = !query ||
      anime.title.toLowerCase().includes(query) ||
      anime.genre.toLowerCase().includes(query) ||
      (anime.description && anime.description.toLowerCase().includes(query));

    if (!genreMatch || !queryMatch) return false;

    // Deduplicate when viewing all anime so cards are never repeated
    if (currentGenre === "all") {
      const lower = anime.title.toLowerCase();
      if (seenTitles.has(lower)) return false;
      seenTitles.add(lower);
    }

    return true;
  });
}

// Generate single card HTML safely
function createCardHtml(anime) {
  const safeTitle = anime.title.replace(/"/g, '&quot;');
  return `
    <article class="anime-card" data-id="${anime.id}" tabindex="0" role="button" aria-label="Watch trailer for ${safeTitle}">
      <div class="card-poster-wrap">
        <span class="card-badge-genre">${anime.genre}</span>
        <span class="card-rating">★ ${anime.rating}</span>
        
        <img
          class="card-poster"
          src="${anime.image}"
          alt="${safeTitle} Poster"
          loading="lazy"
          width="300"
          height="420"
          referrerpolicy="no-referrer"
          onerror="handleImageError(this, ${anime.id})"
        />

        <div class="play-overlay">
          <div class="play-icon-circle">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          </div>
          <span class="play-action-text">Watch Trailer</span>
        </div>
      </div>

      <div class="card-info">
        <h3 class="card-title" title="${safeTitle}">${anime.title}</h3>
        <div class="card-meta">
          <span>${anime.genre}</span>
          <span class="card-trailer-tag">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            Trailer
          </span>
        </div>
      </div>
    </article>
  `;
}

// ---- Render Anime Cards ----
function renderGrid() {
  const grid = document.getElementById("animeGrid");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const resultCount = document.getElementById("resultCount");
  const sectionTitle = document.getElementById("sectionTitle");

  if (!grid) return;

  const filtered = getFiltered();
  const slice = filtered.slice(0, displayCount);

  // Update Section Title & Count
  if (sectionTitle) {
    if (searchQuery.trim()) {
      sectionTitle.textContent = `Search: "${searchQuery.trim()}"`;
    } else if (currentGenre !== "all") {
      sectionTitle.textContent = `${currentGenre} Anime`;
    } else {
      sectionTitle.textContent = "Popular Anime";
    }
  }

  if (resultCount) {
    resultCount.textContent = `Showing ${slice.length} of ${filtered.length} shows`;
  }

  if (slice.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
        <h3 style="font-size: 22px; color: #fff; margin-bottom: 8px;">No anime found</h3>
        <p style="color: var(--muted); font-size: 14px;">Try searching for a different title or select another genre.</p>
      </div>
    `;
    if (loadMoreBtn) loadMoreBtn.style.display = "none";
    return;
  }

  grid.innerHTML = slice.map(anime => createCardHtml(anime)).join("");

  // Manage Load More button visibility
  if (loadMoreBtn) {
    if (displayCount >= filtered.length) {
      loadMoreBtn.style.display = "none";
    } else {
      loadMoreBtn.style.display = "inline-flex";
    }
  }
}

// ==========================================================================
// UPGRADED TRAILER MODAL CONTROLLER
// ==========================================================================
let activeModalAnime = null;

function openTrailerModal(idOrTitle) {
  const modal = document.getElementById("trailerModal");
  const player = document.getElementById("modalPlayer");
  const modalTitle = document.getElementById("modalTitle");
  const modalGenre = document.getElementById("modalGenre");
  const modalRating = document.getElementById("modalRating");
  const modalDesc = document.getElementById("modalDesc");
  const modalWatchLink = document.getElementById("modalWatchLink");
  const modalYtLink = document.getElementById("modalYtLink");
  const closeBtn = document.getElementById("modalCloseBtn");

  if (!modal || !player) return;

  // Save currently focused card to restore focus on modal close
  lastFocusedCard = document.activeElement;

  // Look up anime by ID if numeric, otherwise by title
  let anime = null;
  if (typeof idOrTitle === "number" || (!isNaN(idOrTitle) && typeof idOrTitle === "string" && idOrTitle.trim() !== "")) {
    const numId = Number(idOrTitle);
    anime = animeList.find(a => a.id === numId);
  }
  if (!anime) {
    const target = String(idOrTitle || "").toLowerCase().trim();
    anime = animeList.find(a => a.title.toLowerCase() === target) ||
            animeList.find(a => a.title.toLowerCase().includes(target));
  }

  if (!anime) return;
  activeModalAnime = anime;

  // Set title & metadata
  modalTitle.textContent = anime.title;
  modalGenre.textContent = anime.genre;
  modalRating.textContent = `★ ${anime.rating}`;
  modalDesc.textContent = anime.description || "No synopsis available for this title.";

  // Direct link to watch full episodes
  modalWatchLink.href = `watch.html?id=${encodeURIComponent(anime.title)}`;
  modalYtLink.href = `https://www.youtube.com/watch?v=${anime.youtubeId}`;

  // Embed YouTube Trailer with autoplay
  player.src = `https://www.youtube.com/embed/${anime.youtubeId}?autoplay=1&rel=0&modestbranding=1`;

  // Display modal with animation
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // prevent background scrolling

  // Move focus to close button for keyboard/screen reader accessibility
  if (closeBtn) {
    setTimeout(() => closeBtn.focus(), 50);
  }
}
window.openTrailerModal = openTrailerModal;

function closeTrailerModal() {
  const modal = document.getElementById("trailerModal");
  const player = document.getElementById("modalPlayer");

  if (!modal) return;

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = ""; // restore background scrolling

  // Stop video playback and mute immediately
  if (player) {
    player.src = "";
  }
  activeModalAnime = null;

  // Restore keyboard focus to previously active card
  if (lastFocusedCard && typeof lastFocusedCard.focus === "function") {
    lastFocusedCard.focus();
    lastFocusedCard = null;
  }
}
window.closeTrailerModal = closeTrailerModal;

// ==========================================================================
// EVENT LISTENERS & INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initial grid render
  renderGrid();

  // 2. Real-time Search input listener with lightweight debounce
  const searchInput = document.getElementById("searchInput");
  let searchDebounce = null;
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      clearTimeout(searchDebounce);
      searchDebounce = setTimeout(() => {
        searchQuery = e.target.value;
        displayCount = PAGE_SIZE; // reset pagination
        renderGrid();
      }, 100);
    });
  }

  // 3. Genre filter pills
  const genreFilters = document.getElementById("genreFilters");
  if (genreFilters) {
    genreFilters.addEventListener("click", e => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;

      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      currentGenre = btn.getAttribute("data-genre") || "all";
      displayCount = PAGE_SIZE; // reset pagination
      renderGrid();
    });
  }

  // 4. Card click & keyboard Enter/Space activation via event delegation
  const grid = document.getElementById("animeGrid");
  if (grid) {
    grid.addEventListener("click", e => {
      const card = e.target.closest(".anime-card");
      if (!card) return;
      const id = card.getAttribute("data-id");
      openTrailerModal(id);
    });

    grid.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        const card = e.target.closest(".anime-card");
        if (!card) return;
        e.preventDefault();
        const id = card.getAttribute("data-id");
        openTrailerModal(id);
      }
    });
  }

  // 5. Load more button
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      displayCount += PAGE_SIZE;
      renderGrid();
    });
  }

  // 6. Modal Close Controls
  const closeBtn = document.getElementById("modalCloseBtn");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeTrailerModal);
  }

  const modalBackdrop = document.getElementById("trailerModal");
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", e => {
      // If clicking directly on the backdrop (outside dialog), close modal
      if (e.target === modalBackdrop) {
        closeTrailerModal();
      }
    });
  }

  // 7. Keyboard Escape to close modal & Focus Trap
  document.addEventListener("keydown", e => {
    const modal = document.getElementById("trailerModal");
    if (!modal || !modal.classList.contains("active")) return;

    if (e.key === "Escape" || e.key === "Esc") {
      closeTrailerModal();
      return;
    }

    // Modal focus trap
    if (e.key === "Tab") {
      const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          last.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    }
  });
});
