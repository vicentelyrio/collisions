import clsx from 'clsx'
import { MantineProvider, Box, Title, ActionIcon, Group } from '@mantine/core'
import '@mantine/core/styles.css'

import { createTheme, cssVariablesResolver } from './theme'
import classes from './App.module.css'
import { Github } from './assets/github'

import { IconNav, Shapes } from './components/IconNav/IconNav'
import { useDemo } from './useDemo'

const SHAPES = [
  Shapes.point,
  Shapes.circle,
  Shapes.rect,
  Shapes.line,
]

function App() {
  const {
    containerRef,
    pointerRef,
    targetRef,

    pointerPosition,
    coords,
    collided,
    onMouseMove,

    pointer,
    target,
    Target,
    Pointer,
    setTarget,
    setPointer,
  } = useDemo()

  return (
    <MantineProvider
      theme={createTheme()}
      cssVariablesResolver={cssVariablesResolver}>
      <Box className={classes.main}>
        <Box className={classes.nav}>
          <Group>
            <IconNav
              label="pointer:"
              options={SHAPES}
              onSelect={setPointer}
              current={pointer}
            />
            <IconNav
              label="target:"
              options={SHAPES}
              onSelect={setTarget}
              current={target}
            />
          </Group>
          <ActionIcon
            component="a"
            href="https://github.com/vicentelyrio/collisions"
            color="gray.1"
            variant="transparent"
            aria-label="github">
            <Github />
          </ActionIcon>
        </Box>
        <Box
          className={clsx([classes.workspace, collided ? classes.collided : null])}
          ref={containerRef}
          onMouseMove={onMouseMove}>
          <Title order={6} className={classes.coords}>
            {`${coords[0]} x | ${coords[0]} y`}
          </Title>
          <Target ref={targetRef} />
          <Pointer ref={pointerRef} style={pointerPosition} />
        </Box>
      </Box>
    </MantineProvider>
  )
}

export default App

