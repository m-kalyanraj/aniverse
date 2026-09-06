/**
 * AniVerse Static SEO Pages & Sitemap Generator
 * Stage 4 SEO Architecture
 *
 * Deterministically generates:
 * 1. 443 static anime detail pages under anime/<slug>/index.html
 * 2. sitemap.xml with 445 canonical URLs (homepage, watch, 443 anime pages)
 *
 * Authoritative data: anime_database.js
 * Slug engine: scripts/slugs.js
 * Template: anime_template.html
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rootDir = path.resolve(__dirname, '..');

// 1. Load anime_database.js in isolated sandbox
const dbPath = path.join(rootDir, 'anime_database.js');
const dbCode = fs.readFileSync(dbPath, 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(dbCode, sandbox);

const rawDb = sandbox.window.rawAnimeDatabase;
const preCache = sandbox.window.preseededCache || {};
const resolveTrailer = sandbox.window.resolveAnimeTrailer;
const generateDynamicCover = sandbox.window.generateDynamicCover;

// 2. Load slug utility
const { slugify } = require(path.join(rootDir, 'scripts', 'slugs.js'));

// 3. Load reusable HTML template
const templatePath = path.join(rootDir, 'anime_template.html');
const template = fs.readFileSync(templatePath, 'utf8');

// 4. Extract and deduplicate unique anime records
const genreOrder = ['Action', 'Romance', 'Isekai', 'Sci-Fi', 'Fantasy'];
const uniqueAnimeMap = new Map();
const genreAnimeMap = new Map();

genreOrder.forEach(genre => {
  genreAnimeMap.set(genre, []);
  if (!rawDb[genre]) return;
  rawDb[genre].forEach(item => {
    const title = item[0];
    const rating = item[1];
    const mangaSource = item[2];
    const synopsis = item[3];

    // Primary record for detail page
    if (!uniqueAnimeMap.has(title)) {
      const slug = slugify(title);
      const cacheKey = title.toLowerCase();
      const cached = preCache[cacheKey] || {};

      let poster = (cached.image && cached.image.trim().length > 0) ? cached.image.trim() : '';
      if (!poster && typeof generateDynamicCover === 'function') {
        poster = generateDynamicCover(title, genre, rating);
      }

      const trailer = typeof resolveTrailer === 'function'
        ? resolveTrailer(title, genre, cached.youtubeId)
        : (cached.youtubeId || '');

      uniqueAnimeMap.set(title, {
        title,
        rating,
        mangaSource,
        synopsis,
        genre,
        slug,
        poster,
        trailer
      });
    }

    // Record for genre listings (preserving uniqueness per genre)
    const genreList = genreAnimeMap.get(genre);
    if (!genreList.some(a => a.title === title)) {
      genreList.push(uniqueAnimeMap.get(title));
    }
  });
});

console.log(`[build-seo] Loaded ${uniqueAnimeMap.size} unique anime titles across ${genreOrder.length} genres.`);

// Deterministically sort unique anime by title
const sortedAnime = Array.from(uniqueAnimeMap.values()).sort((a, b) => a.title.localeCompare(b.title));

// 5. Generate detail pages
let pagesGenerated = 0;
const generatedSlugs = new Set();
const BASE_URL = 'https://aniverseweb.netlify.app';

sortedAnime.forEach(anime => {
  const { title, rating, mangaSource, synopsis, genre, slug, poster, trailer } = anime;

  if (generatedSlugs.has(slug)) {
    throw new Error(`Duplicate slug detected: ${slug} for title ${title}`);
  }
  generatedSlugs.add(slug);

  const canonicalUrl = `${BASE_URL}/anime/${slug}/`;
  const watchUrl = `/watch.html?id=${encodeURIComponent(title)}`;

  // Select 6 related same-genre anime deterministically
  const genreList = genreAnimeMap.get(genre) || [];
  const siblings = genreList.filter(a => a.title !== title);
  const myIndex = siblings.findIndex(a => a.title.localeCompare(title) > 0);
  const startIndex = myIndex >= 0 ? myIndex : 0;
  const relatedCount = Math.min(6, siblings.length);
  const relatedList = [];

  for (let i = 0; i < relatedCount; i++) {
    const idx = (startIndex + i) % siblings.length;
    relatedList.push(siblings[idx]);
  }

  const relatedHtml = relatedList.map(rel => {
    const safeTitle = rel.title.replace(/"/g, '&quot;');
    return `        <a class="related-card" href="/anime/${rel.slug}/">
          <div class="related-poster-wrap">
            <img
              class="related-poster"
              src="${rel.poster}"
              alt="${safeTitle} Poster"
              loading="lazy"
              width="200"
              height="300"
              referrerpolicy="no-referrer"
            />
          </div>
          <div class="related-info">
            <h3 class="related-title">${rel.title}</h3>
            <div class="related-meta">
              <span>${rel.genre}</span>
              <span class="related-rating">★ ${rel.rating}</span>
            </div>
          </div>
        </a>`;
  }).join('\n');

  // Build Schema.org JSON-LD (strictly without fabricated fields)
  const jsonLdObj = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TVSeries",
        "@id": `${canonicalUrl}#series`,
        "name": title,
        "url": canonicalUrl,
        "image": poster,
        "description": synopsis,
        "genre": genre,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": rating,
          "bestRating": "10",
          "worstRating": "1"
        },
        "trailer": {
          "@type": "VideoObject",
          "@id": `${canonicalUrl}#trailer`,
          "name": `${title} Official Trailer`,
          "description": `Official trailer for ${title} on AniVerse.`,
          "thumbnailUrl": poster,
          "embedUrl": `https://www.youtube.com/embed/${trailer}`
        }
      }
    ]
  };
  const jsonLdString = JSON.stringify(jsonLdObj, null, 4);

  // Replace placeholders in template
  let pageHtml = template;
  pageHtml = pageHtml.replace(/{{TITLE}}/g, title);
  pageHtml = pageHtml.replace(/{{SLUG}}/g, slug);
  pageHtml = pageHtml.replace(/{{RATING}}/g, rating);
  pageHtml = pageHtml.replace(/{{GENRE}}/g, genre);
  pageHtml = pageHtml.replace(/{{SYNOPSIS}}/g, synopsis);
  pageHtml = pageHtml.replace(/{{POSTER_URL}}/g, poster);
  pageHtml = pageHtml.replace(/{{TRAILER_ID}}/g, trailer);
  pageHtml = pageHtml.replace(/{{WATCH_URL}}/g, watchUrl);
  pageHtml = pageHtml.replace(/{{MANGA_SOURCE}}/g, mangaSource);
  pageHtml = pageHtml.replace(/{{CANONICAL_URL}}/g, canonicalUrl);
  pageHtml = pageHtml.replace('{{RELATED_ANIME_HTML}}', relatedHtml);
  pageHtml = pageHtml.replace('{{JSON_LD}}', jsonLdString);

  // Write page
  const pageDir = path.join(rootDir, 'anime', slug);
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  fs.writeFileSync(path.join(pageDir, 'index.html'), pageHtml, 'utf8');
  pagesGenerated++;
});

console.log(`[build-seo] Successfully generated ${pagesGenerated} anime detail pages.`);

// 6. Generate deterministic sitemap.xml
// Exactly 445 URLs: 1 homepage + 1 watch page + 443 anime pages
const sitemapUrls = [
  { loc: `${BASE_URL}/`, changefreq: 'weekly', priority: '1.0' },
  { loc: `${BASE_URL}/watch.html`, changefreq: 'weekly', priority: '0.8' }
];

// Sort anime URLs alphabetically by slug for determinism
const sortedAnimeBySlug = [...sortedAnime].sort((a, b) => a.slug.localeCompare(b.slug));
sortedAnimeBySlug.forEach(a => {
  sitemapUrls.push({
    loc: `${BASE_URL}/anime/${a.slug}/`,
    changefreq: 'monthly',
    priority: '0.7'
  });
});

let sitemapXml = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemapXml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
sitemapUrls.forEach(u => {
  sitemapXml += '  <url>\n';
  sitemapXml += `    <loc>${u.loc}</loc>\n`;
  sitemapXml += `    <changefreq>${u.changefreq}</changefreq>\n`;
  sitemapXml += `    <priority>${u.priority}</priority>\n`;
  sitemapXml += '  </url>\n';
});
sitemapXml += '</urlset>\n';

const sitemapPath = path.join(rootDir, 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemapXml, 'utf8');
console.log(`[build-seo] Successfully generated sitemap.xml with ${sitemapUrls.length} URLs.`);

module.exports = {
  pagesGenerated,
  sitemapCount: sitemapUrls.length,
  uniqueAnimeCount: uniqueAnimeMap.size
};
