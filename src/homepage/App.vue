<script setup lang="ts">
import Poem from './Poem.vue'
import Search from './Search.vue'
</script>

<template>
  <main class="w-full h-screen">
    <Logo />
    <div class="absolute top-[30vw] left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Poem />
      <Search />
    </div>
  </main>
</template>
