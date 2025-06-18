<script setup lang="ts">
//TODO: desde aquí se van a crear los controles para las capas que existen en MainMap.vue
import { inject, Ref, ref, watch } from 'vue'
//NOTE - El tipo de la variable es larguisimo, pero pues así es ts
// SI tienes problemas con esto me dices RAFA
const mapElementsRef =
  inject<Ref<ReturnType<typeof import('../composables/useMapElements').useMapElements> | null>>(
    'mapElements',
  )
if (!mapElementsRef || !mapElementsRef.value) throw new Error('NO MAP ELEMENTS AVAILABLE')

//NOTE - Rafa! Las variables booleanas se empiezan por un verbo que se puede contestar con "si o no"
const showMarkers: Ref<boolean> = ref(true)
const showPolygons: Ref<boolean> = ref(true)

watch(showMarkers, (value) => {
  if (!mapElementsRef || !mapElementsRef.value) return
  if (value) {
    mapElementsRef.value.showParkMarkers()
  } else {
    mapElementsRef.value.hideParkMarkers()
  }
})

watch(showPolygons, (value) => {
  if (!mapElementsRef || !mapElementsRef.value) return
  if (value) {
    mapElementsRef.value.showRandomPolygons()
  } else {
    mapElementsRef.value.hideRandomPolygons()
  }
})
</script>

<template>
  <div class="layer-controls">
    <label>
      <!-- NOTE: v-model sale en el tutorial, es para bindear las propiedades de un input con una variable, en este caso es el isChecked -->
      <input type="checkbox" v-model="showMarkers" />
      Mostrar marcadores de parques
    </label>
    <label>
      <input type="checkbox" v-model="showPolygons" />
      Mostrar polígonos aleatorios
    </label>
  </div>
</template>
