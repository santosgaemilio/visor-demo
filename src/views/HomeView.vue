<script setup lang="ts">
import MainMap from '../components/MainMap.vue'
import MapSidebar from '../components/MapSidebar.vue'
</script>

<template>
  <main class="full-screen-map">
    <MapSidebar />
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
