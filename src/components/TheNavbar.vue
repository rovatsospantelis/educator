<script setup>
import ThemeToggle from '@/components/ThemeToggle.vue'
import { site } from '@/config/site'
import { trackCTA } from '@/utils/track'

/**
 * Links ως prop — κάθε project ορίζει τα δικά του.
 * Σχήμα link: { id, label, icon }  (το id = id του <section> στην αρχική)
 * Το `active` (από scrollspy στο App.vue) λέει ποιο link να φωτιστεί.
 */
const props = defineProps({
  links: { type: Array, default: () => [] },
  active: { type: String, default: '' },
})
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-line backdrop-blur"
    style="background: color-mix(in srgb, var(--color-bg) 90%, transparent)"
  >
    <div class="relative mx-auto flex max-w-6xl items-center justify-center px-6 py-4">
      <!-- Theme toggle -->
      <ThemeToggle
        v-if="site.features.darkMode"
        class="absolute left-4 top-3 md:left-6 md:top-1/2 md:-translate-y-1/2"
      />

      <!-- Brand → κορυφή -->
      <RouterLink :to="{ hash: '#top' }" class="font-display text-2xl font-bold tracking-wide">
        {{ site.name }}
      </RouterLink>

      <!-- Desktop CTA (booking) -->
      <a
        v-if="site.features.booking && site.cta.url"
        :href="site.cta.url"
        target="_blank"
        rel="noopener"
        @click="trackCTA('navbar')"
        class="btn btn-primary absolute right-6 hidden md:inline-flex"
      >
        {{ site.cta.label }}
      </a>
    </div>

    <!-- Desktop links -->
    <nav class="hidden border-t border-line md:block">
      <ul class="mx-auto flex max-w-6xl items-center justify-center gap-10 px-6 py-3">
        <li v-for="l in props.links" :key="l.id">
          <RouterLink
            :to="{ hash: '#' + l.id }"
            :class="[
              'text-[15px] font-medium transition-colors hover:text-accent-deep',
              props.active === l.id ? 'text-accent-deep' : 'text-ink',
            ]"
          >
            {{ l.label }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <!-- Mobile bottom tab bar -->
  <nav
    class="fixed inset-x-0 bottom-0 z-50 border-t border-line backdrop-blur md:hidden"
    style="background: color-mix(in srgb, var(--color-surface) 95%, transparent)"
  >
    <ul
      class="flex items-stretch justify-around px-1 pt-1.5"
      style="padding-bottom: calc(0.4rem + env(safe-area-inset-bottom))"
    >
      <li v-for="l in props.links" :key="l.id" class="flex-1">
        <RouterLink
          :to="{ hash: '#' + l.id }"
          :class="[
            'flex flex-col items-center gap-0.5 rounded-xl px-2 py-1.5 transition-colors',
            props.active === l.id ? 'text-accent-deep bg-accent/10' : 'text-ink-soft',
          ]"
        >
          <component :is="l.icon" :size="22" :stroke-width="1.7" />
          <span class="text-[10px] font-medium">{{ l.label }}</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
