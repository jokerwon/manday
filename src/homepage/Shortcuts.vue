<script setup lang="ts">
import { shortcuts } from '~/logic/storage'
defineEmits(['add'])
</script>

<template>
  <div class="flex items-center">
    <span v-for="(item, index) in shortcuts" :key="index" class="btn mx-2 first:ml-0">{{ item.title }}</span>
    <button class="btn btn-square text-4xl mx-2">
      <span class="i-carbon:add" @click="$emit('add')" />
    </button>
  </div>
</template>
