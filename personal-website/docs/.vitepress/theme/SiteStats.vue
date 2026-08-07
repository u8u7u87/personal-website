<script setup>
import { ref } from 'vue'
import { data } from '../../index.data.js'

const panel = ref(null)

const handleMouseMove = (e) => {
  if (!panel.value) return
  const rect = panel.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  panel.value.style.setProperty('--mouse-x', `${x}px`)
  panel.value.style.setProperty('--mouse-y', `${y}px`)
}

const formatNumber = (num) => {
  if (num === undefined || num === null) return '0'
  return num.toLocaleString()
}
</script>

<template>
  <section 
    ref="panel" 
    class="stats-panel" 
    @mousemove="handleMouseMove"
  >
    <div class="stats-grid">
      <div class="stat-item">
        <span class="stat-value">{{ formatNumber(data.blogCount) }}</span>
        <span class="stat-label">Blog Posts</span>
      </div>
      <div class="stat-item">
        <span class="stat-value">{{ formatNumber(data.analysisCount) }}</span>
        <span class="stat-label">Analysis Papers</span>
      </div>
      <div class="stat-item">
        <span class="stat-value">{{ formatNumber(data.booksCount) }}</span>
        <span class="stat-label">Book Chapters</span>
      </div>
      <div class="stat-item">
        <span class="stat-value">{{ formatNumber(data.totalWords) }}</span>
        <span class="stat-label">Total Words</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats-panel {
  position: relative;
  overflow: hidden;
  background: var(--glass-bg, rgba(15, 23, 42, 0.45));
  backdrop-filter: blur(var(--glass-blur, 12px));
  -webkit-backdrop-filter: blur(var(--glass-blur, 12px));
  border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.08));
  border-radius: 20px;
  padding: 24px 32px;
  margin: 0 auto 48px auto;
  max-width: 1152px;
  box-shadow: var(--glass-shadow, 0 8px 32px 0 rgba(0, 0, 0, 0.37));
  transition: border-color 0.3s ease,
              box-shadow 0.3s ease,
              background 0.3s ease;
}

.stats-panel::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(
    600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px),
    rgba(56, 189, 248, 0.08),
    transparent 40%
  );
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
}

.stats-panel::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: radial-gradient(
    350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px),
    rgba(255, 255, 255, 0.2),
    transparent 50%
  );
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 2;
}

.stats-panel:hover {
  border-color: var(--glass-border-hover, rgba(255, 255, 255, 0.18));
  background: var(--glass-bg-hover, rgba(15, 23, 42, 0.55));
}

.stats-panel:hover::before,
.stats-panel:hover::after {
  opacity: 1;
}

.stats-panel > * {
  position: relative;
  z-index: 3;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  text-align: center;
}

@media (min-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  position: relative;
}

@media (min-width: 768px) {
  .stat-item:not(:last-child)::after {
    content: '';
    position: absolute;
    right: -12px;
    top: 20%;
    height: 60%;
    width: 1px;
    background: rgba(255, 255, 255, 0.08);
  }
}

.stat-value {
  font-family: var(--font-heading, 'Outfit', sans-serif);
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--accent, #38bdf8);
  background: linear-gradient(135deg, #fff 50%, var(--accent, #38bdf8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-secondary, #94a3b8);
  font-weight: 500;
}
</style>
