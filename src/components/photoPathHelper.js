
// Needed AI for this one sorry everyone
// Vite was breaking on the deploy and I needed a solution for getting the render paths so images wouldn't break

// Grab ALL pictures in the repo

 // Grab images inside src/ for Vite to process
const images = import.meta.glob('/src/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default'
});

// Resolve image paths for both src/ and public/
export function getAssetPath(path) {
    if (!path) return '';

    // Normalize Windows paths
    const normalized = path.replace(/\\/g, '/');

    // Public images are served directly, without Vite imports
    if (normalized.startsWith('/blog/')) {
        return normalized;
    }

    // Existing Vite asset lookup
    const key = normalized.startsWith('/')
        ? normalized
        : `/${normalized}`;

    const assetUrl = images[key];

    if (!assetUrl) {
        console.warn(`Image not found in Vite asset map: ${key}`);
        return '';
    }

    return assetUrl;
}
