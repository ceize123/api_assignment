<template>
  <!-- Custom Error Page -->
  <div
    class="h-screen w-screen flex justify-center items-center text-white text-center font-Lexend"
  >
    <NuxtImg
      src="/img/error-page.png"
      placeholder
      loading="lazy"
      class="absolute w-full h-full object-cover top-0 -z-10"
    />
    <div class="mt-24 mx-4">
      <h1 class="border-2 bg-mars-secondary w-1/2 mx-auto">
        {{ error.statusCode }}
      </h1>
      <h1 class="md:text-5xl text-2xl mt-6">
        Howdy! Space traveler, are you lost?
      </h1>
      <div class="my-6">
        <h2>{{ error.message }}</h2>
      </div>
      <NuxtLink to="/" class="mt-6">
        <button class="btn">Go Home</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps(['error']);
</script>

<style lang="scss" scoped></style>
