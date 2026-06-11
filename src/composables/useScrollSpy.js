import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollSpy(ids, { rootMargin = '-45% 0px -50% 0px', onEnter } = {}) {
  const active = ref(ids[0] ?? '')
  const seen = new Set()
  let io = null
  let raf = null

  function attach(tries = 0) {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)

    // Τα sections μπορεί να μην έχουν render-αριστεί ακόμα (το RouterView λύνει
    // το route ασύγχρονα). Ξαναδοκίμασε στο επόμενο frame, μέχρι ~1s.
    if (els.length === 0) {
      if (tries < 60) raf = requestAnimationFrame(() => attach(tries + 1))
      return
    }

    io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue
            active.value = entry.target.id
            if (onEnter && !seen.has(entry.target.id)) {
              seen.add(entry.target.id)
              onEnter(entry.target.id)
            }
          }
        },
        { rootMargin, threshold: 0 }
    )

    els.forEach((el) => io.observe(el))
  }

  onMounted(() => attach())

  onUnmounted(() => {
    if (raf) cancelAnimationFrame(raf)
    io?.disconnect()
  })

  return { active }
}