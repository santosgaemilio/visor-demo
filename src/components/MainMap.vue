<script setup lang="ts">
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { ref, onMounted } from 'vue'
import { useMapElements } from '../composables/useMapElements.ts'
const mapDiv = ref('map')
let mapElements: ReturnType<typeof useMapElements>
// Todo lo que tenga que ver con el mapa se tiene que hacer dentro del onMounted()
onMounted(() => {
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
})
</script>

<template>
  <div :id="mapDiv"></div>
</template>

<style scoped>
#map {
  height: 100%;
  width: 100%;
  min-height: 400px;
}
</style>
