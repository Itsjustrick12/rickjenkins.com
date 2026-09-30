import BlogPost from "../components/Blog/BlogPost"
import { useParams } from 'react-router-dom'
import { UnderConstruction } from "../components/UnderConstruction"

export function BlogPostPage(){

    const { slug } = useParams()
    return (
        <section className="blog-page-container">
            <BlogPost file={slug}/>
        </section>
    )
}