<script setup lang="ts">
const isOpen = false
const PrintSomething = () => console.log('Hey it was clicked')
</script>
<template>
  <div class="sidebar-container">
    <button class="sidebar-toggle-btn" aria-label="Toggle map controls" @click="PrintSomething">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M3 12h18M3 6h18M3 18h18" v-if="!isOpen" />
        <path d="M18 6L6 18M6 6l12 12" v-else />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.sidebar-container {
  max-width: 20vw;
}
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
