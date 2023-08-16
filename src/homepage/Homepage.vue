<script setup lang="ts">
// import Affix from './Affix.vue'
import Aside from './Aside.vue'
import Main from './Main.vue'
</script>

<template>
  <div class="flex overflow-hidden w-screen h-screen bg-primary text-primary-content text-[1rem]">
    <!-- <nav class="fixed top-4 right-8 z-1">
      <Affix />
    </nav> -->
    <main class="flex-1">
      <Main />
    </main>
    <aside class="w-11/24 p-4">
      <div class="h-full rounded-3xl bg-base-100 text-base-content">
        <Aside />
      </div>
    </aside>
  </div>
</template>
