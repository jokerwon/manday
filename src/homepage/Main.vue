<script setup lang="ts">
import Search from './Search.vue'
</script>

<template>
  <div class="relative w-fit flex flex-col items-center mt-32 px-10 py-12 pt-8 rounded-sm shadow-elevation bg-bg-primary transition-all duration-300">
    <div class="absolute top-0 translate-y-[-50%] flex items-center justify-center p-2 rounded-full bg-secondary text-4xl text-[var(--color-jade-pale)] transition-all duration-300">
      <Logo />
    </div>
    <h3 class="flex flex-col items-center gap-1 text-2xl text-secondary font-bold font-mono transition-colors duration-300">
      <span>Manday</span>
    </h3>
    <Search />
  </div>
</template>
