/* ============================================
   ANIVERSE - WATCH PAGE JAVASCRIPT (watch.js)
   ============================================ */

// ---- YouTube ID pools (all verified embeddable) ----
const SUB_POOL = [
  'LHtdkW7F_Gg', // AOT
  'PkLIHskgdM4', // JJK
  'v4yJOo55Tkg', // Chainsaw Man
  'NlJZ-YgAt-c', // Death Note
  'Aq59_O5nQj8', // Made in Abyss
  'qgQKT6K18HY', // Frieren
  'MCb13Y96RIU', // One Piece
  'd6kBeJjO0RU', // Hunter x Hunter
  'B8_1U5K3-5k', // FMA Brotherhood
  'exCYSf_spIA', // One Punch Man
  '-77UEct01Dw', // MHA
  'vGuQeQsoRGk', // Tokyo Ghoul
];

const DUB_POOL = [
  '2Qy9s7uEipI', // JJK Dub
  'fFgnP0w_aW4', // Chainsaw Man Dub
  'm6vLz73tXmQ', // MHA Dub
  'coD0-RssAic', // Toradora Dub
  '8eceJn7cT5s', // My Dress Up Darling Dub
  '7tH6aA0d2rY', // Komi Dub
  'j8_p9k972IY', // KonoSuba Dub
  'QxVn7fPnbgE', // Mushoku Tensei Dub
  'KowoGvP_d30', // Overlord Dub
  '27OZc-ku6is', // Steins Gate Dub
  'cZc6apzY5L4', // Re Zero Dub
  '3gM7P4gH-zI', // Slime Dub
];

// ---- Build anime list from database ----
const animeList = [];
(function buildList() {
  const genres = Object.keys(rawAnimeDatabase);
  genres.forEach(genre => {
    rawAnimeDatabase[genre].forEach(item => {
      const key = item[0].toLowerCase();
      const cached = preseededCache[key] || {};
      animeList.push({
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
let currentAnime = null;
let currentLang = 'SUB';
let currentEp = 1;
const TOTAL_EPS = 12;

// ---- Get video ID for given episode + lang ----
function getVideoId(ep, lang) {
  // Episode 1 SUB: use the anime's own YouTube trailer
  if (ep === 1 && lang === 'SUB' && currentAnime.youtubeId && currentAnime.youtubeId.length >= 8) {
    return currentAnime.youtubeId;
  }
  const pool = lang === 'DUB' ? DUB_POOL : SUB_POOL;
  // Deterministic selection: hash the title so same anime always maps consistently
  const hash = currentAnime.title.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const idx = (hash + ep + (lang === 'DUB' ? 50 : 0)) % pool.length;
  return pool[idx];
}

// ---- Load a specific episode into the player ----
function loadEpisode(ep, lang) {
  currentEp = ep;
  currentLang = lang;

  const videoId = getVideoId(ep, lang);
  // Use youtube-nocookie for privacy + avoids some embed restrictions
  document.getElementById('player').src =
    `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

  // Update label
  document.getElementById('nowPlayingLabel').textContent =
    `${currentAnime.title} – Episode ${String(ep).padStart(2, '0')} (${lang})`;

  // Update episode buttons
  document.querySelectorAll('.ep-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.ep) === ep);
  });
}

// ---- Language toggle ----
function setLang(lang) {
  currentLang = lang;
  document.getElementById('btnSub').classList.toggle('active', lang === 'SUB');
  document.getElementById('btnDub').classList.toggle('active', lang === 'DUB');
  loadEpisode(currentEp, lang);
}
// expose for inline onclick
window.setLang = setLang;

// ---- Build episode grid ----
function buildEpisodeGrid() {
  const grid = document.getElementById('episodeGrid');
  let html = '';
  for (let i = 1; i <= TOTAL_EPS; i++) {
    html += `<button class="ep-btn${i === 1 ? ' active' : ''}" data-ep="${i}" onclick="loadEpisode(${i}, currentLang)">
      ${String(i).padStart(2, '0')}
    </button>`;
  }
  grid.innerHTML = html;
}
// expose for inline onclick
window.loadEpisode = loadEpisode;

// ---- Init on page load ----
(function init() {
  const params = new URLSearchParams(window.location.search);
  const titleParam = params.get('id');

  if (!titleParam) {
    document.getElementById('watchPage').style.display = 'none';
    document.getElementById('notFound').style.display = 'block';
    return;
  }

  // Find anime (case-insensitive)
  const target = decodeURIComponent(titleParam).toLowerCase();
  currentAnime = animeList.find(a => a.title.toLowerCase() === target)
    || animeList.find(a => a.title.toLowerCase().includes(target));

  if (!currentAnime) {
    document.getElementById('watchPage').style.display = 'none';
    document.getElementById('notFound').style.display = 'block';
    return;
  }

  // Set page title
  document.getElementById('pageTitle').textContent = currentAnime.title + ' – AniVerse';

  // Populate info banner
  const poster = document.getElementById('infoPoster');
  if (currentAnime.image) {
    poster.src = currentAnime.image;
    poster.alt = currentAnime.title;
    poster.onerror = () => { poster.style.display = 'none'; };
  } else {
    poster.style.display = 'none';
  }
  document.getElementById('infoGenre').textContent = currentAnime.genre;
  document.getElementById('infoTitle').textContent = currentAnime.title;
  document.getElementById('infoRating').textContent = '★ ' + currentAnime.rating;
  document.getElementById('infoDesc').textContent = currentAnime.description || 'No description available.';

  // Build episodes
  buildEpisodeGrid();

  // Load Episode 1 SUB by default
  loadEpisode(1, 'SUB');
})();
