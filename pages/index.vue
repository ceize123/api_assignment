<template>
  <LoadingPage :firstPageLoaded="firstPageLoaded" />
  <main>
    <!-- Hero -->
    <Hero />

    <!-- Gallery -->
    <section class="container mx-auto pt-24" id="gallery">
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
    </section>
  </main>
</template>

<script setup>
const photos = ref([]);
const page = ref(1);
const isLoading = ref(false);
const firstPageLoaded = ref(false);
const lastPhoto = {};

const fetchPhotos = async () => {
  try {
    isLoading.value = true;
    const { data } = await useFetch(`/api/nasa/${page.value}`);
    if (data) photos.value.push(...data._rawValue);
  } catch (error) {
    if (error.response) {
      const { status } = error.response;
      if (status === 403) {
        throw createError({ statusCode: 403, statusMessage: 'Forbidden' });
      } else if (status === 404) {
        throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
      } else if (status === 429) {
        throw createError({
          statusCode: 429,
          statusMessage: 'Too Many Requests',
        });
      }
    }
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    });
  } finally {
    isLoading.value = false;
  }
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

// if window is at the bottom already when onMounted, fetch more photos
const checkOnMountedHeight = () => {
  const bottom = lastPhoto.element
    ? lastPhoto.element.getBoundingClientRect().bottom
    : window.innerHeight;
  if (getBottom(bottom)) {
    page.value++;
    fetchPhotos();
  }
};

// Can't do error handling in mounted hook
await fetchPhotos();

onMounted(async () => {
  // nextTick waits for the DOM to be updated
  await nextTick();
  if (photos.value.length > 0) firstPageLoaded.value = true;

  checkOnMountedHeight();
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped></style>
