# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "Manday" - a Vue 3 WebExtension that provides a pretty homepage, built with Vite and TypeScript. The extension replaces the browser's new tab page with a custom homepage featuring poems and search functionality.

## Architecture

- **WebExtension Framework**: Built using Manifest V3, works across Chrome, Firefox, and other browsers
- **Frontend**: Vue 3 with Composition API and `<script setup>` syntax
- **Build System**: Vite with custom configuration for WebExtension development
- **Styling**: UnoCSS for atomic CSS with instant compilation
- **State Management**: VueUse for composable utilities and WebExtension storage
- **Auto-imports**: Components, Vue APIs, and icons are auto-imported via unplugin

### Key Directories

- `src/` - Main source code
  - `homepage/` - Main homepage application (App.vue, Main.vue, Poem.vue, Search.vue)
  - `components/` - Shared Vue components with auto-importing
  - `composables/` - Vue composables (usePoem.ts, useWebExtensionStorage.ts)
  - `logic/` - Business logic and setup utilities
  - `styles/` - Shared styles and main.css
  - `manifest.ts` - Dynamic manifest.json generation
- `extension/` - Built extension files ready for browser loading
- `scripts/` - Build and development helper scripts

### Development Architecture

The project uses a sophisticated build system that:
1. Generates dynamic `manifest.json` from TypeScript configuration
2. Creates stub HTML files during development that connect to Vite dev server
3. Handles asset rewriting for relative paths in production builds
4. Supports hot module replacement (HMR) during development

## Common Development Commands

```bash
# Start development with Chrome-compatible build
pnpm dev

# Start development with Firefox-compatible build
pnpm dev-firefox

# Build for production
pnpm build

# Run linting
pnpm lint

# Run type checking
pnpm typecheck

# Run unit tests
pnpm test

# Run E2E tests with Playwright
pnpm test:e2e

# Package extension for distribution
pnpm pack

# Load extension in browser for testing
pnpm start:chromium  # For Chrome/Chromium
pnpm start:firefox   # For Firefox
```

## Development Workflow

1. **Development**: Run `pnpm dev` and load the `extension/` folder in your browser as an unpacked extension
2. **Testing**: The extension provides HMR during development - changes to Vue components update instantly
3. **Building**: Use `pnpm build` to create production-ready extension files
4. **Packaging**: Use `pnpm pack` to create distributable .crx, .xpi, and .zip files

## Code Conventions

- **ESLint**: Uses @antfu/eslint-config with single quotes, no semicolons
- **TypeScript**: Strict mode enabled with path aliases (`~/` maps to `src/`)
- **Vue**: Composition API with `<script setup>` syntax preferred
- **Styling**: UnoCSS atomic classes, avoid traditional CSS when possible
- **Auto-imports**: Components, Vue APIs, and browser APIs are automatically imported

## WebExtension-Specific Notes

- **Manifest**: Generated dynamically from `src/manifest.ts` - modify this file to change extension permissions, icons, etc.
- **New Tab Override**: Extension replaces the browser new tab with the homepage
- **Permissions**: Currently has `storage` permission and `host_permissions` for all URLs
- **CSP**: Custom Content Security Policy handles development vs production script loading
- **Cross-browser**: Uses webextension-polyfill for browser compatibility

## Testing

- **Unit Tests**: Vitest with jsdom environment
- **E2E Tests**: Playwright for extension testing
- **Pre-commit**: Simple git hooks run lint-staged on all files before commits

The codebase follows modern Vue 3 and TypeScript patterns with extensive tooling for a smooth WebExtension development experience.
