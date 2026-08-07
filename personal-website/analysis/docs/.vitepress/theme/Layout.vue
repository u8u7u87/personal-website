<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { onMounted } from 'vue'

const { Layout } = DefaultTheme
const { site, frontmatter } = useData()

const rootPrefix = site.value.base.replace(/analysis\/$/, '') // '/personal-website/'

onMounted(() => {
  const html = document.documentElement;
  
  // Create a MutationObserver to listen to class changes on the html tag.
  // When VitePress's native switcher toggles `.dark` class, we update `global-theme` in localStorage
  // and dispatch the `global-theme-change` event so dynamic elements (like Comments) react in sync!
  const observer = new MutationObserver(() => {
    const isDarkTheme = html.classList.contains('dark');
    const expectedTheme = isDarkTheme ? 'dark' : 'light';
    const currentGlobalTheme = localStorage.getItem('global-theme');
    
    if (currentGlobalTheme !== expectedTheme) {
      localStorage.setItem('global-theme', expectedTheme);
      localStorage.setItem('mdbook-theme', expectedTheme === 'light' ? 'light' : 'navy');
      window.dispatchEvent(new CustomEvent('global-theme-change', { detail: { theme: expectedTheme } }));
    }
    
    // Maintain our helper class light-theme in sync
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
    <template #layout-top>
      <nav class="global-nav">
        <a :href="rootPrefix" target="_self">Home</a>
        <a :href="rootPrefix + 'blog/'" target="_self">Blog</a>
        <a :href="rootPrefix + 'analysis/'" class="active" target="_self">Analysis</a>
        <a :href="rootPrefix + 'books/'" target="_self">Books</a>
      </nav>
    </template>
    <template #doc-after>
      <Comments v-if="frontmatter.comments !== false" />
    </template>
  </Layout>
</template>
