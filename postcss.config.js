export default {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3,
      features: {
        'custom-properties': false
      }
    },
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '30rem',
        'mantine-breakpoint-sm': '48rem',
        'mantine-breakpoint-md': '64rem',
        'mantine-breakpoint-lg': '120rem',
        'mantine-breakpoint-xl': '175rem',

        'mantine-icon-xs': '0.625rem',
        'mantine-icon-sm': '1rem',
        'mantine-icon-md': '1.5rem',
        'mantine-icon-lg': '1.75rem',
        'mantine-icon-xl': '2rem',
        'mantine-icon-xxl': '3rem',

        'mantine-navbar-h': '5rem',

        'mantine-indexes-base': 0,
        'mantine-indexes-top': 10,
        'mantine-indexes-modal': 100,
      }
    }
  }
}

