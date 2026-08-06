<script setup>
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

const loadGiscus = () => {
  const container = document.getElementById('giscus-container')
  if (!container) return
  
  container.innerHTML = ''
  
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'username/personal-website')
  script.setAttribute('data-repo-id', 'repo-id-placeholder')
  script.setAttribute('data-category', 'Announcements')
  script.setAttribute('data-category-id', 'category-id-placeholder')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'bottom')
  script.setAttribute('data-theme', 'preferred_color_scheme')
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true
  
  container.appendChild(script)
}

onMounted(() => {
  loadGiscus()
})

watch(() => route.path, () => {
  nextTick(() => {
    loadGiscus()
  })
})
</script>

<template>
  <div id="giscus-container" class="giscus-wrapper" style="margin-top: 50px;"></div>
</template>
