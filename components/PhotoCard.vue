<template>
  <div
    class="card text-center cursor-pointer group h-full overflow-hidden rounded-lg relative flex items-center justify-center bg-gray-100"
    @click="toggleModal"
  >
    <NuxtImg
      :src="photo.img_src"
      alt="mars photo"
      width="360px"
      height="360px"
      placeholder="/img/space.png"
      class="transition duration-300 ease-in-out relative group-hover:md:blur-sm group-hover:scale-105"
    />
    <div
      class="h-full w-full bg-black/60 hidden group-hover:md:flex absolute top-0 text-white justify-center items-center"
    >
      <p class="text-3xl text-mars-primary">See More</p>
    </div>
    <PhotoDetail
      :photo="photo"
      :modalActive="modalActive"
      @close-modal="toggleModal"
    />
  </div>
</template>

<script setup>
const { photo } = defineProps(['photo']);
const modalActive = ref(false);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};

let handleEscapeKey;

onMounted(() => {
  handleEscapeKey = (event) => {
    if (event.key === 'Escape') {
      modalActive.value = false;
    }
  };

  window.addEventListener('keydown', handleEscapeKey);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscapeKey);
});
</script>

<style lang="scss" scoped></style>
