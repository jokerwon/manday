<script setup lang="ts">
const platforms = shallowRef<any[]>([
  {
    code: 'baidu',
    name: '百度',
    icon: 'i-simple-icons:baidu',
    homepage: 'https://www.baidu.com',
  },
  {
    code: 'google',
    name: '谷歌',
    icon: 'i-simple-icons:google',
    homepage: 'https://www.google.com',
  },
  {
    code: 'bing',
    name: '必应',
    icon: 'i-simple-icons:microsoftbing',
    homepage: 'https://cn.bing.com',
  },
  {
    code: 'juejin',
    name: '掘金',
    icon: 'i-simple-icons:juejin',
    homepage: 'https://juejin.cn',
  },
  {
    code: 'npm',
    name: 'npm',
    icon: 'i-simple-icons:npm',
    homepage: 'https://www.npmjs.com',
  },
  {
    code: 'github',
    name: 'Github',
    icon: 'i-logos:github-icon',
    homepage: 'https://github.com',
  },
  {
    code: 'zhihu',
    name: '知乎',
    icon: 'i-simple-icons:zhihu',
    homepage: 'https://www.zhihu.com',
  },
  {
    code: 'bilibili',
    name: '哔哩哔哩',
    icon: 'i-simple-icons:bilibili',
    homepage: 'https://bilibili.com',
  },
  {
    code: 'weibo',
    name: '微博',
    icon: 'i-simple-icons:sinaweibo',
    homepage: 'https://weibo.com',
  },
])
const index = ref(0)
const platform = computed(() => platforms.value[index.value])
const keywords = ref()

function onSearch() {
  let url: string = platform.value.homepage
  if (keywords.value) {
    switch (platform.value.code) {
      case 'google':
        url += `/search?q=${keywords.value}`
        break
      case 'bing':
        url += `/search?q=${keywords.value}`
        break
      case 'juejin':
        url += `/search?query=${keywords.value}`
        break
      case 'npm':
        url += `/search?q=${keywords.value}`
        break
      case 'github':
        url += `/search?q=${keywords.value}&type=repositories`
        break
      case 'zhihu':
        url += `/search?q=${keywords.value}&type=content`
        break
      case 'bilibili':
        url = `https://search.bilibili.com/all?keyword=${keywords.value}`
        break
      case 'weibo':
        url = `https://s.weibo.com/weibo?q=${keywords.value}`
        break
      case 'baidu':
        url = `https://www.baidu.com/s?wd=${keywords.value}`
        break
      default:
        break
    }
  }
  window.location.assign(url)
}

function onSelect(selected: number) {
  index.value = selected
}
function onDoubleClick(p: any) {
  window.open(p.homepage)
}

function onKeydown(e: KeyboardEvent) {
  if (e.altKey) {
    if (e.key === 'ArrowRight') {
      onSelect((index.value + 1) % platforms.value.length)
    }
    else if (e.key === 'ArrowLeft') {
      onSelect((index.value + platforms.value.length - 1) % platforms.value.length)
    }
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div class="flex flex-col items-center mt-12">
    <input
      v-model="keywords"
      autofocus
      name="search"
      class="min-w-[20vw] py-1 text-lg text-center bg-transparent caret-text-primary border-b border-border-base my-2 text-text-primary focus:outline-none placeholder:text-text-muted transition-colors duration-200"
      type="text"
      @keyup.enter="onSearch"
    >

    <ul class="flex flex-wrap gap-4 mt-4 text-text-primary">
      <li
        v-for="(p, i) in platforms"
        :key="p.code"
        class="flex items-center justify-center rounded px-2 py-1 font-semibold select-none cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-sm hover:bg-primary-light hover:text-text-on-primary"
        :class="{ 'bg-primary-light text-text-on-primary': platform.code === p.code }"
        @click="onSelect(i)"
        @dblclick="onDoubleClick(p)"
      >
        <span class="mr-1" :class="p.icon" />
        {{ p.name }}
      </li>
    </ul>
  </div>
</template>
