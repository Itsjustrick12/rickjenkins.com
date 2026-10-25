import AlbumCard from "../components/Travel/AlbumCard";
import { getAllAlbumFolderNames } from "../components/Travel/albums";
import { useState } from "react";



export function Travel(){
    const [coverMode, setCoverMode] = useState('primary');
    const albums = getAllAlbumFolderNames()
    function toggleCoverMode() {
        setCoverMode(currentMode =>
            currentMode === 'primary' ? 'secondary' : 'primary'
        );
    }
    return (
        <div className="page-container">
            <div className="center-everything">
            <h1>Travel</h1>

            <div className="cover-mode-toggle">
                <button
                    className="active"
                    onClick={toggleCoverMode}
                >
                    {coverMode === 'primary'
                        ? 'Rick Mode'
                        : 'Group Mode'}
            </button>
            </div>
        </div>

            
            <section className="album-card-container">
                {albums.map(folder => {
                    return (
                        <div className="album-card-box" key={folder}>
                            <AlbumCard to={`/travel/${folder}`} folder={folder} coverMode={coverMode}/>
                        </div>
                    )
                })}
            </section>
        </div>
)}