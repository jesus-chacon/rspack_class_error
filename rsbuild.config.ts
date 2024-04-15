import path from 'path'

import { defineConfig } from '@rsbuild/core'
import { pluginVue } from '@rsbuild/plugin-vue'
import { pluginImageCompress } from '@rsbuild/plugin-image-compress'
import { pluginLightningcss } from '@rsbuild/plugin-lightningcss'

import packageFile from './package.json'

export default defineConfig({
  server: {
    port: 3000
  },
  performance: {
    bundleAnalyze:
      process.env.TC_BUNDLE_ANALYZE === 'true'
        ? {
            openAnalyzer: true,
            analyzerMode: 'static'
          }
        : undefined,
    chunkSplit: {
      strategy: 'split-by-experience',
      forceSplitting: {
        styles: /[.]*.css/
      }
    }
  },
  plugins: [pluginVue(), pluginImageCompress(), pluginLightningcss()],
  source: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    },
    tsconfigPath: './tsconfig.app.json',
    entry: {
      index: './src/main.ts'
    }
  },
  tools: {
    htmlPlugin: {
      template: './index.html',
      minify: true,
      meta: {
        version: process.env.npm_package_version as string
      }
    },
    sass: {
      sourceMap: true,
      additionalData: `@import "@/Assets/sass/mixins.scss";`
    }
  },
  output: {
    sourceMap: {
      css: false,
      js: 'source-map'
    },
    injectStyles: true
  }
})
