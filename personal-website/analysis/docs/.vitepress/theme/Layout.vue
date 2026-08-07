<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { onMounted } from 'vue'

const { Layout } = DefaultTheme
const { site, frontmatter } = useData()

const rootPrefix = site.value.base.replace(/analysis\/$/, '') // '/personal-website/'

onMounted(() => {
  const html = document.documentElement;
  
  // Wire up global theme switcher button
  const toggleBtn = document.getElementById('global-theme-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isCurrentlyLight = html.classList.contains('light-theme');
      const newTheme = isCurrentlyLight ? 'dark' : 'light';
      
      if (newTheme === 'light') {
        html.classList.add('light-theme');
        html.classList.add('light');
      } else {
        html.classList.remove('light-theme');
        html.classList.remove('light');
      }
      
      localStorage.setItem('global-theme', newTheme);
      localStorage.setItem('mdbook-theme', newTheme === 'light' ? 'light' : 'navy');
      window.dispatchEvent(new CustomEvent('global-theme-change', { detail: { theme: newTheme } }));
    });
  }
})
</script>

<template>
  <Layout>
    <template #layout-top>
      <nav class="global-nav">
        <a :href="rootPrefix" target="_self">Home</a>
        <a :href="rootPrefix + 'blog/'" target="_self">Blog</a>
        <a :href="rootPrefix + 'analysis/'" class="active" target="_self">Analysis</a>
        <a :href="rootPrefix + 'books/'" target="_self">Books</a>
        <button id="global-theme-toggle" class="theme-toggle-btn" aria-label="Toggle Theme">
          <svg class="sun-icon" viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.39.39-1.03 0-1.41zm-12.37 12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.39.39-1.03 0-1.41z"/></svg>
          <svg class="moon-icon" viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12.3 22h-.1c-5.5 0-10-4.5-10-10 0-4.8 3.5-8.9 8.2-9.8.6-.1 1.2.3 1.3.9.1.6-.2 1.2-.8 1.4-3.1 1.1-5.3 4.1-5.3 7.5 0 4.4 3.6 8 8 8 3.4 0 6.4-2.2 7.5-5.3.2-.6.8-.9 1.4-.8.6.1 1 .7.9 1.3C21.1 18.5 17 22 12.3 22z"/></svg>
        </button>
      </nav>
    </template>
    <template #doc-after>
      <Comments v-if="frontmatter.comments !== false" />
    </template>
  </Layout>
</template>
