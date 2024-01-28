<template>
  <!-- To move this component to body -->
  <Teleport to="body">
    <Transition name="modal-outer">
      <div
        v-show="modalActive"
        class="fixed w-full bg-black/30 h-screen top-0 left-0 flex justify-center z-30"
      >
        <Transition name="modal-inner">
          <div
            v-if="modalActive"
            class="mx-2 p-4 bg-white max-w-screen-md max-h-[96vh] overflow-hidden self-center relative"
          >
            <button
              class="absolute right-0 top-0 px-3.5 py-1.5 bg-mars-secondary border-2 text-mars-primary"
              @click="$emit('close-modal')"
            >
              X
            </button>
            <slot />
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineEmits(['close-modal']);

defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.3s ease-in-out 0.15s;
}

.modal-inner-leave-active {
  transition: all 0.3s ease-in-out;
}
</style>
