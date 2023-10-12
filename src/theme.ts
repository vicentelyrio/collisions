import {
  type CSSVariablesResolver,
  type MantineThemeOverride,
  type MantineTheme,
  rem,
} from '@mantine/core'

export function createTheme(): MantineThemeOverride {
  return {
    respectReducedMotion: true,
    cursorType: 'pointer',
    defaultRadius: 'sm',
    primaryColor: 'pink',
    colors: {
      purple: ['#cab8ff', '#cab8ff', '#cab8ff', '#cab8ff', '#cab8ff', '#cab8ff', '#cab8ff', '#cab8ff', '#cab8ff', '#cab8ff'],
      pink: ['#eb92be', '#eb92be', '#eb92be', '#eb92be', '#eb92be', '#eb92be', '#eb92be', '#eb92be', '#eb92be', '#eb92be'],
      red: ['#ff6a85', '#ff6a85', '#ff6a85', '#ff6a85', '#ff6a85', '#ff6a85', '#ff6a85', '#ff6a85', '#ff6a85', '#ff6a85'],
      yellow: ['#ffef78', '#ffef78', '#ffef78', '#ffef78', '#ffef78', '#ffef78', '#ffef78', '#ffef78', '#ffef78', '#ffef78'],
      blue: ['#a8e7e9', '#a8e7e9', '#a8e7e9', '#a8e7e9', '#a8e7e9', '#a8e7e9', '#a8e7e9', '#a8e7e9', '#a8e7e9', '#a8e7e9'],
      indigo: ['#b1fffd', '#b1fffd', '#b1fffd', '#b1fffd', '#b1fffd', '#b1fffd', '#b1fffd', '#b1fffd', '#b1fffd', '#b1fffd'],
      green: ['#c1ffd7', '#c1ffd7', '#c1ffd7', '#c1ffd7', '#c1ffd7', '#c1ffd7', '#c1ffd7', '#c1ffd7', '#c1ffd7', '#c1ffd7'],
      gray: ['#333333', '#333333', '#333333', '#333333', '#333333', '#333333', '#333333', '#333333', '#333333', '#333333'],
      black: ['#141414', '#141414', '#141414', '#141414', '#141414', '#141414', '#141414', '#141414', '#141414', '#141414'],
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
          fontSize: rem(24),
        },
        h5: {
          fontSize: rem(18),
        },
        h6: {
          fontSize: rem(12),
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
        md: rem(22),
        lg: rem(28),
        xl: rem(40),
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
    '--mantine-icons-xs': theme.other.icons.xs,
    '--mantine-icons-sm': theme.other.icons.sm,
    '--mantine-icons-md': theme.other.icons.md,
    '--mantine-icons-lg': theme.other.icons.lg,
    '--mantine-icons-xl': theme.other.icons.xl,
    '--mantine-navbar-h': theme.other.navbar.height,
    '--mantine-indexes-base': theme.other.indexes.base,
    '--mantine-indexes-top': theme.other.indexes.top,
    '--mantine-indexes-modal': theme.other.indexes.modal,
  },
  dark: {},
  light: {},
})

