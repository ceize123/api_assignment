<template>
  <div class="flex justify-center absolute left-0 right-0 bottom-20 z-10">
    <svg
      class="w-8 h-8 animate-spin"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="#000000"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        fill="#000000"
      ></path>
    </svg>
  </div>
</template>

<script setup>
const isLoading = defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped></style>
