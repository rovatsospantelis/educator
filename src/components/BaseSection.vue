<script setup>
import SectionMark from '@/components/SectionMark.vue'

defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, default: '' },
  soft: { type: Boolean, default: false },
  narrow: { type: Boolean, default: false },
  watermark: { type: String, default: '' }, // 'book' | 'quill' | 'column'
})
</script>

<template>
  <section
      v-reveal
      class="relative border-t border-line"
      :class="soft ? 'bg-bg-soft' : ''"
  >
    <!-- Αχνό φιλολογικό watermark (μόνο αν δοθεί name) -->
    <div v-if="watermark" class="pointer-events-none absolute inset-0 overflow-hidden">
      <SectionMark
          :name="watermark"
          class="absolute -bottom-8 -right-6 h-[210px] w-[210px] text-accent opacity-[0.07]"
      />
    </div>

    <div
        class="relative z-10 mx-auto px-6 pt-14 pb-20 md:pt-20"
        :class="narrow ? 'max-w-3xl' : 'max-w-[var(--site-col)]'"
    >
      <div v-if="eyebrow || title" class="text-center">
        <p v-if="eyebrow" class="font-display text-2xl italic text-ink-soft">
          {{ eyebrow }}
        </p>
        <h2 v-if="title" class="mt-1 text-3xl font-bold md:text-4xl">
          {{ title }}
        </h2>
      </div>
      <div :class="(eyebrow || title) ? 'mt-12' : ''">
        <slot />
      </div>
    </div>
  </section>
</template>
