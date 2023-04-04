import files from './files'
import { colors, fontSizes } from './untitled-ui'
import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: [...files],
  theme: {
    colors: {
      ...colors,
    },
    fontSize: {
      ...fontSizes,
    },
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
      minWidth: {
        xs: '320px',
      },
    },
  },
  plugins: [],
} satisfies Config
