import ReactMarkdown from 'react-markdown'
import { BlogImage } from './BlogImage'; //Supports custom formatting for various image types parsing alt data
import { getPost } from './posts';

// Formatted Markdown Post, file arguement is the "name" of the file
// So if the file is HelloWorld.md, the value would be HelloWorld
function BlogPost({ file }) {
    
    // Get the raw markdown for the file
    const markdown = getPost(file)
    const content = markdown.content

    return (
        <article className="blog-post">
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