import BlogCard from "./Blog/BlogCard";
import { getPost } from "./Blog/posts";
import AlbumCard from "./Travel/AlbumCard";

// expand the props explicitly! type, filename
// to render a blogpost, do "blog" and "KingOfHavingFun" basically the markdown file name without the .md
// to render travelpost, do "album" and "Boston2026" or whatever the folder is called
function HighlightedPost ({type, filename}){    
    const isBlogPost = type === "blog"

    if (isBlogPost){
        return (<BlogCard file={filename}/>)
    }
    else {
        return (<AlbumCard folder = {filename} coverMode={'primary'}/>)
    }

}
export default HighlightedPost