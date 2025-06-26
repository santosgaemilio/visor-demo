<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import SidebarContent from './SidebarContent.vue'
interface Props {
  clickedOutisde: boolean
}
//NOTE - El prop indica lo que el componente 'hijo' recibe
const { clickedOutisde = false } = defineProps<Props>()
//NOTE - El emit indica lo que el 'hijo' emite al 'padre'
const emit = defineEmits(['clickedInside'])
/*
  Básicamente HomeView.vue me dice cuando se le hace click al mapa y lo guardo en clickedOutside,
  cuando 'cacho' que cambia con watchEffect() cambio la visibilidad del sidebar a false | Si ya está
  false no pasa nada |. Cuando hago click en el botón para mostrar el sidebar 'emito' a HomeView.vue
  que se clickeó (Creo que el valor del evento da igual) y allá cambio el valor del clickedOuside a
  false para que watchEffect note el cambio
*/
const sidebarContent = ref<HTMLElement | null>(null)
const isVisible = ref(false)
const ShowSidebar = (e: MouseEvent) => {
  e.stopPropagation()
  isVisible.value = !isVisible.value
  emit('clickedInside', true)
}
watchEffect(() => {
  isVisible.value = clickedOutisde ? false : isVisible.value
})
</script>
<template>
  <!-- FIXME: Quitar el sidebar-container y poner todo el estilo en el parent-->
  <div v-bind="$attrs" class="sidebar-container bg-transparent h-screen w-1/4 min-w-[400px]">
    <!--NOTE: Se va a poner el estilo en clásico CSS para el botón, lo demás debe ser tailwindcss -->
    <button
      class="sidebar-toggle-btn"
      aria-label="Toggle map controls"
      @click="ShowSidebar"
      v-show="!isVisible"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M3 12h18M3 6h18M3 18h18" />
        <!-- <path d="M18 6L6 18M6 6l12 12" /> -->
      </svg>
    </button>
    <div
      ref="sidebarContent"
      class="bg-white w-fit h-screen border shadow-md absolute flex items-center justify-start min-w-[400px]"
      v-show="isVisible"
    >
      <!-- TODO: Aqui va a ir el componente de SidebarContent.vue, test está de placeholder-->
      <SidebarContent class="m-6" />
    </div>
  </div>
</template>

<style scoped>
.sidebar-toggle-btn {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 44px;
  height: 44px;
  background: white;
  border: 2px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
  z-index: 1001;
}
</style>
