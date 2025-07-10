<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { computed, ref, watch } from 'vue'
const props = defineProps<{
  theme: string
}>()
const mode = useColorMode()
mode.value = computed<'dark' | 'light' | 'auto'>(() => (props.theme == 'dark' ? 'dark' : 'light'))
const switchState = ref(true)
watch(switchState, (isDark) => {
  mode.value = isDark ? 'dark' : 'light'
  console.log(mode.value)
  console.log('Theme switcher clicked')
})
</script>

<template>
  <USwitch
    unchecked-icon="i-lucide-sun"
    checked-icon="i-lucide-moon"
    v-model="switchState"
    size="xl"
    color="neutral"
    class="drop-shadow-xl"
  />
</template>
