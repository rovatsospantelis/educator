<script setup>
import { computed } from 'vue'

/**
 * SectionMark — αχνά φιλολογικά watermarks για soft sections.
 * name: 'book' | 'quill' | 'column'. Χρώμα = currentColor (το ορίζει ο γονιός).
 *
 * ΕΝΑ root <svg> ώστε το class (size/opacity/color) να περνάει πάντα σωστά.
 */
const props = defineProps({
  name: { type: String, default: 'book' },
})

const viewBox = computed(() =>
    props.name === 'column' ? '0 0 130 200' : '0 0 200 200'
)
</script>

<template>
  <svg
      :viewBox="viewBox"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
  >
    <!-- Ανοιχτό βιβλίο -->
    <template v-if="name === 'book'">
      <path d="M100 70 C 74 58 44 58 24 66 L 24 134 C 44 126 74 126 100 138 Z" />
      <path d="M100 70 C 126 58 156 58 176 66 L 176 134 C 156 126 126 126 100 138 Z" />
      <path d="M100 70 L 100 138" />
      <path d="M38 86 L 86 82" /><path d="M38 100 L 86 96" /><path d="M38 114 L 86 110" />
      <path d="M114 82 L 162 86" /><path d="M114 96 L 162 100" /><path d="M114 110 L 162 114" />
    </template>

    <!-- Πένα (φτερό) -->
    <template v-else-if="name === 'quill'">
      <path d="M44 158 L 158 44" />
      <path d="M158 44 C 112 54 86 80 74 122 C 106 110 140 86 158 44 Z" />
      <path d="M142 60 L 120 54" /><path d="M124 78 L 102 72" /><path d="M106 96 L 86 90" />
      <path d="M44 158 L 56 150" />
    </template>

    <!-- Αρχαίος κίονας -->
    <template v-else-if="name === 'column'">
      <path d="M30 46 H 100" />
      <path d="M34 46 C 26 56 40 62 44 52" />
      <path d="M96 46 C 104 56 90 62 86 52" />
      <path d="M38 62 H 92" />
      <path d="M38 62 V 154" /><path d="M44 62 V 154" /><path d="M56 62 V 154" />
      <path d="M68 62 V 154" /><path d="M80 62 V 154" /><path d="M86 62 V 154" />
      <path d="M34 154 H 96" />
      <path d="M28 168 H 102" />
    </template>
  </svg>
</template>
