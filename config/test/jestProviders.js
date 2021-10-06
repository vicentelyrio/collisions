import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { act } from 'react-dom/test-utils'
import 'jest-styled-components'

export const Providers = ({ children, theme = {} }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

export const renderWithTheme = (component, theme) => (
  renderer.create(
    <Providers theme={theme}>{component}</Providers>
  )
)

// Use this in your test after mounting if you need to let the
// query finish without updating the wrapper
export async function actWait(amount = 0) {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, amount))
  })
}
