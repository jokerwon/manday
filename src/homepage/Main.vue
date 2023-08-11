<script setup lang="ts">
// import baiduIcon from '~/assets/icon_baidu.svg'

// const icons: Record<string, { src: string; class: string }> = {
//   baidu: {
//     src: baiduIcon,
//     class: 'w-8',
//   },
//   google: {
//     src: 'i-logos:google',
//     class: 'text-16',
//   },
//   bing: {
//     src: 'i-logos:bing',
//     class: 'text-10',
//   },
// }

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

function onSelect(selected: Engine) {
  const curIndex = engines.value.findIndex(e => e.value === engine.value)
  const nextIndex = engines.value.findIndex(e => e.value === selected.value)
  ;[engines.value[curIndex], engines.value[nextIndex]] = [engines.value[nextIndex], engines.value[curIndex]]
  engine.value = selected.value
}
// function onNewShortcut() {
//   modalVisible.value = true
// }
</script>

<template>
  <div class="relative h-full flex items-center justify-center">
    <div class="watermask font-mono text-neutral-content">
      Manday
    </div>
    <div>
      <div>
        <span v-for="item in engines" :key="item.value" class="badge badge-lg m-1 cursor-pointer select-none" :class="[engine === item.value ? 'badge-primary' : 'badge-ghost']" @click="onSelect(item)">
          {{ item.name }}
        </span>
      </div>
      <input v-model="keywords" autofocus class="input input-bordered w-[400px] my-2 focus:outline-none focus:border-primary-focus" type="text" placeholder="Keywords" @keyup.enter="onSearch">
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
.watermask {
  position: absolute;
  top: 0;
  left: 4rem;
  font-size: calc(120px + 5vw);
  user-select: none;
  letter-spacing: -0.2rem;
}
</style>
