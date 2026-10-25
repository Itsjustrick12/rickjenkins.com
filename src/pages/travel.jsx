import AlbumCard from "../components/Travel/AlbumCard";
import { getAllAlbumFolderNames } from "../components/Travel/albums";

export function Travel(){
    const albums = getAllAlbumFolderNames()
    return (
        <div className="page-container">
            <div className="center-everything">
                <h1>Travel</h1>
            </div>
            
            <section className="album-card-container">
                {albums.map(folder => {
                    return (
                        <div className="album-card-box" key={folder}>
                            <AlbumCard to={`/travel/${folder}`} folder={folder}/>
                        </div>
                    )
                })}
            </section>
        </div>
)}