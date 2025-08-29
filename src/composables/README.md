# 深色模式使用指南

## 功能概述

Manday 项目现已支持完整的深色模式功能，包括：
- 🌞 浅色模式
- 🌙 深色模式
- ⚪ 自动模式（根据系统偏好）

## 使用方法

### 1. 主题切换

点击页面右上角的主题切换按钮，可以在三种模式间循环切换：
- 浅色 → 深色 → 自动 → 浅色...

### 2. 程序化控制

在组件中使用 `useTheme` composable：

```vue
<script setup>
import { useTheme } from '~/composables/useTheme'

const { theme, actualTheme, setTheme, toggleTheme } = useTheme()

// 设置特定主题
setTheme('dark') // 设置为深色
setTheme('light') // 设置为浅色
setTheme('auto') // 设置为自动

// 切换主题
toggleTheme() // 循环切换

// 监听当前主题
console.log(theme.value) // 用户设置的主题
console.log(actualTheme.value) // 实际应用的主题
</script>
```

## 技术实现

### CSS 变量系统

项目使用完整的 CSS 变量系统，支持浅色和深色两套色彩方案：

```css
/* 浅色模式 */
html.light {
  --color-text-primary: #2c3e50;
  --color-bg-primary: #fefefe;
}

/* 深色模式 */
html.dark {
  --color-text-primary: #e8e6e3;
  --color-bg-primary: #1a1a1a;
}
```

### UnoCSS 集成

通过 UnoCSS 的主题配置，可以直接使用语义化的类名：

```vue
<template>
  <div class="bg-bg-primary text-text-primary">
    自动适配主题的内容
  </div>
</template>
```

### 存储机制

主题偏好存储在 WebExtension Storage 中，在不同浏览器会话间保持一致。

## 色彩设计

深色模式采用中国传统色彩的深色变体：
- **朱砂红**: 在深色背景下调整为更亮的 `#e67e7e`
- **青玉绿**: 调整为 `#9bb87a`
- **背景色**: 使用 `#1a1a1a` 和 `#242424` 的深色层次

## 过渡动画

所有主题切换都包含平滑的过渡动画：
```css
.transition-colors {
  transition: color 0.3s ease, background-color 0.3s ease;
}
```

这确保了用户体验的流畅性和视觉的连贯性。
