<script setup>
import { RouterLink } from 'vue-router'
import { Check, Quote, Phone, Smartphone, Mail, MapPin } from 'lucide-vue-next'
import BaseSection from '@/components/BaseSection.vue'
import ContactForm from '@/components/ContactForm.vue'
import { site } from '@/config/site'
import { usePageSeo } from '@/composables/useSeo'
import { trackCTA } from '@/utils/track'

usePageSeo({
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
})

const c = site.content
const info = site.contact
</script>

<template>
  <div>
    <!-- ============ HERO ============ -->
    <section id="top" class="border-b border-line">
      <div class="mx-auto grid max-w-[var(--site-col)] items-center gap-12 px-6 pt-12 pb-16 md:grid-cols-2 md:py-28">
        <div class="text-center md:text-left">
          <p class="font-display text-2xl italic text-ink-soft">{{ site.tagline }}</p>
          <h1 class="mt-2 text-4xl font-bold md:text-5xl">
            {{ c.hero.headline }}
            <span class="font-display italic text-accent">{{ c.hero.headlineAccent }}</span>
          </h1>
          <p class="mt-5 leading-relaxed text-ink-soft md:max-w-md">{{ c.hero.lead }}</p>
          <div class="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <RouterLink
                :to="{ hash: '#contact' }"
                class="group inline-flex items-center gap-5 border-b border-ink pb-2 text-ink text-lg font-semibold tracking-tight transition-all duration-300 hover:gap-7"
                @click="trackCTA('hero')"
            >
              <span class="transition-transform duration-300 group-hover:translate-x-1">
                Κλείσε δωρεάν γνωριμία →
              </span>
            </RouterLink>
            <RouterLink
                :to="{ hash: '#subjects' }"
                class="group inline-flex items-center gap-5 border-b border-ink pb-2 text-ink text-lg font-semibold tracking-tight transition-all duration-300 hover:gap-7"
            >
              <span class="transition-transform duration-300 group-hover:translate-x-1">
                Δες τα μαθήματα →
              </span>
            </RouterLink>
          </div>
        </div>
        <div class="mx-auto w-full max-w-md md:mx-0">
          <div class="aspect-square w-full rounded-2xl bg-bg-soft"></div>
        </div>
      </div>
    </section>

    <!-- ============ Η ΚΑΘΗΓΗΤΡΙΑ (centered) ============ -->
    <div id="about" class="scroll-mt-24 md:scroll-mt-28">
      <!-- Η καθηγήτρια -->
      <BaseSection eyebrow="Η καθηγήτρια" title="Λίγα λόγια για μένα" soft watermark="quill">
      <div class="mx-auto max-w-2xl text-center">
          <div v-reveal class="mx-auto w-full max-w-[240px]">
            <div class="aspect-[3/4] w-full rounded-2xl bg-bg-soft"></div>
            <p class="mt-3 text-sm text-ink-soft">{{ c.about.role }}</p>
          </div>
          <div v-reveal="{ delay: 120 }" class="mt-8 space-y-5 leading-relaxed text-ink-soft">
            <p v-for="(p, i) in c.about.paragraphs" :key="i">{{ p }}</p>
          </div>
          <dl class="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-8">
            <div v-for="h in c.about.highlights" :key="h.label">
              <dt class="font-display text-3xl font-bold text-accent-deep md:text-4xl">{{ h.value }}</dt>
              <dd class="mt-1 text-sm text-ink-soft">{{ h.label }}</dd>
            </div>
          </dl>
        </div>
      </BaseSection>
    </div>

    <!-- ============ ΜΑΘΗΜΑΤΑ (centered cards) ============ -->
    <div id="subjects" class="scroll-mt-24 md:scroll-mt-28">
      <BaseSection eyebrow="Μαθήματα" title="Τι διδάσκω">
        <div class="grid gap-6 md:grid-cols-4">
          <div
              v-for="(s, i) in c.subjects"
              :key="s.level"
              v-reveal="i"
              class="flex flex-col items-center rounded-2xl border border-line p-7 text-center"
          >
            <h3 class="text-2xl">{{ s.level }}</h3>
            <p class="mt-1 text-sm italic text-ink-soft">{{ s.note }}</p>
            <ul class="mt-5 space-y-2.5">
              <li v-for="item in s.items" :key="item" class="flex items-center justify-center gap-2.5 text-ink-soft">
                <Check :size="18" :stroke-width="2" class="shrink-0 text-accent-deep" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </BaseSection>
    </div>

    <!-- ============ ΜΕΘΟΔΟΣ (centered) ============ -->
    <BaseSection eyebrow="Η μέθοδος" title="Πώς δουλεύουμε" soft watermark="book">
      <ol class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <li v-for="(step, i) in c.method" :key="step.title" v-reveal="i" class="flex flex-col items-center gap-3 text-center">
          <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 font-display text-lg font-bold text-accent-deep">
            {{ i + 1 }}
          </span>
          <h3 class="text-xl">{{ step.title }}</h3>
          <p class="leading-relaxed text-ink-soft">{{ step.desc }}</p>
        </li>
      </ol>
    </BaseSection>

    <!-- ============ TESTIMONIALS (centered) ============ -->
    <BaseSection eyebrow="Λόγια γονέων & μαθητών" title="Τι λένε όσοι δούλεψαν μαζί μου">
      <div class="grid gap-6 md:grid-cols-3">
        <figure
            v-for="(t, i) in c.testimonials"
            :key="t.name"
            v-reveal="i"
            class="flex flex-col items-center rounded-2xl border border-line p-7 text-center"
        >
          <Quote :size="28" :stroke-width="1.6" class="text-accent-deep opacity-40" />
          <blockquote class="mt-3 grow leading-relaxed">{{ t.quote }}</blockquote>
          <figcaption class="mt-5 w-full border-t border-line pt-4">
            <p class="font-medium">{{ t.name }}</p>
            <p class="text-sm text-ink-soft">{{ t.role }}</p>
          </figcaption>
        </figure>
      </div>
    </BaseSection>

    <!-- ============ ΕΠΙΚΟΙΝΩΝΙΑ ============ -->
    <div id="contact" class="scroll-mt-24 md:scroll-mt-28">
      <BaseSection eyebrow="Επικοινωνία" title="Ας ξεκινήσουμε" soft watermark="column">
        <div class="grid gap-10 lg:grid-cols-2">
          <div v-reveal class="text-center">
            <p class="mx-auto max-w-md leading-relaxed text-ink-soft">
              Στείλε μήνυμα για μια δωρεάν συνάντηση γνωριμίας — θα συζητήσουμε επίπεδο,
              στόχους και πρόγραμμα, χωρίς καμία δέσμευση.
            </p>
            <ul class="mt-8 space-y-6">
              <li v-if="info.address.area" class="flex flex-col items-center gap-1">
                <MapPin :size="22" :stroke-width="1.6" class="text-accent-deep" />
                <p class="font-medium">Περιοχή</p>
                <p class="text-ink-soft">
                  {{ info.address.street ? info.address.street + ', ' : '' }}{{ info.address.area }}
                </p>
              </li>
              <li v-if="info.phone" class="flex flex-col items-center gap-1">
                <Phone :size="22" :stroke-width="1.6" class="text-accent-deep" />
                <p class="font-medium">Τηλέφωνο</p>
                <a :href="'tel:' + info.phoneRaw" class="text-ink-soft hover:text-ink">{{ info.phone }}</a>
              </li>
              <li v-if="info.mobile" class="flex flex-col items-center gap-1">
                <Smartphone :size="22" :stroke-width="1.6" class="text-accent-deep" />
                <p class="font-medium">Κινητό</p>
                <a :href="'tel:' + info.mobileRaw" class="text-ink-soft hover:text-ink">{{ info.mobile }}</a>
              </li>
              <li v-if="info.email" class="flex flex-col items-center gap-1">
                <Mail :size="22" :stroke-width="1.6" class="text-accent-deep" />
                <p class="font-medium">Email</p>
                <a :href="'mailto:' + info.email" class="text-ink-soft hover:text-ink">{{ info.email }}</a>
              </li>
            </ul>
          </div>

          <div v-if="site.features.contactForm" v-reveal="{ delay: 120 }">
            <ContactForm :endpoint="site.formEndpoint" />
          </div>
        </div>
      </BaseSection>
    </div>
  </div>
</template>