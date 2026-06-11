import { ref, onMounted, onUnmounted } from 'vue'

/**
 * useScrollSpy — βρίσκει ποιο section είναι «τώρα» στην οθόνη.
 *
 * Χρήση (συνήθως στο App.vue, ώστε το active να φτάσει στο navbar):
 *   const { active } = useScrollSpy(['top', 'about', 'subjects', 'contact'], {
 *     onEnter: (id) => trackSection(id),   // section_view analytics
 *   })
 *
 * - `active`  → ref με το id του ορατού section (για highlight στο nav).
 * - `onEnter` → καλείται ΜΙΑ φορά ανά section, την πρώτη φορά που γίνεται ενεργό.
 *
 * Το rootMargin '-45% 0px -50% 0px' φτιάχνει μια λεπτή «ζώνη ενεργοποίησης»
 * γύρω από το κέντρο του viewport — αλλιώς δύο sections ανάβουν ταυτόχρονα.
 */
export function useScrollSpy(ids, { rootMargin = '-45% 0px -50% 0px', onEnter } = {}) {
  const active = ref(ids[0] ?? '')
  const seen = new Set()
  let io = null

  onMounted(() => {
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const id = entry.target.id
          active.value = id
          if (onEnter && !seen.has(id)) {
            seen.add(id)
            onEnter(id)
          }
        })
      },
      { rootMargin, threshold: 0 }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
  })

  onUnmounted(() => io?.disconnect())

  return { active }
}
