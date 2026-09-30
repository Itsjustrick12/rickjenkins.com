import { Link } from 'react-router-dom'
import { getPost } from './posts'
import { Button } from 'bootstrap'

function BlogCard({ file }) {
    //Use helper function to grab
    const post = getPost(file)

    // Guard against a bad slug or missing file
    if (!post) return null

    // Format the meta data to be a post that includes a link to it's dedicate page
    const { metadata } = post

    return (
        // Actually build the card using the metadata
        <section className='blog-card'>
            <h2>{metadata.title}</h2>
            {/* <p>This file has the type: {metadata.type}</p> */}
            <p>Date: {metadata.date}</p>
            <img src={metadata.thumbnail}/>
            
            <div>
                <Link to={`/blog/${file}`} className="blog-button">
                    Read This Post!
                </Link>
            </div>
        </section>
    )
}

export default BlogCard;