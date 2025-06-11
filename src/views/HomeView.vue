<script setup lang="ts">
import MainMap from '../components/MainMap.vue'
</script>

<template>
  <main class="full-screen-map">
    <MainMap />
  </main>
</template>

<style scoped>
.full-screen-map {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
