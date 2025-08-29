import { defineConfig } from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    presetUno({
      dark: 'class',
    }),
    presetAttributify(),
    presetIcons(),
  ],
  transformers: [
    transformerDirectives(),
  ],
  theme: {
    colors: {
      // 映射 CSS 变量到 UnoCSS 类
      'primary': 'var(--color-primary)',
      'primary-light': 'var(--color-primary-light)',
      'primary-pale': 'var(--color-primary-pale)',
      'secondary': 'var(--color-secondary)',
      'secondary-light': 'var(--color-secondary-light)',
      'secondary-pale': 'var(--color-secondary-pale)',

      'text-primary': 'var(--color-text-primary)',
      'text-secondary': 'var(--color-text-secondary)',
      'text-muted': 'var(--color-text-muted)',
      'text-on-primary': 'var(--color-text-on-primary)',
      'text-on-secondary': 'var(--color-text-on-secondary)',

      'bg-primary': 'var(--color-bg-primary)',
      'bg-secondary': 'var(--color-bg-secondary)',
      'bg-accent-primary': 'var(--color-bg-accent-primary)',
      'bg-accent-secondary': 'var(--color-bg-accent-secondary)',

      'border-light': 'var(--color-border-light)',
      'border-base': 'var(--color-border-base)',
      'border-accent': 'var(--color-border-accent)',
    },
  },
})
