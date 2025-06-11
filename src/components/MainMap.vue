<script setup lang="ts">
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { ref, onMounted } from 'vue'

const mapDiv = ref('map')
onMounted(() => {
  //25.70630097838529, -100.30974546183137 Centro de zona metropolitana
  const map = L.map('map', { zoomControl: false }).setView([25.706, -100.309], 12)
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map)
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
