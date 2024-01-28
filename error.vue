<template>
  <div
    class="mt-10 sm:max-w-md max-w-sm mx-auto text-center card p-4 [&>p]:md:mt-7 [&>p]:mt-3"
  >
    <p class="md:text-7xl text-5xl font-bold">{{ error.statusCode }}</p>
    <p class="md:text-6xl text-4xl">Ooooops...</p>
    <p>
      <template v-if="error.statusCode === 403">
        <p class="text-lg">Access is forbidden.</p>
      </template>
      <template v-else-if="error.statusCode === 404">
        <p class="text-lg">The requested resource could not be found.</p>
      </template>
      <template v-else-if="error.statusCode === 429">
        <p class="text-lg">Too many requests. Please try again later.</p>
      </template>
      <template v-else>
        <p class="text-lg">{{ error.message }}</p>
      </template>
    </p>
  </div>
</template>

<script setup>
defineProps(['error']);
</script>

<style lang="scss" scoped></style>
