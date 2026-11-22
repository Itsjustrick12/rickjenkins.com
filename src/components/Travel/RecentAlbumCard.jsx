import AlbumCard from "./AlbumCard";
import { GetMostRecentAlbumName } from "./albums";
function RecentAlbumCard() {
    const folder = GetMostRecentAlbumName()
    const coverMode = 'primary'
    return(
        <AlbumCard folder={folder} coverMode={coverMode}/>
    )
}
export default RecentAlbumCard;