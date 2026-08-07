import { createContentLoader } from 'vitepress'

export default createContentLoader('blog/*.md', {
  transform(raw) {
    return raw
      .filter(({ url }) => !url.endsWith('/index.html') && !url.endsWith('/blog/') && !url.endsWith('/blog'))
      .map(({ url, frontmatter }) => ({
        title: frontmatter.title,
        url,
        description: frontmatter.description,
        date: frontmatter.pubDate,
        tags: frontmatter.tags || []
      }))
      .sort((a, b) => {
        const timeA = a.date ? new Date(a.date).getTime() : 0
        const timeB = b.date ? new Date(b.date).getTime() : 0
        return timeB - timeA
      })
  }
})
