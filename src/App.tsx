import { MantineProvider, Box } from '@mantine/core'
import { createTheme, cssVariablesResolver } from './theme'

import '@mantine/core/styles.css'

import classes from './App.module.css'

function App() {
  return (
    <MantineProvider
      theme={createTheme()}
      cssVariablesResolver={cssVariablesResolver}
    >
      <Box className={classes.main}>
        <Box className={classes.nav}>

        </Box>
        <Box className={classes.workspace}>

        </Box>
      </Box>
    </MantineProvider>
  )
}

export default App
