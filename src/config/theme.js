/**
 * ============================================================
 *  THEME — Παλέτα & γραμματοσειρές
 *  Άλλαξε τα tokens εδώ· όλο το site ακολουθεί.
 *  Τα ίδια ονόματα υπάρχουν και στο main.css (@theme).
 *  Κράτα τα συγχρονισμένα — αυτό το αρχείο είναι η "πηγή αλήθειας"
 *  για documentation/reference· το πραγματικό styling γίνεται
 *  μέσω των CSS custom properties στο main.css.
 * ============================================================
 *
 *  ΟΔΗΓΟΣ ΑΛΛΑΓΗΣ ΠΑΛΕΤΑΣ:
 *  1) Άλλαξε τα LIGHT tokens στο src/assets/main.css (@theme)
 *  2) Άλλαξε τα DARK tokens στο main.css (html.dark)
 *  3) Άλλαξε τα <link> των fonts στο index.html
 *
 *  Naming convention (μην το αλλάξεις — τα components το χρησιμοποιούν):
 *    --color-bg          φόντο σελίδας
 *    --color-bg-soft     ελαφρώς διαφορετικό φόντο (sections)
 *    --color-surface     κάρτες/επιφάνειες
 *    --color-ink         κύριο κείμενο
 *    --color-ink-soft    δευτερεύον κείμενο
 *    --color-muted       borders/διακριτικά
 *    --color-line        γραμμές/διαχωριστικά
 *    --color-accent      κύριο accent
 *    --color-accent-deep accent για κουμπιά/hover
 *    --font-sans         body
 *    --font-display      τίτλοι
 */

export const themeReference = {
  light: {
    bg: '#FFFFFF',
    bgSoft: '#F7F7F5',
    surface: '#FFFFFF',
    ink: '#1A1A1A',
    inkSoft: '#666666',
    muted: '#CCCCCC',
    line: '#E5E5E5',
    accent: '#000000',
    accentDeep: '#000000',
  },
  dark: {
    bg: '#121212',
    bgSoft: '#1A1A1A',
    surface: '#1E1E1E',
    ink: '#ECECEC',
    inkSoft: '#A0A0A0',
    muted: '#444444',
    line: '#2A2A2A',
    accent: '#FFFFFF',
    accentDeep: '#FFFFFF',
  },
  fonts: {
    sans: 'Inter, system-ui, sans-serif',
    display: 'Inter, system-ui, sans-serif',
  },
}

export default themeReference
