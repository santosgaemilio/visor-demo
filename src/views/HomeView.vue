<script setup lang="ts">
import MainMap from '../components/MainMap.vue'
import MapSidebar from '../components/MapSidebar.vue'
</script>

<template>
  <!--NOTE: Se va a utilizar el position: relative; para poder manejar el z desde aquí -->
  <!--NOTE: Rafa! todo va arriba del mapa osea z > 0 -->
  <main class="full-screen-map relative">
    <!--NOTE: Como el sidebar debe estar en la izquierda, lo flotamos a la esquina superior
izquierda-->
    <MapSidebar class="z-40 absolute top-0 left-0" />
    <MainMap class="z-0" />
  </main>
</template>

<style scoped>
.full-screen-map {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
}
</style>
