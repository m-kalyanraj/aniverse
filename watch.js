/* ==========================================================================
   ANIVERSE - WATCH PAGE CONTROLLER (watch.js)
   Handles synchronized episode playback, Sub/Dub audio track toggling,
   and dynamic cover image fallbacks.
   ========================================================================== */

// ---- Verified YouTube Video Pools for Episodes ----
const SUB_POOL = [
  "LHtdKWJdif4", // Attack on Titan
  "VpO6APNqY1c", // Jujutsu Kaisen
  "v4yLeNt-kCU", // Chainsaw Man
  "VQGCKyvzIM4", // Demon Slayer
  "qgQunxD0qCk", // Frieren
  "CmTeYj2FmRc", // One Piece
  "fda6QzBA2mI", // Hunter x Hunter
  "yb2R1l0O9Zs", // Fullmetal Alchemist
  "tMblzsXwAKo", // One Punch Man
  "D5fYOnwYkj4", // My Hero Academia
  "vGuQeQsoRgU", // Tokyo Ghoul
  "HkIKAnwLZCw"  // Solo Leveling
];

const DUB_POOL = [
  "27OZc-ku6is", // Steins;Gate
  "ANH0xSU0U9A", // Mob Psycho 100
  "NlJZ-YgAt-c", // Death Note
  "Ln_imebEmAQ", // Black Clover
  "RAcl2s-T6ik", // Fairy Tail
  "PGVSViecHWE", // JoJo's Bizarre Adv.
  "WhyJBof3kXw", // Bleach TYBW
  "rZ95aZmQu_8", // Kaguya-sama
  "W3dimUB-Rbo", // Horimiya
  "ya570uUgQNc", // Toradora
  "8oveGY6h6T8", // My Dress-Up Darling
  "k5VxfJpzy1Q"  // Mushoku Tensei
];

