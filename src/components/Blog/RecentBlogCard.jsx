import { getMostRecentPost} from './posts'
import BlogCard from './BlogCard'
function RecentBlogCard() {

    const file = getMostRecentPost()

    return (
        <BlogCard file={file}/>
    )
}

export default RecentBlogCard;