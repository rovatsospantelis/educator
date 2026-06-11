<script setup>
import { Home, User, BookOpen, Mail } from 'lucide-vue-next'
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'
import WhatsAppButton from '@/components/WhatsAppButton.vue'
import { site } from '@/config/site'
import { useStructuredData } from '@/composables/useSeo'
import { useScrollSpy } from '@/composables/useScrollSpy'
import { trackSection } from '@/utils/track'

// JSON-LD μία φορά για όλο το site
useStructuredData()

/**
 * One-pager nav: κάθε link δείχνει σε <section id> της αρχικής.
 * Το `id` πρέπει να ταιριάζει με το id του section στο HomeView.
 * Κράτα 4 για το mobile tab bar.
 */
const navLinks = [
  { id: 'top', label: 'Αρχική', icon: Home },
  { id: 'about', label: 'Η καθηγήτρια', icon: User },
  { id: 'subjects', label: 'Μαθήματα', icon: BookOpen },
  { id: 'contact', label: 'Επικοινωνία', icon: Mail },
]

// Ποιο section είναι ορατό (για το active state στο nav) + section_view tracking.
const { active } = useScrollSpy(
  navLinks.map((l) => l.id),
  { onEnter: (id) => trackSection(id) }
)
</script>

<template>
  <TheNavbar :links="navLinks" :active="active" />

  <main>
    <RouterView />
  </main>

  <TheFooter />

  <WhatsAppButton v-if="site.features.whatsappButton" />

  <!-- Landscape notice (mobile) -->
  <div class="rotate-notice fixed inset-0 z-[100] hidden flex-col items-center justify-center gap-4 bg-bg px-8 text-center">
    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" class="text-accent-deep">
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 19h2" stroke-linecap="round" />
    </svg>
    <p class="font-display text-2xl italic">Γύρισε τη συσκευή σου</p>
    <p class="max-w-xs text-ink-soft">Καλύτερη εμπειρία σε κατακόρυφη προβολή 📱</p>
  </div>
</template>

<style>
@media (max-width: 1023px) and (orientation: landscape) {
  .rotate-notice { display: flex; }
}
</style>
