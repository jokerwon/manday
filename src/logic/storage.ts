import type { Shortcut } from '~/types'
import { useStorageLocal } from '~/composables/useStorageLocal'

export const isDark = useStorageLocal('manday-isDark', false)

export const shortcuts = useStorageLocal<Shortcut[]>('manday-shortcuts', [
  {
    title: '百度',
    url: 'https://www.baidu.com/',
  },
  {
    title: '淘宝',
    url: 'https://www.taobao.com/',
  },
])