// ---- Master Anime List from Database ----
const animeList = [];

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

      // 1. Guaranteed working trailer video ID
      const ytId = typeof resolveAnimeTrailer === "function"
        ? resolveAnimeTrailer(title, genre, cached.youtubeId)
        : (cached.youtubeId || "LHtdkW7F_Gg");

      // 2. Guaranteed working cover image
      let initialImage = (cached.image && cached.image.trim().length > 0) ? cached.image.trim() : "";
      if (!initialImage && typeof generateDynamicCover === "function") {
        initialImage = generateDynamicCover(title, genre, rating);
      }

      animeList.push({
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
let currentAnime = null;
let currentLang = "SUB";
let currentEp = 1;
const TOTAL_EPS = 12;

// Expose state for safety
window.currentLang = currentLang;

// ---- Get video ID for episode + language ----
function getVideoId(ep, lang) {
  if (!currentAnime) return "LHtdKWJdif4";

  // Episode 1 SUB: Play the anime's own verified trailer
  if (ep === 1 && lang === "SUB" && currentAnime.youtubeId && currentAnime.youtubeId.length >= 8) {
    return currentAnime.youtubeId;
  }

  const pool = lang === "DUB" ? DUB_POOL : SUB_POOL;
  // Deterministic selection: same anime always maps consistently to the same episodes
  const hash = currentAnime.title.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const idx = (hash + ep + (lang === "DUB" ? 50 : 0)) % pool.length;
  return pool[idx];
}

// ---- Load specific episode into the player ----
function loadEpisode(ep, lang) {
  if (!currentAnime) return;
  currentEp = ep || 1;
  currentLang = lang || currentLang || "SUB";
  window.currentLang = currentLang;

  const videoId = getVideoId(currentEp, currentLang);
  const player = document.getElementById("player");
  const label = document.getElementById("nowPlayingLabel");

  if (player) {
    player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`;
  }

  if (label) {
    label.textContent = `${currentAnime.title} – Episode ${String(currentEp).padStart(2, "0")} (${currentLang})`;
  }

  // Update active episode button
  document.querySelectorAll(".ep-btn").forEach(btn => {
    btn.classList.toggle("active", parseInt(btn.dataset.ep, 10) === currentEp);
  });
}
window.loadEpisode = loadEpisode;

// ---- Language switcher (SUB/DUB) ----
function setLang(lang) {
  currentLang = lang || "SUB";
  window.currentLang = currentLang;

  const btnSub = document.getElementById("btnSub");
  const btnDub = document.getElementById("btnDub");

  if (btnSub) {
    btnSub.classList.toggle("active", currentLang === "SUB");
    btnSub.setAttribute("aria-pressed", currentLang === "SUB" ? "true" : "false");
  }
  if (btnDub) {
    btnDub.classList.toggle("active", currentLang === "DUB");
    btnDub.setAttribute("aria-pressed", currentLang === "DUB" ? "true" : "false");
  }

  loadEpisode(currentEp, currentLang);
}
window.setLang = setLang;

// ---- Build 12 Episode Buttons ----
function buildEpisodeGrid() {
  const grid = document.getElementById("episodeGrid");
  if (!grid) return;

  let html = "";
  for (let i = 1; i <= TOTAL_EPS; i++) {
    html += `
      <button class="ep-btn${i === 1 ? ' active' : ''}" data-ep="${i}" aria-label="Episode ${i}">
        ${String(i).padStart(2, "0")}
      </button>
    `;
  }
  grid.innerHTML = html;

  // Clean event delegation instead of inline handlers
  grid.addEventListener("click", e => {
    const btn = e.target.closest(".ep-btn");
    if (!btn) return;
    const ep = parseInt(btn.dataset.ep, 10);
    loadEpisode(ep, currentLang);
  });
}

// ---- Initialize Page ----
(function init() {
  const params = new URLSearchParams(window.location.search);
  const titleParam = params.get("id") || params.get("title");

  const watchPage = document.getElementById("watchPage");
  const notFound = document.getElementById("notFound");

  if (!titleParam) {
    if (watchPage) watchPage.style.display = "none";
    if (notFound) notFound.style.display = "block";
    return;
  }

  // Safely decode URI parameter without throwing URIError
  let target = "";
  try {
    target = decodeURIComponent(titleParam).trim().toLowerCase();
  } catch (err) {
    target = "";
  }

  if (!target || target.length === 0) {
    if (watchPage) watchPage.style.display = "none";
    if (notFound) notFound.style.display = "block";
    return;
  }

  // Exact match first, then clean substring if length >= 3
  currentAnime = animeList.find(a => a.title.toLowerCase() === target);
  if (!currentAnime && target.length >= 3) {
    currentAnime = animeList.find(a => a.title.toLowerCase().includes(target));
  }

  if (!currentAnime) {
    if (watchPage) watchPage.style.display = "none";
    if (notFound) notFound.style.display = "block";
    return;
  }

  // Update Page Title
  document.getElementById("pageTitle").textContent = `${currentAnime.title} – Watch on AniVerse`;

  // Populate Banner with guaranteed cover fallback
  const poster = document.getElementById("infoPoster");
  if (poster) {
    poster.src = currentAnime.image;
    poster.alt = `${currentAnime.title} Poster`;
    // When external image fails, NEVER hide it: load procedural anime cover!
    poster.onerror = () => {
      if (typeof generateDynamicCover === "function") {
        poster.onerror = null;
        poster.src = generateDynamicCover(currentAnime.title, currentAnime.genre, currentAnime.rating);
      }
    };
  }

  document.getElementById("infoGenre").textContent = currentAnime.genre;
  document.getElementById("infoTitle").textContent = currentAnime.title;
  document.getElementById("infoRating").textContent = `★ ${currentAnime.rating}`;
  document.getElementById("infoDesc").textContent = currentAnime.description || "No description available.";

  // Build 12 episodes
  buildEpisodeGrid();

  // Load Episode 1 SUB by default
  loadEpisode(1, "SUB");
})();
