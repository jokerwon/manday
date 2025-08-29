import { useFetch } from '@vueuse/core'

export function usePoem() {
  const { data } = useFetch<any>('https://v2.jinrishici.com/one.json').json()

  return computed<any>(() => {
    const d = data.value?.data
    return {
      content: d?.content,
      title: d?.origin?.title,
      author: d?.origin?.author,
    }
  })
  // return {
  //   content: '迟日江山丽，春风花草香。',
  //   title: '绝句二首',
  //   author: '杜甫',
  // }
}
