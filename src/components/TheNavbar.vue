<script setup>
import ThemeToggle from '@/components/ThemeToggle.vue'
import { site } from '@/config/site'

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
    <div class="mx-auto flex max-w-[var(--site-col)] items-center justify-between px-6 py-4">
      <RouterLink :to="{ hash: '#top' }" class="leading-none">
        <span class="block font-brand text-[32px] font-semibold">{{ site.name }}</span>
        <span class="mt-1 block text-[11px] uppercase tracking-[0.22em] text-ink-soft">Φιλόλογος</span>
      </RouterLink>

      <div class="flex items-center gap-6">
        <nav class="hidden items-center gap-7 md:flex">
          <RouterLink
              v-for="l in props.links"
              :key="l.id"
              :to="{ hash: '#' + l.id }"
              :class="[
              'font-brand text-lg transition-colors hover:text-accent-deep',
              props.active === l.id ? 'italic text-accent-deep' : 'text-ink',
            ]"
          >
            {{ l.label }}
          </RouterLink>
        </nav>

        <ThemeToggle v-if="site.features.darkMode" />
      </div>
    </div>
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