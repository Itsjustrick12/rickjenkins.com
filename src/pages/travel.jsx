import { getAllPicturesByAlbum } from "../components/Blog/pictures"
import { UnderConstruction } from "../components/UnderConstruction"

export function Travel(){
    const pics = getAllPicturesByAlbum('ABC');

    return (
        <div className="page-container">
            <div align="center">
                <h1>
                    Travel
                </h1>
                {/* <UnderConstruction/> */}
            </div>

            <section>
                {pics.map((url, index) => (
                    // <p key={url}>{url}</p>
                    <img key={url} src={url} alt={`Album photo ${index + 1}`} loading="lazy"  />
                ))}
            </section>
        </div>
    )
}