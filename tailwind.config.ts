import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
import files from './files'
import { blurs, boxShadows, colors, fontSizes } from './untitled-ui'

export default {
  content: [...files],
  theme: {
    blur: {
      ...blurs,
    },
    boxShadow: {
      ...boxShadows,
    },
    colors: {
      ...colors,
    },
    fontSize: {
      ...fontSizes,
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...fontFamily.sans],
      },
      minWidth: {
        xs: '320px',
      },
    },
  },
  plugins: [],
} satisfies Config
