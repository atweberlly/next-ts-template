import files from './files'
import type { Config } from 'tailwindcss'

export default {
  content: [...files],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
