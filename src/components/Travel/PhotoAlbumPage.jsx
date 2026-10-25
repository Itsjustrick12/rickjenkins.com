import { useParams } from 'react-router-dom'
import { getAlbumContent, getAlbumMetadata, getAllPicturesByAlbum } from './albums'

export function PhotoAlbumPage(){

    const { folder } = useParams()
    const metadata = getAlbumMetadata(folder)
    // const content = getAlbumContent(folder)
    const pics = getAllPicturesByAlbum(folder);
    return (
        <div className="page-container">
            <div className="center-everything">
                <h1>{metadata.title}</h1>
                <h3>{metadata.startDate} - {metadata.endDate}</h3>
            </div>
            <section className="travel-gallery">
                {pics.map((url, index) => (
                    <div className="album-image">
                        <img key={url} src={url} alt={`Album photo ${index + 1}`} loading="lazy"  />
                    </div>
                ))}
            </section>
        </div>
    )
}