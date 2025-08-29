import { computed, ref, watch } from 'vue'
import { useWebExtensionStorage } from './useWebExtensionStorage'

export type Theme = 'light' | 'dark' | 'auto'

const THEME_STORAGE_KEY = 'theme'
const themeStorage = useWebExtensionStorage(THEME_STORAGE_KEY, 'auto' as Theme)

// 检测系统主题偏好
const prefersDark = ref(false)
if (typeof window !== 'undefined') {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  prefersDark.value = mediaQuery.matches

  mediaQuery.addEventListener('change', (e) => {
    prefersDark.value = e.matches
  })
}

export function useTheme() {
  const theme = themeStorage.data

  // 计算实际应用的主题
  const actualTheme = computed(() => {
    if (theme.value === 'auto') {
      return prefersDark.value ? 'dark' : 'light'
    }
    return theme.value
  })

  // 应用主题到 DOM
  const applyTheme = (targetTheme: 'light' | 'dark') => {
    const html = document.documentElement
    html.classList.remove('light', 'dark')
    html.classList.add(targetTheme)
    html.setAttribute('data-theme', targetTheme)
  }

  // 切换主题
  const setTheme = (newTheme: Theme) => {
    themeStorage.data.value = newTheme
  }

  const toggleTheme = () => {
    const themes: Theme[] = ['light', 'dark', 'auto']
    const currentIndex = themes.indexOf(theme.value)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  // 监听主题变化并应用
  watch(actualTheme, (newTheme) => {
    applyTheme(newTheme)
  }, { immediate: true })

  return {
    theme: theme.value,
    actualTheme,
    setTheme,
    toggleTheme,
    prefersDark: computed(() => prefersDark.value),
  }
}
