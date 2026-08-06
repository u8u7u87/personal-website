<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-top>
      <nav class="global-nav">
        <a href="/personal-website/">Home</a>
        <a href="/personal-website/blog/">Blog</a>
        <a href="/personal-website/analysis/" class="active">Analysis</a>
        <a href="/personal-website/books/">Books</a>
      </nav>
    </template>
  </Layout>
</template>
