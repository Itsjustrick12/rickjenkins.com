import ReactMarkdown from 'react-markdown'

// Allows the use of file searching and results
// The ?raw means "give me the file contents exactly"
const posts = import.meta.glob('../posts/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
})

// Formatted Markdown Post, file arguement is the "name" of the file
// So if the file is HelloWorld.md, the value would be HelloWorld
function BlogPost({ file }) {
    // Get the raw markdown for the file
    const markdown = posts[`../posts/${file}.md`];

    return (
        <article>
            <ReactMarkdown>
                {markdown}
            </ReactMarkdown>
        </article>
    )
}
export default BlogPost