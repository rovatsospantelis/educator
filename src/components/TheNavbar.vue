<script setup>
import ThemeToggle from '@/components/ThemeToggle.vue'
import FlowerMark from '@/components/FlowerMark.vue'
import { site } from '@/config/site'

/**
 * Links ως prop — κάθε project ορίζει τα δικά του.
 * Σχήμα link: { id, label, icon }  (το id = id του <section> στην αρχική)
 * Το `active` (από scrollspy στο App.vue) λέει ποιο link να φωτιστεί.
 */
const props = defineProps({
  links: { type: Array, default: () => [] },
  active: { type: String, default: '' },
})

const navLinks = [
  { id: 'top', label: 'Αρχική', short: 'Αρχική' },
  { id: 'about', label: 'Η καθηγήτρια', short: 'Καθηγήτρια' },
  { id: 'subjects', label: 'Μαθήματα', short: 'Μαθήματα' },
  { id: 'contact', label: 'Επικοινωνία', short: 'Επαφή' },
]
</script>

<template>
  <header
      class="sticky top-0 z-50 border-b border-line backdrop-blur"
      style="background: color-mix(in srgb, var(--color-bg) 90%, transparent)"
  >
    <div class="relative mx-auto flex max-w-[var(--site-col)] items-center justify-between px-6 py-4">
      <!-- Αχνό watermark (clip στα όρια του header) -->
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <FlowerMark
            class="absolute top-1/2 left-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 text-accent opacity-[0.05]"
        />
      </div>

      <!-- Brand → κορυφή -->
      <RouterLink :to="{ hash: '#top' }" class="relative z-10 leading-none">
        <span class="block font-brand text-[32px] font-semibold">{{ site.name }}</span>
        <span class="mt-1 block text-[11px] uppercase tracking-[0.22em] text-ink-soft">Φιλόλογος</span>
      </RouterLink>

      <!-- Δεξιά: serif links + toggle στην άκρη -->
      <div class="relative z-10 flex items-center gap-6">
        <nav class="hidden items-center gap-7 md:flex">
          <RouterLink
              v-for="l in props.links"
              :key="l.id"
              :to="{ hash: '#' + l.id }"
              :class="[
      'nav-link font-brand text-lg transition-colors hover:text-accent-deep',
      props.active === l.id ? 'is-active text-accent-deep' : 'text-ink',
    ]"
          >
            {{ l.label }}
          </RouterLink>
        </nav>

        <ThemeToggle v-if="site.features.darkMode" />
      </div>
    </div>
  </header>

  <!-- Mobile bottom tab bar — serif text + underline (variant C) -->
  <nav
      class="fixed inset-x-0 z-50 min-h-[72px] border-t border-line backdrop-blur md:hidden"
      style="background: color-mix(in srgb, var(--color-surface) 95%, transparent)"
  >
    <ul
        class="flex min-h-[72px] items-center justify-around px-2 pt-3"
        style="padding-bottom: calc(0.9rem + env(safe-area-inset-bottom))"
    >
      <li v-for="l in props.links" :key="l.id">
        <RouterLink
            :to="{ hash: '#' + l.id }"
            :class="[
          'nav-link font-brand text-[15px] transition-colors',
          props.active === l.id ? 'is-active text-accent-deep' : 'text-ink-soft',
        ]"
        >
          {{ l.short || l.label }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
