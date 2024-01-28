<template>
  <LoadingPage :firstPageLoaded="firstPageLoaded" />
  <div>
    <!-- Hero -->
    <Hero />

    <!-- Gallery -->
    <div class="container mx-auto pt-24" id="gallery">
      <div
        class="grid lg:grid-cols-4 sm:grid-cols-3 gap-5 grid-rows-1 relative xl:mx-8 mx-4 sm:mx-0"
      >
        <div
          v-for="(p, index) in photos"
          :key="p.id"
          class="h-full"
          :ref="
            (el) =>
              index === photos.length - 1 ? (lastPhoto['element'] = el) : null
          "
        >
          <PhotoCard :photo="p" />
        </div>

        <!-- Image Spinner -->
        <Spinner v-if="isLoading" />
      </div>
    </div>
  </div>
</template>

<script setup>
const photos = ref([]);
const page = ref(1);
const isLoading = ref(false);
const firstPageLoaded = ref(false);
const lastPhoto = {};

const fetchPhotos = async () => {
  isLoading.value = true;
  const { data } = await useFetch(`/api/nasa/${page.value}`);
  photos.value = [...photos.value, ...data._rawValue];
  isLoading.value = false;
};

const handleScroll = () => {
  const nearBottom = getBottom(document.body.offsetHeight - 300);

  if (nearBottom && !isLoading.value) {
    page.value++;
    fetchPhotos();
  }
};

const getBottom = (bottom) => {
  return window.innerHeight + window.scrollY > bottom;
};

//   if window is at the bottom already when onMounted, fetch more photos
const checkOnMountedHeight = () => {
  const bottom = lastPhoto.element
    ? lastPhoto.element.getBoundingClientRect().bottom
    : window.innerHeight;
  if (getBottom(bottom)) {
    page.value++;
    fetchPhotos();
  }
};

onMounted(async () => {
  // nextTick waits for the DOM to be updated
  await nextTick();
  await fetchPhotos();
  firstPageLoaded.value = true;

  checkOnMountedHeight();
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped></style>
