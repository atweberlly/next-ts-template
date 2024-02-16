import { fontFamily } from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'
import files from './files'
import { blurs, boxShadows, colors, fontSizes } from './untitled-ui'

export default {
  content: [...files],
  future: {
    disableColorOpacityUtilitiesByDefault: true,
  },
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
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
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      minWidth: {
        xs: '320px',
      },
    },
  },
  plugins: [],
} satisfies Config
