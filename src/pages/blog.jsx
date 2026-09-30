import { UnderConstruction } from "../components/UnderConstruction"
import BlogCard from "../components/Blog/BlogCard"
import { getAllSlugs } from "../components/Blog/posts"

export function Blog(){
    const posts = getAllSlugs()

    return (
        <div className="page-container">
            <div className="center-everything">
                <h1>Blog Page</h1>
                <p></p>
            </div>

            <section className="blog-card-container">
                {posts.map(post => (
                    <div className="blog-card-box" key={post}>
                        <BlogCard file={post} />
                    </div>
                ))}
            </section>
        </div>
    )
}