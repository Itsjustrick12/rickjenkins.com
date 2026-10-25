import { Link } from 'react-router-dom'
import { getAlbumMetadata } from './albums';
import { getAssetPath } from '../PhotoPathHelper';

function AlbumCard({ folder, coverMode }) {
    const metadata=getAlbumMetadata(folder)

    const thumbnail =
    coverMode === 'primary'
        ? metadata.thumbnail
        : metadata.secondaryThumbnail;
    return (
        // Actually build the card using the metadata
        <section className='album-card'>
            <h3>{metadata.title}</h3>
            <img
                src={getAssetPath(thumbnail)}
            />
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