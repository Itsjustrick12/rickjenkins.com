import ReactMarkdown from 'react-markdown'
import { BlogImage } from './BlogImage'; //Supports custom formatting for various image types parsing alt data
import { getPost } from './posts';

// Formatted Markdown Post, file arguement is the "name" of the file
// So if the file is HelloWorld.md, the value would be HelloWorld
function BlogPost({ file }) {
    
    // Get the raw markdown for the file
    const post = getPost(file)
    // Guard against a bad slug or missing file
    if (!post) return null
    const { content, metadata} = post

    return (
        <article className="blog-post">
            <div className='blog-post-header'>
                <h1>{metadata.title}</h1>
                <h3>{metadata.date}</h3>
            </div>
            <ReactMarkdown
                components={{
                    img: BlogImage
                }}
            >
                {content}
            </ReactMarkdown>
        </article>
    );
}
export default BlogPost;