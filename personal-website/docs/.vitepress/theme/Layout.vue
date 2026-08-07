<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { onMounted } from 'vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()

onMounted(() => {
  const html = document.documentElement;
  const observer = new MutationObserver(() => {
    const isDarkTheme = html.classList.contains('dark');
    const expectedTheme = isDarkTheme ? 'dark' : 'light';
    const currentGlobalTheme = localStorage.getItem('global-theme');
    
    if (currentGlobalTheme !== expectedTheme) {
      localStorage.setItem('global-theme', expectedTheme);
      window.dispatchEvent(new CustomEvent('global-theme-change', { detail: { theme: expectedTheme } }));
    }
    
    if (expectedTheme === 'light') {
      html.classList.add('light-theme');
    } else {
      html.classList.remove('light-theme');
    }
  });

  observer.observe(html, { attributes: true, attributeFilter: ['class'] });
})
</script>

<template>
  <Layout>
    <template #doc-after>
      <Comments v-if="frontmatter.comments !== false" />
    </template>
  </Layout>
</template>
