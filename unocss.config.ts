import { defineConfig } from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno, transformerDirectives } from 'unocss'
import { presetDaisy } from 'unocss-preset-daisy'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
      },
      collections: {
        weather: () => import('@iconify-json/wi/icons.json').then(i => i.default),
        logos: () => import('@iconify-json/logos/icons.json').then(i => i.default),
      },
    }),
    presetDaisy({
      themes: [
        // {
        //   light: {
        //     ...require('daisyui/src/theming/themes')['[data-theme=light]'],
        //     primary: '#3626af',
        //   },
        // },
        // 'light',
        'emerald',
        'dark',
      ],
    }),
  ],
  transformers: [transformerDirectives()],
})
