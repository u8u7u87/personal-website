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
        <a :href="rootPrefix">Home</a>
        <a :href="rootPrefix + 'blog/'">Blog</a>
        <a :href="rootPrefix + 'analysis/'" class="active">Analysis</a>
        <a :href="rootPrefix + 'books/'">Books</a>
      </nav>
    </template>
    <template #doc-after>
      <Comments v-if="frontmatter.comments !== false" />
    </template>
  </Layout>
</template>
