<script setup lang="ts">
import { usePoem } from '~/composables/usePoem'

const poem = usePoem()
</script>

<template>
  <div class="poem text-center">
    <p class="content w-[80vw]">
      {{ poem?.content }}
    </p>
    <div class="title flex items-center justify-center mt-4">
      <span>「{{ poem?.title }}」</span>
      <span>{{ poem?.author }}</span>
    </div>
  </div>
</template>

<style scoped>
.poem {
  font-family: 'JXZhuoKai';
}
.content {
  font-size: calc(30px + 1vw);
  word-break: keep-all;
}
.title {
  font-size: calc(10px + 1vw);
}
</style>
