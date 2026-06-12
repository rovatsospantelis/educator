import { ref } from 'vue'

/**
 * useTheme — διαχείριση dark/light.
 * Το αρχικό theme ορίζεται από το no-flash script στο index.html
 * (διαβάζει localStorage ή prefers-color-scheme).
 */
const isDark = ref(
    typeof document !== 'undefined' &&
    document.documentElement.classList.contains('dark')
)

// Κρατάμε τη μπάρα του status bar (theme-color) συγχρονισμένη με το --color-bg
function applyThemeColor(dark) {
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', dark ? '#1b2119' : '#ffffff')
}

// Sync κατά το αρχικό load (αν ξεκινάμε ήδη σε dark)
if (typeof document !== 'undefined') {
  applyThemeColor(isDark.value)
}

export function useTheme() {
  function toggle() {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark', isDark.value)
    applyThemeColor(isDark.value)
    try {
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    } catch (e) {
      /* ignore */
    }
  }

  return { isDark, toggle }
}
