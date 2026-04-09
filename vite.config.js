import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import remarkMdxImages from 'remark-mdx-images'

export default defineConfig({
  base: '/',
  server: {
    allowedHosts: [
      'edwin-gluelike-anjanette.ngrok-free.dev'
    ]
  },
  plugins: [
    {
      enforce: 'pre',
      ...mdx({
        remarkPlugins: [remarkGfm, remarkMdxImages],
        providerImportSource: "@mdx-js/react",
      })
    },
    react()
  ],
})