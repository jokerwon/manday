import { useFetch } from '@vueuse/core'

export const usePoetry = () => {
  const { data, ...rest } = useFetch<any>('https://v2.jinrishici.com/one.json').json()
  const detail = computed<any>(() => {
    return data.value?.data
  })
  const poetry = computed(() => {
    return detail.value?.content
  })

  return {
    detail,
    data: poetry,
    ...rest,
  }
}
