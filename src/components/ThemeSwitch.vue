<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { ref, watch } from 'vue'
const mode = useColorMode()
mode.value = 'dark'
const switchState = ref(true)
watch(switchState, (isDark) => {
  mode.value = isDark ? 'dark' : 'light'
})
</script>

<template>
  <!-- <UButton
    :icon="mode === 'dark' ? 'i-lucide-moon' : 'i-lucide-sun'"
    color="neutral"
    @click="mode = mode === 'dark' ? 'light' : 'dark'"
  /> -->
  <USwitch
    unchecked-icon="i-lucide-sun"
    checked-icon="i-lucide-moon"
    v-model="switchState"
    size="xl"
    color="neutral"
    class="drop-shadow-xl"
  />
</template>
