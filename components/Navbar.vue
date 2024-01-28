<template>
  <header
    class="shadow-sm bg-navbar fixed top-0 w-screen z-10 text-mars-primary"
  >
    <nav class="container mx-auto py-4 px-8 flex justify-between items-center">
      <NuxtLink to="/" class="bg-white px-2 rounded-sm">Mars Rover</NuxtLink>
      <div>
        <NuxtLink to="/#gallery" class="mr-6 link">Gallery</NuxtLink>
        <NuxtLink to="/about" class="link">About</NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
