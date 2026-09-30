import { ParseMDFile } from './parseMDFile'

// Locate the markdown files
const raw = import.meta.glob('/src/posts/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
})
// Give a desired markdown file
export function getPost(slug) {
    const markdown = raw[`/src/posts/${slug}.md`]
    return markdown ? ParseMDFile(markdown) : null
}
// Get ALL the markdown files
export function getAllSlugs() {
    return Object.keys(raw).map(path => path.split('/').pop().replace('.md', ''))
}