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
      ],
    }),
  ],
  transformers: [transformerDirectives()],
})
