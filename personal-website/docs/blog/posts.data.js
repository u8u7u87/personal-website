import { createContentLoader } from 'vitepress'

export default createContentLoader('blog/*.md', {
  transform(raw) {
    return raw
      .filter(({ url }) => !url.endsWith('/index.html'))
      .map(({ url, frontmatter }) => ({
        title: frontmatter.title,
        url,
        description: frontmatter.description,
        date: frontmatter.pubDate,
        tags: frontmatter.tags || []
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  }
})
