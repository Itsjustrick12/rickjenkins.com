import { ParseMDFile } from "../parseMDFile"

// Locate the markdown meta data files
const raw = import.meta.glob('/src/assets/photo_albums/*/album_info.md', {
    query: '?raw',
    import: 'default',
    eager: true
})

// Locate the markdown files
const pics = import.meta.glob('/src/assets/photo_albums/**/*.{png,jpg,jpeg,JPG,JPEG}', {
    query: '?url',
    import: 'default',
    eager: true
})

export function getAllPicturesByAlbum (album){
    const folderName = album.toLowerCase();
    // looking at all the pictures we can find under "/src/assets/photo_albums/", filter to only be those that include images we want
    return Object.entries(pics)
    .filter(([path]) => {
            const normalizedPath = path.toLowerCase();

            return normalizedPath.includes(folderName)
                && !normalizedPath.endsWith('albumthumbnail.jpg');
    })
    .filter(([path, url]) => {
        return path.toLowerCase().includes(folderName);
    }).map(([path,url]) => url); //ONLY RETURN THE URL
}

// Give a desired markdown file
export function getAlbumMetadata(folder) {
    const infoFile = raw[`/src/assets/photo_albums/${folder}/album_info.md`]

    if (!infoFile) {
        return null
    }
    const {metadata,content} = ParseMDFile(infoFile)
    return metadata
}

export function getAlbumContent(folder) {
    const infoFile = raw[`/src/assets/photo_albums/${folder}/album_info.md`]

    if (!infoFile) {
        return null
    }
    const {metadata,content} = ParseMDFile(infoFile)
    return content
}

// Get all album folder names, sorted newest to oldest
// if path = /photo_albums/Boston2026/album_info.md this returns Boston2026 for that folder
export function getAllAlbumFolderNames() {
    return Object.keys(raw)
        .map(path => path.split('/').at(-2)) //Start at the album parent folder level, then iterate over all the folders
        .sort((a, b) => { //sort by the start date listed in the albumInfo md file
            const dateA = getAlbumMetadata(a)?.startDate ?? ''
            const dateB = getAlbumMetadata(b)?.startDate ?? ''

            return dateB.localeCompare(dateA)
        })
}