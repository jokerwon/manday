<script setup lang="ts">
import { useDateFormat, useNow } from '@vueuse/core'
import { useWeather } from '~/composables/useWeather'
import { usePoetry } from '~/composables/usePoetry'

const weatherIcon: Record<string, string> = {
  多云: 'i-wi:day-cloudy',
  晴: 'i-wi:day-sunny',
  阴: 'i-wi:cloudy',
  阵雨: 'i-wi:night-alt-rain',
  雷阵雨: 'i-wi:day-storm-showers',
  雨: 'i-wi:rain',
  暴雨: 'i-wi:rain',
  大雨: 'i-wi:rain',
  中雨: 'i-wi:rain',
  小雨: 'i-wi:rain',
}

const now = useNow()
const date = useDateFormat(now, 'MMM.DD', { locales: 'en-US' })

const { data: poetry, detail: poetryDetail = {}, isFinished } = usePoetry()
const { data: weather } = useWeather()

function padZero(num: number) {
  return String(num).padStart(2, '0')
}
</script>

<template>
  <div class="h-full flex flex-col justify-center items-center">
    <div class="w-full px-4 h-6/8 flex flex-col justify-between text-center">
      <div v-if="weather?.type && weatherIcon[weather.type]" class="w-full pb-4">
        <div class="text-[12rem]" :class="weatherIcon[weather.type]" :title="weather?.type" />
        <div class="-mt-2 font-mono text-2xl">
          {{ `${weather?.low} ~ ${weather?.high}` }}
        </div>
      </div>

      <div class="text-3xl font-mono">
        <div class="countdown flex justify-center text-6xl line-height-[1em]">
          <span :style="{ '--value': padZero(now.getHours()) }" />:
          <span :style="{ '--value': padZero(now.getMinutes()) }" />:
          <span :style="{ '--value': padZero(now.getSeconds()) }" />
        </div>
        <div>
          {{ date }}
        </div>
      </div>

      <div v-if="isFinished">
        <div class="relative text-xl">
          {{ poetry }}
        </div>
        <div class="w-[max-content] mt-1 mx-auto px-1 py-0 rounded-md text-sm bg-secondary text-secondary-content">
          {{ (poetryDetail as any)?.origin?.author }}
        </div>
      </div>
      <div v-else>
        Loading...
      </div>
    </div>
  </div>
</template>
