// Locate the markdown files
const pics = import.meta.glob('/src/assets/photo_albums/**/*.{png,jpg,jpeg,JPG}', {
    query: '?url',
    import: 'default',
    eager: true
})

export function getAllPicturesByAlbum (album){
    const folderName = album.toLowerCase();
    // looking at all the pictures we can find under "/src/assets/photo_albums/", filter to only be those that include images we want
    return Object.entries(pics)
    .filter(([path, url]) => {
        return path.toLowerCase().includes(folderName);
    }).map(([path,url]) => url); //ONLY RETURN THE URL
}