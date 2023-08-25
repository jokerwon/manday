import { useStorageLocal } from './useStorageLocal'

export const Themes = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
]

function setupTheme(theme: string) {
  document.querySelector('html')?.setAttribute('data-theme', theme)
}

export const useTheme = () => {
  const theme = useStorageLocal('mandy-theme', 'light')

  onMounted(() => {
    setupTheme(theme.value)
  })

  watch(theme, (v) => {
    setupTheme(v)
  })

  function setTheme(next: string) {
    theme.value = next
    // setupTheme(next)
  }

  return {
    theme,
    setTheme,
  }
}
