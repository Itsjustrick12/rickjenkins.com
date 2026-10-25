
// Needed AI for this one sorry everyone
// Vite was breaking on the deploy and I needed a solution for getting the render paths so images wouldn't break

// Grab ALL pictures in the repo
const images = import.meta.glob('/src/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default'
});

// Get the path that coverts well for viter
export function getAssetPath(path) {
    if (!path) return '';

    // Normalize Windows paths
    const normalized = path.replace(/\\/g, '/');

    // Convert metadata paths into Vite glob keys
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
