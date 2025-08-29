<script setup lang="ts">
import { usePoem } from '~/composables/usePoem'

const poem = usePoem()
</script>

<template>
  <div class="poem text-center text-text-primary">
    <p class="content w-[80vw]">
      {{ poem?.content }}
    </p>
    <div class="title flex items-center justify-center mt-2">
      <span>「{{ poem?.title }}」</span>
      <span class="author">{{ poem?.author }}</span>
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
.author {
  color: var(--color-text-on-primary);
  background-color: var(--color-primary-light);
  border-radius: 3px;
  padding: 3px 4px 3px 3px;
  margin: 0.5em;
  font-size: 67%;
  letter-spacing: -1px;
  transition: background-color 0.3s ease;
}
</style>
