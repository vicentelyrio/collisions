import {
  type CSSVariablesResolver,
  type MantineThemeOverride,
  type MantineTheme,
  rem,
} from '@mantine/core'

import { generateColors } from '@mantine/colors-generator'

export function createTheme(): MantineThemeOverride {
  return {
    respectReducedMotion: true,
    cursorType: 'pointer',
    defaultRadius: 'sm',
    primaryColor: 'pink',
    colors: {
      purple: generateColors('#cab8ff'),
      pink: generateColors('#eb92be'),
      red: generateColors('#ff6a85'),
      yellow: generateColors('#ffef78'),
      blue: generateColors('#a8e7e9'),
      indigo: generateColors('#b1fffd'),
      green: generateColors('#c1ffd7'),
      gray: generateColors('#333333'),
      black: generateColors('#141414'),
    },
    fontFamily: '"Noto Sans Display", sans-serif',
    fontFamilyMonospace: '"Press Start 2P", Monaco, Courier, monospace',
    fontSizes: {
      xs: rem(10),
      sm: rem(12),
      md: rem(14),
      lg: rem(16),
      xl: rem(20),
    },
    headings: {
      fontFamily: '"Press Start 2P", Monaco, Courier, monospace',
      fontWeight: '600',
      sizes: {
        h1: {
          fontSize: rem(64),
        },
        h2: {
          fontSize: rem(34),
        },
        h3: {
          fontSize: rem(30),
        },
        h4: {
          fontSize: rem(26),
        },
        h5: {
          fontSize: rem(22),
          fontWeight: '400',
        },
        h6: {
          fontSize: rem(20),
        },
      }
    },
    breakpoints: {
      xs: '30rem',  // rem(480),
      sm: '48rem',  // rem(768),
      md: '80rem',  // rem(1280),
      lg: '120rem', // rem(1920),
      xl: '175rem', // rem(2800),
    },
    spacing: {
      xs: rem(5),
      sm: rem(10),
      md: rem(20),
      lg: rem(30),
      xl: rem(60),
    },
    other: {
      navbar: {
        height: rem(60),
      },
      icons: {
        xs: rem(10),
        sm: rem(16),
        md: rem(24),
        lg: rem(28),
        xl: rem(32),
        xxl: rem(48),
      },
      indexes: {
        base: 0,
        top: 10,
        modal: 100,
      },
    }
  }
}

export const cssVariablesResolver: CSSVariablesResolver = (theme: MantineTheme) => ({
  variables: {
    '--mantine-icons-xs': theme?.other.icons.xs,
    '--mantine-icons-sm': theme?.other.icons.sm,
    '--mantine-icons-md': theme?.other.icons.md,
    '--mantine-icons-lg': theme.other.icons.lg,
    '--mantine-icons-xl': theme.other.icons.xl,
    '--mantine-icons-xxl': theme.other.icons.xxl,
    '--mantine-navbar-h': theme.other.navbar.height,
    '--mantine-indexes-base': theme.other.indexes.base,
    '--mantine-indexes-top': theme.other.indexes.top,
    '--mantine-indexes-modal': theme.other.indexes.modal,
  },
  dark: {},
  light: {},
})

