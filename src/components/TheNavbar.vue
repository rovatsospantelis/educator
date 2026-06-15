<script setup>
import ThemeToggle from '@/components/ThemeToggle.vue'
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
  <!-- Header sticky στην κορυφή -->
  <header
      class="sticky top-0 z-50 h-[84px] box-content border-b border-line backdrop-blur pt-[env(safe-area-inset-top)]"
      style="background: var(--color-bg)"
  >
    <div class="relative mx-auto flex h-full max-w-[var(--site-col)] items-center justify-between px-6">
      <!-- Αχνό watermark στο header -->
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <img
            src="/flower-watermark-transparent.png"
            alt=""
            aria-hidden="true"
            class="absolute top-1/2 left-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.13] dark:opacity-[0.08]"
        />
      </div>

      <!-- Brand -->
      <RouterLink :to="{ hash: '#top' }" class="relative z-10 block pb-2 leading-none">
  <span class="block font-brand text-[32px] font-semibold">
    {{ site.name }}
  </span>
        <span class="mt-1 block text-[11px] uppercase tracking-[0.22em] text-ink-soft">
    Φιλόλογος
  </span>
      </RouterLink>

      <!-- Desktop nav + theme toggle -->
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

  <!-- Mobile navbar sticky κάτω από το header -->
  <nav
      class="sticky top-[calc(84px_+_env(safe-area-inset-top))] z-40 border-b border-line backdrop-blur md:hidden"
      style="background: color-mix(in srgb, var(--color-surface) 95%, transparent)"
  >
    <ul class="flex min-h-[52px] items-center justify-around px-2">
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
