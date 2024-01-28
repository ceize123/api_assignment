<template>
  <BaseModal :modalActive="modalActive" @close-modal="$emit('close-modal')">
    <div class="max-w-4/5 max-h-[88vh] overflow-y-auto font-Lexend">
      <div>
        <NuxtImg
          class="max-h-[65vh]"
          sizes="sm:600px md:80vw"
          :src="photo.img_src"
          placeholder="/img/space.png"
          alt="mars photo"
        />
      </div>

      <!-- Details -->
      <div class="mt-5">
        <NuxtImg src="/img/arrows.png" alt="arrows" class="w-20" />
        <div class="mt-5 px-2 [&>div]:photo-info [&_h2]:mr-3 [&_p]:md:text-xl">
          <div>
            <h2>Camera:</h2>
            <p>{{ photo.camera.full_name }}</p>
          </div>
          <div>
            <h2>Earth date:</h2>
            <p>{{ photo.earth_date }}</p>
          </div>
          <div>
            <h2>Rover:</h2>
            <p>{{ photo.rover.name }}</p>
          </div>
          <div>
            <h2>Launch date:</h2>
            <p>{{ photo.rover.launch_date }}</p>
          </div>
          <div>
            <h2>Landing Date:</h2>
            <p>{{ photo.rover.landing_date }}</p>
          </div>
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<script setup>
defineProps(['photo', 'modalActive']);
defineEmits(['close-modal']);
</script>

<style scoped></style>
