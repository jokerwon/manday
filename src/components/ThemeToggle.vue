<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

const { theme, actualTheme, toggleTheme } = useTheme()

const themeIcons = {
  light: 'i-ph-sun',
  dark: 'i-ph-moon',
  auto: 'i-ph-circle-half',
}

const themeLabels = {
  light: '浅色',
  dark: '深色',
  auto: '自动',
}
</script>

<template>
  <div class="theme-toggle">
    <button
      class="flex items-center justify-center w-10 h-10 rounded-full bg-bg-primary border border-border-light hover:bg-bg-accent-primary hover:border-border-accent transition-all duration-200 shadow-sm hover:shadow-md"
      :title="`当前主题: ${themeLabels[theme]} (实际: ${themeLabels[actualTheme]})`"
      @click="toggleTheme"
    >
      <span
        :class="themeIcons[theme]"
        class="text-lg text-text-primary transition-colors duration-200"
      />
    </button>
  </div>
</template>

<style scoped>
.theme-toggle button:hover {
  transform: scale(1.05);
}

.theme-toggle button:active {
  transform: scale(0.95);
}
</style>
