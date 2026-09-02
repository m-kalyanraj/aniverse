/* ============================================
   ANIVERSE - HOMEPAGE JAVASCRIPT (app.js)
   ============================================ */

// ---- Build anime list from database ----
const animeList = [];
let idCounter = 1;

(function buildList() {
  const genres = Object.keys(rawAnimeDatabase);
  genres.forEach(genre => {
    rawAnimeDatabase[genre].forEach(item => {
      const key = item[0].toLowerCase();
      const cached = preseededCache[key] || {};
      animeList.push({
        id: idCounter++,
        title: item[0],
        rating: item[1],
        description: item[3],
        genre: genre,
        image: cached.image || '',
        youtubeId: cached.youtubeId || ''
      });
    });
  });
})();

// ---- State ----
let currentGenre = 'all';
let searchQuery = '';
let displayCount = 24;
const PAGE_SIZE = 24;

// ---- Filtered list ----
function getFiltered() {
  return animeList.filter(a => {
    const genreOk = currentGenre === 'all' || a.genre === currentGenre;
    const searchOk = !searchQuery ||
      a.title.toLowerCase().includes(searchQuery) ||
      a.genre.toLowerCase().includes(searchQuery);
    return genreOk && searchOk;
  });
}

// ---- Render grid ----
function renderGrid() {
  const grid = document.getElementById('animeGrid');
  const loadBtn = document.getElementById('loadMoreBtn');
  const filtered = getFiltered();
  const slice = filtered.slice(0, displayCount);

  grid.innerHTML = slice.map(anime => {
    const hasPoster = anime.image && !anime.image.startsWith('data:');
    return `
      <div class="anime-card" onclick="openAnime(${anime.id})">
        ${hasPoster
          ? `<img class="card-poster" src="${anime.image}" alt="${anime.title}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
          : ''}
        <div class="card-poster-placeholder" style="${hasPoster ? 'display:none' : 'display:flex'}">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="rgba(0,240,255,0.4)" stroke-width="1.5"><path d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
          <span class="placeholder-title">${anime.title}</span>
        </div>
        <div class="card-rating">★ ${anime.rating}</div>
        <div class="play-overlay">
          <div class="play-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
        </div>
        <div class="card-info">
          <div class="card-title">${anime.title}</div>
          <div class="card-genre">${anime.genre}</div>
        </div>
      </div>
    `;
  }).join('');

  // Show/hide load more
  loadBtn.style.display = displayCount < filtered.length ? 'inline-block' : 'none';
}

// ---- Navigate to watch page ----
function openAnime(id) {
  const anime = animeList.find(a => a.id === id);
  if (!anime) return;
  window.location.href = 'watch.html?id=' + encodeURIComponent(anime.title);
}

// ---- Genre filter ----
document.getElementById('filters').addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentGenre = btn.dataset.genre;
  displayCount = PAGE_SIZE;
  renderGrid();
});

// ---- Search ----
document.getElementById('searchInput').addEventListener('input', e => {
  searchQuery = e.target.value.toLowerCase().trim();
  displayCount = PAGE_SIZE;
  renderGrid();
});

// ---- Load More ----
document.getElementById('loadMoreBtn').addEventListener('click', () => {
  displayCount += PAGE_SIZE;
  renderGrid();
});

// ---- Initial render ----
renderGrid();
