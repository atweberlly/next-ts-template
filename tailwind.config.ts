import files from './files'
import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: [...files],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          ['Inter var', ...fontFamily.sans],
          {
            fontFeatureSettings: '"cv11", "ss01"',
            fontVariationSettings: '"opsz" 32',
          },
        ],
      },
    },
  },
  plugins: [],
} satisfies Config
