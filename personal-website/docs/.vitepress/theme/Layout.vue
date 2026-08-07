<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { onMounted, onUnmounted } from 'vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()

let observer = null

onMounted(() => {
  const html = document.documentElement;
  observer = new MutationObserver(() => {
    const isDarkTheme = html.classList.contains('dark');
    const expectedTheme = isDarkTheme ? 'dark' : 'light';
    const currentGlobalTheme = localStorage.getItem('global-theme');
    
    if (currentGlobalTheme !== expectedTheme) {
      localStorage.setItem('global-theme', expectedTheme);
      localStorage.setItem('mdbook-theme', expectedTheme === 'light' ? 'light' : 'navy');
      window.dispatchEvent(new CustomEvent('global-theme-change', { detail: { theme: expectedTheme } }));
    }
    
    if (expectedTheme === 'light') {
      if (!html.classList.contains('light-theme')) {
        html.classList.add('light-theme');
      }
    } else {
      if (html.classList.contains('light-theme')) {
        html.classList.remove('light-theme');
      }
    }
  });

  observer.observe(html, { attributes: true, attributeFilter: ['class'] });
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
})
</script>

<template>
  <Layout>
    <template #doc-after>
      <Comments v-if="frontmatter.comments !== false" />
    </template>
  </Layout>
</template>
