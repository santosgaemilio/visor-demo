<script setup lang="ts">
import { ref } from 'vue'
import SidebarContent from './SidebarContent.vue'
const sidebarContent = ref<HTMLElement | null>(null)
const isVisible = ref(false)
console.log('We are on the sidebar')
const ShowSidebar = (e: MouseEvent) => {
  //NOTE: Solamente para checar que el cambio se realiza correctamente
  // console.log(sidebarContent.value.classList)
  e.stopPropagation()
  isVisible.value = !isVisible.value
}
</script>
<template>
  <!-- FIXME: Quitar el sidebar-container y poner todo el estilo en el parent-->
  <div v-bind="$attrs" class="sidebar-container bg-transparent h-screen w-1/4">
    <!--NOTE: Se va a poner el estilo en clásico CSS para el botón, lo
demás debe ser tailwindcss -->

    <button class="sidebar-toggle-btn" aria-label="Toggle map controls" @click="ShowSidebar">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M3 12h18M3 6h18M3 18h18" v-if="!isVisible" />
        <path d="M18 6L6 18M6 6l12 12" v-else />
      </svg>
    </button>
    <div
      ref="sidebarContent"
      class="bg-white w-fit h-screen border shadow-md absolute flex items-center justify-start"
      v-show="isVisible"
    >
      <!-- TODO: Aqui va a ir el componente de SidebarContent.vue, test está de placeholder-->
      <SidebarContent />
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
