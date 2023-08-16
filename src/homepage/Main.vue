<script setup lang="ts">
// import baiduIcon from '~/assets/icon_baidu.svg'

interface Engine {
  name: string
  value: string
}

const engines = shallowRef<Engine[]>([
  {
    value: 'baidu',
    name: '百度',
    // icon: baiduIcon,
  },
  {
    value: 'bing',
    name: '必应',
    // icon: 'i-logos:bing',
  },
  {
    value: 'google',
    name: '谷歌',
    // icon: 'i-logos:google',
  },
])
const engine = ref(engines.value[0].value)
const keywords = ref()
// const modalVisible = ref(false)

function onSearch() {
  let url: string
  switch (engine.value) {
    case 'google':
      url = `https://www.google.com/search?q=${keywords.value}`
      break
    case 'bing':
      url = `https://cn.bing.com/search?q=${keywords.value}`
      break
    case 'baidu':
    default:
      url = `https://www.baidu.com/s?wd=${keywords.value}`
      break
  }
  window.location.assign(url)
}

// function onSelect(selected: Engine) {
//   const curIndex = engines.value.findIndex(e => e.value === engine.value)
//   const nextIndex = engines.value.findIndex(e => e.value === selected.value)
//   ;[engines.value[curIndex], engines.value[nextIndex]] = [engines.value[nextIndex], engines.value[curIndex]]
//   engine.value = selected.value
// }
// function onNewShortcut() {
//   modalVisible.value = true
// }
</script>

<template>
  <div class="h-full pl-12 pr-8">
    <header class="fixed top-12 left-8 flex items-center">
      <Logo class="w-12 h-12" />
      <!-- <span class="ml-8 font-mono font-bold text-xl">Manday</span> -->
    </header>
    <div class="pt-5/12">
      <input v-model="keywords" autofocus class="input input-ghost bg-transparent caret-white w-[400px] my-2 focus:outline-none" type="text" placeholder="搜索" @keyup.enter="onSearch">

      <ul class="platforms">
        <li style="--code: baidu">
          Github
        </li>
        <li style="--code: baidu">
          npm
        </li>
        <li style="--code: baidu">
          百度
        </li>
        <li style="--code: bing" class="bg-accent text-accent-content">
          必应
        </li>
        <li style="--code: google">
          谷歌
        </li>
        <li style="--code: zhihu">
          知乎
        </li>
        <li style="--code: weibo">
          微博
        </li>
        <li style="--code: bilibili">
          B站
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
  display: grid;
  gap: 0.5rem;
  grid-template-rows: repeat(2, 80px);
  grid-template-columns: repeat(5, 80px);
  grid-template-areas:
    "baidu zhihu zhihu google weibo"
    "bing zhihu zhihu bilibili bilibili";
}

.platforms > li {
  grid-area: var(--code);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid hsl(var(--pc));
  border-radius: 1rem;
}
</style>
