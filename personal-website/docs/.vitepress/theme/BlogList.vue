<script setup>
import { ref, computed } from 'vue'
import { data as posts } from '../../blog/posts.data.js'

const selectedTag = ref(null)

// Compute tag counts
const tagCounts = computed(() => {
  const counts = {}
  posts.forEach(post => {
    const tags = post.tags || []
    tags.forEach(tag => {
      counts[tag] = (counts[tag] || 0) + 1
    })
  })
  return counts
})

// Compute sorted tags by post count, then alphabetically
const sortedTags = computed(() => {
  return Object.entries(tagCounts.value)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([tag]) => tag)
})

// Filtered posts based on selectedTag
const filteredPosts = computed(() => {
  if (!selectedTag.value) return posts
  return posts.filter(post => (post.tags || []).includes(selectedTag.value))
})

// Toggle tag filter
const selectTag = (tag) => {
  if (selectedTag.value === tag) {
    selectedTag.value = null
  } else {
    selectedTag.value = tag
  }
}

const formatDate = (dateStr) => {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  if (isNaN(date.getTime())) return ''
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}
</script>

<template>
  <div class="blog-layout">
    <div class="posts-section">
      <div v-if="filteredPosts.length === 0" class="no-posts">
        没有找到相关文章
      </div>
      <div v-else class="posts-list">
        <a v-for="post in filteredPosts" :key="post.url" :href="post.url" class="post-card">
          <article>
            <h2 class="post-title">{{ post.title }}</h2>
            <p v-if="post.description" class="post-description">{{ post.description }}</p>
            <div class="post-meta">
              <time class="post-date">{{ formatDate(post.date) }}</time>
              <span class="post-tags" v-if="post.tags && post.tags.length">
                <span v-for="tag in post.tags" :key="tag" class="post-tag">#{{ tag }}</span>
              </span>
            </div>
          </article>
        </a>
      </div>
    </div>

    <aside class="tags-sidebar">
      <div class="sidebar-sticky">
        <h3 class="sidebar-title">标签</h3>
        <div class="tags-cloud">
          <button
            class="tag-chip"
            :class="{ active: selectedTag === null }"
            @click="selectedTag = null"
          >
            全部 <span class="chip-count">{{ posts.length }}</span>
          </button>
          <button
            v-for="tag in sortedTags"
            :key="tag"
            class="tag-chip"
            :class="{ active: selectedTag === tag }"
            @click="selectTag(tag)"
          >
            #{{ tag }} <span class="chip-count">{{ tagCounts[tag] }}</span>
          </button>
        </div>
      </div>
    </aside>
  </div>
</template>

<style scoped>
.blog-layout {
  display: flex;
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 0;
  align-items: flex-start;
}

.posts-section {
  flex: 1;
  min-width: 0;
}

.posts-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Post card as a clean clickable block */
.post-card {
  display: block;
  text-decoration: none !important;
  padding: 20px 24px;
  border-radius: 12px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  transition: border-color 0.25s, box-shadow 0.25s, transform 0.2s;
}

.post-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  transform: translateY(-1px);
}

.post-title {
  margin: 0 0 8px 0;
  font-size: 1.15rem;
  font-weight: 600;
  line-height: 1.4;
  color: var(--vp-c-text-1);
}

.post-card:hover .post-title {
  color: var(--vp-c-brand-1);
}

.post-description {
  margin: 0 0 12px 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.82rem;
  color: var(--vp-c-text-3);
}

.post-date {
  white-space: nowrap;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.post-tag {
  color: var(--vp-c-brand-1);
  font-size: 0.8rem;
  white-space: nowrap;
}

/* Right sidebar: tag cloud chips */
.tags-sidebar {
  width: 220px;
  flex-shrink: 0;
}

.sidebar-sticky {
  position: sticky;
  top: calc(var(--vp-nav-height) + 16px);
}

.sidebar-title {
  margin: 0 0 12px 0;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--vp-c-text-3);
}

.tags-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 16px;
  padding: 4px 12px;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.tag-chip:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.tag-chip.active {
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  font-weight: 500;
}

.chip-count {
  font-size: 0.7rem;
  opacity: 0.7;
}

.no-posts {
  text-align: center;
  padding: 48px;
  color: var(--vp-c-text-3);
  border: 1px dashed var(--vp-c-border);
  border-radius: 12px;
}

/* Responsive */
@media (max-width: 900px) {
  .blog-layout {
    flex-direction: column;
    gap: 20px;
  }
  .tags-sidebar {
    width: 100%;
  }
}
</style>
