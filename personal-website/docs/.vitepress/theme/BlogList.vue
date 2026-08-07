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
    selectedTag.value = null // clear filter if clicking active tag again
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
        <article v-for="post in filteredPosts" :key="post.url" class="post-card">
          <div class="post-card-content">
            <a :href="post.url" class="post-link">
              <h2 class="post-title">{{ post.title }}</h2>
              <p v-if="post.description" class="post-description">{{ post.description }}</p>
            </a>
            <div class="post-meta">
              <span class="post-date">{{ formatDate(post.date) }}</span>
              <span class="meta-separator" v-if="post.tags && post.tags.length">•</span>
              <span class="post-tags" v-if="post.tags && post.tags.length">
                <button
                  v-for="tag in post.tags"
                  :key="tag"
                  class="post-tag-btn"
                  :class="{ active: selectedTag === tag }"
                  @click.stop.prevent="selectTag(tag)"
                >
                  #{{ tag }}
                </button>
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>

    <aside class="tags-sidebar">
      <div class="sidebar-sticky">
        <h3 class="sidebar-title">文章分类 / 标签</h3>
        <div class="tags-menu">
          <button 
            class="sidebar-tag-btn" 
            :class="{ active: selectedTag === null }"
            @click="selectedTag = null"
          >
            <span class="tag-name">全部文章</span>
            <span class="tag-count">{{ posts.length }}</span>
          </button>
          <button
            v-for="tag in sortedTags"
            :key="tag"
            class="sidebar-tag-btn"
            :class="{ active: selectedTag === tag }"
            @click="selectTag(tag)"
          >
            <span class="tag-name">#{{ tag }}</span>
            <span class="tag-count">{{ tagCounts[tag] }}</span>
          </button>
        </div>
      </div>
    </aside>
  </div>
</template>

<style scoped>
.blog-layout {
  display: flex;
  gap: 40px;
  max-width: 1152px;
  margin: 0 auto;
  padding: 20px 0;
  align-items: flex-start;
}

.posts-section {
  flex: 1;
  min-width: 0;
}

.posts-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Glassmorphic Post Card */
.post-card {
  background: var(--glass-bg, rgba(15, 23, 42, 0.45));
  backdrop-filter: blur(var(--glass-blur, 12px));
  -webkit-backdrop-filter: blur(var(--glass-blur, 12px));
  border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.08));
  border-radius: 16px;
  padding: 24px;
  box-shadow: var(--glass-shadow, 0 8px 32px 0 rgba(0, 0, 0, 0.37));
  transition: border-color 0.3s ease,
              background-color 0.3s ease,
              transform 0.3s ease,
              box-shadow 0.3s ease;
}

.post-card:hover {
  border-color: var(--glass-border-hover, rgba(255, 255, 255, 0.18));
  background-color: var(--glass-bg-hover, rgba(15, 23, 42, 0.55));
  transform: translateY(-2px);
  box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.45);
}

.post-link {
  text-decoration: none !important;
  display: block;
}

.post-title {
  margin: 0 0 12px 0;
  font-family: var(--font-heading, 'Outfit', sans-serif);
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--text-primary);
  transition: color 0.2s ease;
}

.post-card:hover .post-title {
  color: var(--accent);
}

.post-description {
  margin: 0 0 16px 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-secondary);
}

.post-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.meta-separator {
  opacity: 0.5;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

/* Hashtag buttons */
.post-tag-btn {
  background: var(--glass-bg-hover, rgba(255, 255, 255, 0.05));
  border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.08));
  border-radius: 6px;
  padding: 2px 8px;
  font-size: 0.75rem;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
}

.post-tag-btn:hover {
  background: var(--accent-glow, rgba(56, 189, 248, 0.2));
  border-color: var(--accent);
  color: var(--accent);
}

.post-tag-btn.active {
  background: var(--accent);
  border-color: var(--accent);
  color: #000;
  font-weight: 500;
}

/* Sidebar */
.tags-sidebar {
  width: 260px;
  flex-shrink: 0;
  position: sticky;
  top: 100px;
}

.sidebar-sticky {
  background: var(--glass-bg, rgba(15, 23, 42, 0.45));
  backdrop-filter: blur(var(--glass-blur, 12px));
  -webkit-backdrop-filter: blur(var(--glass-blur, 12px));
  border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.08));
  border-radius: 16px;
  padding: 20px;
  box-shadow: var(--glass-shadow, 0 8px 32px 0 rgba(0, 0, 0, 0.37));
}

.sidebar-title {
  margin: 0 0 16px 0;
  font-family: var(--font-heading, 'Outfit', sans-serif);
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  border-bottom: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
  padding-bottom: 8px;
}

.tags-menu {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sidebar-tag-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 8px 12px;
  text-align: left;
  font-size: 0.9rem;
  color: var(--text-secondary);
  cursor: pointer;
  width: 100%;
  transition: all 0.2s ease;
}

.sidebar-tag-btn:hover {
  background: var(--glass-bg-hover, rgba(255, 255, 255, 0.03));
  color: var(--accent);
}

.sidebar-tag-btn.active {
  background: var(--accent-glow, rgba(56, 189, 248, 0.15));
  border-color: var(--accent-glow);
  color: var(--accent);
  font-weight: 600;
}

.tag-count {
  font-size: 0.75rem;
  background: var(--glass-border-hover, rgba(255, 255, 255, 0.08));
  border-radius: 20px;
  padding: 2px 8px;
  color: var(--text-muted);
}

.sidebar-tag-btn.active .tag-count {
  background: var(--accent);
  color: #000;
  font-weight: 600;
}

.no-posts {
  text-align: center;
  padding: 48px;
  background: var(--glass-bg, rgba(15, 23, 42, 0.45));
  border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.08));
  border-radius: 16px;
  color: var(--text-muted);
}

/* Responsive design */
@media (max-width: 900px) {
  .blog-layout {
    flex-direction: column;
    gap: 24px;
  }
  .tags-sidebar {
    width: 100%;
    position: static;
  }
}
</style>
