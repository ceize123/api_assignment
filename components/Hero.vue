<template>
  <div class="w-full h-screen relative text-mars-primary font-Krona">
    <div
      class="absolute top-[20vh] md:left-[10vw] left-0 md:right-auto right-0 md:mx-0 mx-auto md:w-auto w-64 text-center bg-gray-300 px-4 py-2"
    >
      <h1 class="md:text-6xl text-4xl">Explore Mars.</h1>
    </div>
    <NuxtImg
      src="/img/hero-desktop.png"
      alt="hero"
      class="w-full h-full object-cover md:block hidden"
    />

    <NuxtImg
      src="/img/hero-mobile.png"
      alt="hero"
      class="w-full h-full object-cover md:hidden"
    />
    <NuxtLink
      to="#gallery"
      class="absolute bottom-[15vh] md:right-[15vw] right-0 md:left-auto left-0 md:mx-0 mx-auto md:w-auto w-64 text-center cursor-pointer"
    >
      <div class="relative flex justify-center items-center group">
        <h3 class="relative z-10">Gallery</h3>
        <div
          class="border-dashed border-2 absolute h-[156px] w-[156px] animate-[spin_10s_linear_infinite] group-hover:animate-none group-hover:border-solid group-hover:bg-white rounded-full"
        ></div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
