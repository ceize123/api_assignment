<template>
  <div
    class="w-full h-screen relative text-mars-primary font-Krona flex justify-center"
  >
    <div class="container absolute h-screen">
      <!-- Slogan -->
      <div
        class="absolute xl:top-[14vh] md:top-[12vh] top-[15vh] md:left-10 md:right-auto md:block flex flex-col items-center md:w-auto w-full"
      >
        <div class="flex items-end md:gap-6">
          <div class="relative md:w-24 md:inline hidden">
            <NuxtImg src="/img/hero-graphic1.png" alt="graphic" />
          </div>
          <h1 class="mb-2">Explore Mars.</h1>
        </div>
        <div class="mt-2 flex gap-2">
          <NuxtImg src="/img/hero-graphic2.png" alt="graphic" class="w-7" />
          <div class="bg-white flex items-center justify-center flex-1 px-2">
            <h3>Plan for the Future</h3>
          </div>
        </div>
      </div>

      <!-- Gallery Button -->
      <div>
        <NuxtLink
          to="#gallery"
          class="absolute md:bottom-[15vh] bottom-[45vh] md:right-[10vw] right-0 md:left-auto left-0 md:mx-0 mx-auto md:w-auto w-64 text-center cursor-pointer"
        >
          <div class="relative flex justify-center items-center group">
            <h2 class="relative z-10">Gallery</h2>
            <div
              class="border-dashed border-2 absolute md:h-40 md:w-40 h-32 w-32 animate-[spin_10s_linear_infinite] group-hover:animate-none group-hover:border-solid group-hover:bg-white rounded-full"
            ></div>
          </div>
        </NuxtLink>
      </div>
    </div>

    <!-- Background Image -->
    <NuxtImg
      src="/img/hero-desktop.png"
      alt="hero"
      class="w-full h-full object-cover object-top md:block hidden"
    />

    <NuxtImg
      src="/img/hero-mobile.png"
      alt="hero"
      class="w-full h-full object-cover object-bottom md:hidden"
    />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
