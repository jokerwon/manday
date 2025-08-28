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
const platform = ref(platforms.value[0])
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

function onSelect(selected: Platform) {
  platform.value = selected
}
function onDoubleClick(p: Platform) {
  window.open(p.homepage)
}
</script>

<template>
  <div class="mt-8">
    <input
      v-model="keywords"
      autofocus
      class="input bg-transparent caret-base-100 w-[400px] my-2 text-primary-content focus:outline-none placeholder:text-primary-content"
      type="text"
      placeholder="搜索"
      @keyup.enter="onSearch"
    >

    <ul class="platforms">
      <li
        v-for="p in platforms"
        :key="p.code"
        class="badge badge-lg select-none cursor-pointer"
        :class="{ 'badge-secondary': platform.code === p.code }"
        :style="{ '--code': p.code }"
        @click="onSelect(p)"
        @dblclick="onDoubleClick(p)"
      >
        <span class="mr-1" :class="p.icon" />
        {{ p.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.platforms {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.platforms > li {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid hsl(var(--pc));
  border-radius: 1rem;
}
</style>
