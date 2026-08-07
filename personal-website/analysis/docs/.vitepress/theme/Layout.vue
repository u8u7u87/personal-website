<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
const { Layout } = DefaultTheme
const { site, frontmatter } = useData()
const rootPrefix = site.value.base.replace(/analysis\/$/, '') // '/personal-website/'
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
