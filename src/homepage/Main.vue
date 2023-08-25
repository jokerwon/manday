<script setup lang="ts">
import { Themes, useTheme } from '~/composables/useTheme'
// import baiduIcon from '~/assets/icon_baidu.svg'

interface Platform {
  name: string
  code: string
}

const { theme, setTheme } = useTheme()

const platforms = shallowRef<Platform[]>([
  {
    code: 'baidu',
    name: '百度',
    // icon: baiduIcon,
  },
  {
    code: 'bing',
    name: '必应',
    // icon: 'i-logos:bing',
  },
  {
    code: 'google',
    name: '谷歌',
    // icon: 'i-logos:google',
  },
  {
    code: 'juejin',
    name: '掘金',
  },
  {
    code: 'npm',
    name: 'npm',
  },
  {
    code: 'github',
    name: 'Github',
  },
  {
    code: 'zhihu',
    name: '知乎',
  },
  {
    code: 'bilibili',
    name: '哔哩哔哩',
  },
  {
    code: 'weibo',
    name: '微博',
  },
])
const platform = ref(platforms.value[0].code)
const keywords = ref()
// const modalVisible = ref(false)

function onSearch() {
  let url: string
  switch (platform.value) {
    case 'google':
      url = `https://www.google.com/search?q=${keywords.value}`
      break
    case 'bing':
      url = `https://cn.bing.com/search?q=${keywords.value}`
      break
    case 'juejin':
      url = `https://juejin.cn/search?query=${keywords.value}`
      break
    case 'npm':
      url = `https://www.npmjs.com/search?q=${keywords.value}`
      break
    case 'github':
      url = `https://github.com/search?q=${keywords.value}&type=repositories`
      break
    case 'zhihu':
      url = `https://www.zhihu.com/search?q=${keywords.value}&type=content`
      break
    case 'bilibili':
      url = `https://search.bilibili.com/all?keyword=${keywords.value}`
      break
    case 'weibo':
      url = `https://s.weibo.com/weibo?q=${keywords.value}`
      break
    case 'baidu':
    default:
      url = `https://www.baidu.com/s?wd=${keywords.value}`
      break
  }
  window.location.assign(url)
}

function onSelect(selected: Platform) {
  platform.value = selected.code
}
// function onNewShortcut() {
//   modalVisible.value = true
// }
</script>

<template>
  <div class="h-full pl-12 pr-8">
    <header class="fixed top-12 left-8 flex items-center">
      <Logo class="w-12 h-12" />
      <!-- <span class="ml-8 font-mono text-xl">Manday</span> -->
      <div class="dropdown">
        <!-- <label tabindex="0" class="btn m-1">Click</label> -->
        <label tabindex="0" class="btn btn-ghost normal-case ml-8 font-mono text-xl"> Manday </label>
        <div class="dropdown-content bg-base-200 text-base-content rounded-box top-px h-[70vh] max-h-96 w-56 overflow-y-auto shadow mt-16">
          <div class="grid grid-cols-1 gap-3 p-3" tabindex="0">
            <button v-for="t in Themes" :key="t" class="outline-base-content overflow-hidden rounded-lg text-left" :data-set-theme="t" data-act-class="[&amp;_svg]:visible" @click="setTheme(t)">
              <div :data-theme="t" class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                <div class="grid grid-cols-5 grid-rows-3">
                  <div class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                    <!-- <template /> -->
                    <div class="i-carbon:checkmark" :class="theme === t ? 'visible' : 'invisible'" />
                    <div class="flex-grow text-sm">
                      {{ t }}
                    </div>
                    <div class="flex h-full flex-shrink-0 flex-wrap gap-1">
                      <div class="bg-primary w-2 rounded" />
                      <div class="bg-secondary w-2 rounded" />
                      <div class="bg-accent w-2 rounded" />
                      <div class="bg-neutral w-2 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
    <div class="pt-5/12">
      <input
        v-model="keywords"
        autofocus
        class="input bg-transparent caret-base-100 w-[400px] my-2 text-primary-content focus:outline-none placeholder:text-primary-content"
        type="text"
        placeholder="搜索"
        @keyup.enter="onSearch"
      >

      <ul class="platforms">
        <li v-for="p in platforms" :key="p.code" class="badge badge-lg cursor-pointer" :class="{ 'badge-secondary': platform === p.code }" :style="{ '--code': p.code }" @click="onSelect(p)">
          {{ p.name }}
        </li>
      </ul>

      <!-- <Shortcuts @add="onNewShortcut" />
      <Modal :open="modalVisible" @cancel="modalVisible = false">
        <template #header>
          Add a new shortcut
        </template>
        <form>
          <div>
            <label class="label">
              <span class="label-text">Title</span>
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full focus:outline-none focus:border-primary-focus">
          </div>
          <div>
            <label class="label">
              <span class="label-text">URL</span>
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full focus:outline-none focus:border-primary-focus">
          </div>
        </form>
      </Modal> -->
    </div>
  </div>
</template>

<style scoped>
.platforms {
  display: flex;
  gap: 0.5rem;
  /* display: grid;
  gap: 0.5rem;
  grid-template-rows: repeat(2, 80px);
  grid-template-columns: repeat(5, 80px);
  grid-template-areas:
    'baidu zhihu zhihu google weibo'
    'bing zhihu zhihu bilibili bilibili'; */
}

.platforms > li {
  /* grid-area: var(--code); */
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid hsl(var(--pc));
  border-radius: 1rem;
}
</style>
