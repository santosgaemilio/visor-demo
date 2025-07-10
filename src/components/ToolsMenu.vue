<script setup lang="ts">
import { computed } from 'vue'
import ThemeSwitch from './ThemeSwitch.vue'
import { useColorMode } from '@vueuse/core'
const currentTheme = computed<string>(() => useColorMode().value)
// import { ref } from 'vue'
// import type { DropdownMenuItem } from '@nuxt/ui'

// const items = ref<DropdownMenuItem[]>([
//   {
//     label: 'Profile',
//     icon: 'i-lucide-user',
//   },
//   {
//     label: 'Billing',
//     icon: 'i-lucide-credit-card',
//   },
//   {
//     label: 'Settings',
//     icon: 'i-lucide-cog',
//   },
// ])
const items = [
  { type: 'theme', key: 'special-button' },
  { label: 'Regular item', onSelect: () => console.log('Regular') },
]
</script>

<template>
  <UDropdownMenu
    :items="items"
    :content="{
      align: 'start',
      side: 'bottom',
      sideOffset: 8,
    }"
    :ui="{
      content: 'w-48',
    }"
  >
    <UButton icon="i-lucide-wrench" color="neutral" variant="outline" />
    <template #item="{ item }">
      <div v-if="item.type === 'theme'">
        <ThemeSwitch :theme="currentTheme" />
        <!-- <UButton color="green" block @click="handleClick"> Special Action </UButton> -->
      </div>
    </template>
  </UDropdownMenu>
</template>
