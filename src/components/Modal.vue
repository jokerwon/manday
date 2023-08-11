<script setup lang="ts">
import { useEventListener } from '@vueuse/core'

defineProps<{
  open?: boolean
}>()

const emit = defineEmits(['cancel', 'ok'])

const modalRef = ref<HTMLDialogElement>()

useEventListener(modalRef, 'close', () => {
  emit('cancel')
})
</script>

<template>
  <teleport to="body">
    <dialog ref="modalRef" :open="$props.open" class="modal">
      <div class="modal-box">
        <div v-if="$slots.header" class="pb-4 font-bold text-lg">
          <slot name="header" />
        </div>
        <div class="modal-body">
          <slot />
        </div>
        <!-- <form method="dialog"> -->
        <div class="modal-action">
          <button class="btn btn-primary" @click="$emit('ok');">
            Comfirm
          </button>
          <button class="btn" @click="$emit('cancel');">
            Close
          </button>
        </div>
        <!-- </form> -->
      </div>
    </dialog>
  </teleport>
</template>
