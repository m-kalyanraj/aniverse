/**
 * AniVerse Deterministic Slugification Utility
 * Stage 2 SEO Architecture
 *
 * Converts anime titles to URL-safe canonical slugs.
 */

const SLUG_OVERRIDES = {
  // Explicit abbreviation override (human-readable SEO canonical URL)
  'Bleach: TYBW': 'bleach-thousand-year-blood-war',

  // Deterministic collision resolution:
  // "Knight's & Magic" (Isekai) generates canonical "knights-and-magic"
  // "Knights & Magic" (Sci-Fi variant) maps to "knights-magic"
  'Knights & Magic': 'knights-magic'
};

/**
 * Deterministically converts an anime title into a URL-safe slug.
 *
 * Algorithm:
 * 1. Check explicit overrides first.
 * 2. Lowercase and trim.
 * 3. Normalize Unicode (NFKD).
 * 4. Remove apostrophes (' and ’).
 * 5. Replace ampersands (&) with " and ".
 * 6. Replace non-alphanumeric characters with hyphens.
 * 7. Collapse consecutive hyphens.
 * 8. Strip leading and trailing hyphens.
 *
 * @param {string} title - The anime title to slugify
 * @returns {string} - Clean, URL-safe slug
 */
function slugify(title) {
  if (!title || typeof title !== 'string') return '';
  const trimmed = title.trim();

  if (Object.prototype.hasOwnProperty.call(SLUG_OVERRIDES, trimmed)) {
    return SLUG_OVERRIDES[trimmed];
  }

  return trimmed
    .normalize('NFKD')
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Module export compatibility (CommonJS, browser window, global)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { slugify, SLUG_OVERRIDES };
}
if (typeof window !== 'undefined') {
  window.slugify = slugify;
  window.SLUG_OVERRIDES = SLUG_OVERRIDES;
}
if (typeof global !== 'undefined') {
  global.slugify = slugify;
  global.SLUG_OVERRIDES = SLUG_OVERRIDES;
}
