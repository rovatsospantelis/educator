<script setup>
// 8 εξωτερικά + 8 εσωτερικά πέταλα γύρω από κέντρο (rosette/λωτός).
const outer = [0, 45, 90, 135, 180, 225, 270, 315]
const inner = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5]
</script>

<template>
  <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true">
    <path
        v-for="d in outer"
        :key="'o' + d"
        d="M100 100 C 86 66 93 36 100 16 C 107 36 114 66 100 100 Z"
        :transform="`rotate(${d} 100 100)`"
    />
    <path
        v-for="d in inner"
        :key="'i' + d"
        d="M100 100 C 90 78 94 60 100 50 C 106 60 110 78 100 100 Z"
        :transform="`rotate(${d} 100 100)`"
    />
    <circle cx="100" cy="100" r="12" />
  </svg>
</template>
