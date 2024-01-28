<template>
  <Teleport to="body">
    <Transition name="loading-page">
      <div
        v-show="!firstPageLoaded"
        class="h-screen w-screen flex flex-col justify-center items-center bg-black z-20 fixed top-0 left-0 overflow-hidden"
      >
        <div class="animate-[bounce_7s_infinite]">
          <NuxtImg src="/img/astronaut.png" alt="astronaut" />
        </div>
        <div class="loader bg-white p-2 rounded-full flex space-x-3">
          <div
            v-for="i in 3"
            :key="i"
            class="w-3 h-3 bg-gray-800 rounded-full animate-bounce"
          ></div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({
  firstPageLoaded: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.loader div:first-child {
  animation-delay: 0.1s;
}

.loader div:nth-child(2) {
  animation-delay: 0.3s;
}

.loader div:nth-child(3) {
  animation-delay: 0.5s;
}

.loading-page-leave-to {
  opacity: 0;
  transform: scale(0);
}

.loading-page-leave-active {
  transition: all 0.4s ease-in-out 0.2s;
}
</style>
