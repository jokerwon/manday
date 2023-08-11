import { useFetch } from '@vueuse/core'

// const mock = {
//   success: true,
//   city: '南京市',
//   info: {
//     date: '2023-08-07',
//     week: '星期一',
//     type: '雷阵雨',
//     low: '26°C',
//     high: '33°C',
//     fengxiang: '东北风',
//     fengli: '3级',
//     night: {
//       type: '多云',
//       fengxiang: '东北风',
//       fengli: '3级',
//     },
//     air: {
//       'aqi': 34,
//       'aqi_level': 1,
//       'aqi_name': '优',
//       'co': '1',
//       'no2': '5',
//       'o3': '108',
//       'pm10': '24',
//       'pm2.5': '13',
//       'so2': '5',
//     },
//     tip: '天暗下来，你就是阳光~ 天太热了，吃个西瓜~',
//   },
// }

export const useWeather = () => {
  const { data, ...rest } = useFetch<any>('https://api.szfx.top/tianqi/').json()
  const result = computed<any>(() => {
    if (data.value?.success)
      return data.value.info
    return null
  })

  return {
    data: result,
    // data: mock.info,
    ...rest,
  }
}
