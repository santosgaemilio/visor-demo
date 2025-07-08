<script setup lang="ts">
import SidebarContent from './SidebarContent.vue'
import { ref } from 'vue'
const isMenuVisible = ref(false)
</script>

<template>
  <USlideover
    title="Herramientas del mapa!"
    close-icon="i-lucide-arrow-left"
    :overlay="false"
    side="left"
    v-model:open="isMenuVisible"
  >
    <template v-if="!isMenuVisible">
      <UButton icon="i-lucide-menu" size="xl" color="neutral" variant="solid" />
    </template>
    <template #body>
      <SidebarContent />
    </template>
  </USlideover>
</template>
