import { Link } from 'react-router-dom'
import { getAlbumMetadata } from './albums';

function AlbumCard({ folder }) {
    const metadata=getAlbumMetadata(folder)
    return (
        // Actually build the card using the metadata
        <section className='album-card'>
            <h3>{metadata.title}</h3>
            <img src={metadata.thumbnail}/>
            <p>{metadata.startDate} - {metadata.endDate}</p>
            <p>{metadata.region}, {metadata.country}</p>

            <div>
                <Link to={`/travel/${folder}`} className="album-button">
                    Open Album Page
                </Link>
            </div>
        </section>

    )
}

export default AlbumCard;