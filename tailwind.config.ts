import { fontFamily } from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'
import files from './files'

export default {
  content: [...files],
  future: {
    disableColorOpacityUtilitiesByDefault: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config
