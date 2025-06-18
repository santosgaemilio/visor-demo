<script setup lang="ts">
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { ref, onMounted } from 'vue'
import { useMapElements } from '../composables/useMapElements'

const emit = defineEmits(['loaded'])
const mapDiv = ref('map')
let mapElements: ReturnType<typeof useMapElements>
// Todo lo que tenga que ver con el mapa se tiene que hacer dentro del onMounted()
onMounted(() => {
  console.log('We are inside the map element')
  //25.70630097838529, -100.30974546183137 Centro de zona metropolitana
  const map: L.Map = L.map('map', { zoomControl: false }).setView([25.6768, -100.214706], 13)
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map)

  mapElements = useMapElements(map)

  // Los elementos siempre se van a mostrar al inicio, si se quieren quitar es en SidebarContent.vue
  mapElements.showParkMarkers()
  mapElements.showRandomPolygons()
  //NOTE - emit va a entregar la variable mapElements para todos los hijos de HomeView.vue
  emit('loaded', mapElements)
})
</script>

<template>
  <div :id="mapDiv" class="min-h-[400px]"></div>
</template>

<style scoped>
/* NOTE No quiso agarrar el h-full ni el w-full de tailwindcss */
#map {
  height: 100%;
  width: 100%;
}
</style>
