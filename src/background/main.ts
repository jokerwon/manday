// only on dev mode
if (import.meta.hot) {
  // @ts-expect-error for background HMR
  import('/@vite/client')
  // load latest content script
}

browser.action.onClicked.addListener(() => {
  browser.tabs.create({ url: 'chrome://newtab' })
})
