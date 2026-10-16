import { getAllPicturesByAlbum } from "../components/Blog/pictures"
import { UnderConstruction } from "../components/UnderConstruction"

export function Travel(){
    const bostonPics = getAllPicturesByAlbum('Boston');

    return (
        <div className="page-container">
            <div align="center">
                <h1>
                    Travel
                </h1>
                {/* <UnderConstruction/> */}
            </div>

            <h1>
                Boston & Vermont Oct 2026
            </h1>
            <h2>
                Sofie's Digi Pics:
            </h2>
            <section className="travel-gallery">
                {bostonPics.map((url, index) => (
                    // <p key={url}>{url}</p>
                    <div className="album-image">
                        <img key={url} src={url} alt={`Album photo ${index + 1}`} loading="lazy"  />
                    </div>
                ))}
            </section>
        </div>
    )
}