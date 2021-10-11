import React, { useCallback, useState } from 'react'

import { Demo } from './components/Demo/Demo'
import { Selector } from './components/Selector/Selector'
import { IconNav } from './components/IconNav/IconNav'

import * as Styled from './App.styles'

const TARGETS = {
  point: 'point',
  circle: 'circle',
  rect: 'rect',
}

const POINTERS = {
  point: 'point',
  circle: 'circle',
  rect: 'rect',
}

const EXAMPLES = [
  {
    pointer: POINTERS.point,
    target: TARGETS.point,
  },
  {
    pointer: POINTERS.point,
    target: TARGETS.circle,
  },
  {
    pointer: POINTERS.circle,
    target: TARGETS.circle,
  },
  {
    pointer: POINTERS.point,
    target: TARGETS.rect,
  },
  {
    pointer: POINTERS.circle,
    target: TARGETS.rect,
  },
  {
    pointer: POINTERS.rect,
    target: TARGETS.rect,
  },
]

export const App = () => {
  const [current, setCurrent] = useState({
    pointer: POINTERS.circle,
    target: TARGETS.circle,
  })

  const onSelect = useCallback(({ pointer, target }) => () => (
    setCurrent({ pointer, target })
  ), [setCurrent])

  return (
    <Styled.Main>
      <Styled.Nav>
        <Selector
          options={EXAMPLES}
          setCurrent={setCurrent}
          current={current}
          onSelect={onSelect}
        />
        <IconNav
          label="pointer"
          options={Object.keys(POINTERS)}
          setCurrent={setCurrent}
          current={current}
          onSelect={onSelect}
        />
        <IconNav
          label="target"
          options={Object.keys(TARGETS)}
          setCurrent={setCurrent}
          current={current}
          onSelect={onSelect}
        />
      </Styled.Nav>
      <Demo {...current} />
    </Styled.Main>
  )
}
