import React, { useCallback, useState } from 'react'

import { Demo, TYPES } from './components/Demo/Demo'
import { Selector } from './components/Selector/Selector'
import { IconNav } from './components/IconNav/IconNav'

import * as Styled from './App.styles'

const TARGETS = {
  [TYPES.point]: TYPES.point,
  [TYPES.circle]: TYPES.circle,
  [TYPES.rect]: TYPES.rect,
  [TYPES.line]: TYPES.line,
}

const POINTERS = {
  [TYPES.point]: TYPES.point,
  [TYPES.circle]: TYPES.circle,
  [TYPES.rect]: TYPES.rect,
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
    pointer: POINTERS.point,
    target: TARGETS.rect,
  },
  {
    pointer: POINTERS.point,
    target: TARGETS.line,
  },
  {
    pointer: POINTERS.circle,
    target: TARGETS.circle,
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
      <Styled.Footer />
    </Styled.Main>
  )
}
