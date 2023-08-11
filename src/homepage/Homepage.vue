<script setup lang="ts">
import Affix from './Affix.vue'
import Aside from './Aside.vue'
import Main from './Main.vue'
</script>

<template>
  <div class="flex overflow-hidden w-screen h-screen text-[1rem]">
    <nav class="fixed top-4 right-8 z-1">
      <Affix />
    </nav>
    <aside class="w-80 rounded-r-3xl bg-primary text-primary-content">
      <Aside />
    </aside>
    <main class="flex-1  bg-base-100 text-base-content">
      <Main />
    </main>
  </div>
</template>
