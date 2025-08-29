<script setup lang="ts">
import Poem from './Poem.vue'
import Main from './Main.vue'
import ThemeToggle from '~/components/ThemeToggle.vue'
import { useTheme } from '~/composables/useTheme'

// 初始化主题
useTheme()
</script>

<template>
  <main class="w-full h-screen bg-bg-secondary text-text-primary transition-colors duration-300 relative">
    <!-- 主题切换按钮 -->
    <div class="absolute top-6 right-6">
      <ThemeToggle />
    </div>

    <!-- 主要内容 -->
    <div class="absolute top-[40vh] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
      <Poem />
      <Main />
    </div>
  </main>
</template>
