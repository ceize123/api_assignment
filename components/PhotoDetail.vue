<template>
  <BaseModal :modalActive="modalActive" @close-modal="$emit('close-modal')">
    <div class="max-w-4/5 max-h-[90vh] overflow-y-auto">
      <div>
        <NuxtImg
          class="max-h-[65vh]"
          sizes="sm:600px md:80vw"
          :src="photo.img_src"
          alt="mars photo"
        />
      </div>
      <div class="mt-5 [&>div]:photo-info">
        <div>
          <h3>Camera:</h3>
          <p>{{ photo.camera.full_name }}</p>
        </div>
        <div>
          <h3>Earth date:</h3>
          <p>{{ photo.earth_date }}</p>
        </div>
        <div>
          <h3>Rover:</h3>
          <p>{{ photo.rover.name }}</p>
        </div>
        <div>
          <h3>Launch date:</h3>
          <p>{{ photo.rover.launch_date }}</p>
        </div>
        <div>
          <h3>Landing Date:</h3>
          <p>{{ photo.rover.landing_date }}</p>
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
