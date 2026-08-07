<script setup>
import { onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

const getActiveTheme = () => {
  const isLight = document.documentElement.classList.contains('light-theme')
  return isLight ? 'light' : 'dark'
}

const loadGiscus = () => {
  if (typeof window === 'undefined') return
  const container = document.getElementById('giscus-container')
  if (!container) return

  const iframe = container.querySelector('iframe.giscus-frame')
  const giscusTheme = getActiveTheme()

  if (iframe) {
    iframe.contentWindow.postMessage({
      giscus: {
        setConfig: {
          term: route.path,
          theme: giscusTheme
        }
      }
    }, 'https://giscus.app')
    return
  }

  container.innerHTML = ''
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'u8u7u87/personal-website')
  script.setAttribute('data-repo-id', 'R_kgDOTvmA-Q')
  script.setAttribute('data-category', 'Announcements')
  script.setAttribute('data-category-id', 'DIC_kwDOTvmA-c4DC1u8')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'bottom')
  script.setAttribute('data-theme', giscusTheme)
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true

  container.appendChild(script)
}

const handleThemeChange = (e) => {
  if (typeof window === 'undefined') return
  const newTheme = e.detail.theme === 'light' ? 'light' : 'dark'
  const iframe = document.querySelector('iframe.giscus-frame')
  if (iframe) {
    iframe.contentWindow.postMessage({
      giscus: {
        setConfig: {
          theme: newTheme
        }
      }
    }, 'https://giscus.app')
  }
}

onMounted(() => {
  loadGiscus()
  window.addEventListener('global-theme-change', handleThemeChange)
})

onUnmounted(() => {
  window.removeEventListener('global-theme-change', handleThemeChange)
})

watch(() => route.path, () => {
  nextTick(() => {
    loadGiscus()
  })
})
</script>

<template>
  <div class="comments-section" style="margin-top: 50px;">
    <div id="giscus-container" class="giscus-wrapper"></div>
  </div>
</template>
