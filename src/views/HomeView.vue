<script setup lang="ts">
import MainMap from '../components/MainMap.vue'
import MapSidebar from '../components/MapSidebar.vue'
import { ref, Ref, provide } from 'vue'
const isMapLoaded: Ref<boolean> = ref(false)
const mapElementsRef: Ref<ReturnType<
  typeof import('../composables/useMapElements').useMapElements
> | null> = ref(null)
provide('mapElements', mapElementsRef)
const catchMapLoaded = (
  mapElements: ReturnType<typeof import('../composables/useMapElements').useMapElements>,
) => {
  console.log('We catch this one! ' + mapElements.markOfPassage)
  mapElementsRef.value = mapElements
  isMapLoaded.value = true
}
</script>

<template>
  <!--NOTE: Se va a utilizar el position: relative; para poder manejar el z desde aquí -->
  <!--NOTE: Rafa! todo va arriba del mapa osea z > 0 -->
  <main class="full-screen-map relative">
    <!--NOTE: Como el sidebar debe estar en la izquierda, lo flotamos a la esquina superior
izquierda-->
    <MainMap class="z-0" @loaded="catchMapLoaded" />
    <MapSidebar class="z-40 absolute top-0 left-0" v-if="isMapLoaded" />
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
