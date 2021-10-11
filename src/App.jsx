import React, { useCallback, useState } from 'react'

import { usePointPointCollision } from '@hooks/usePointPointCollision'
import { usePointCircleCollision } from '@hooks/usePointCircleCollision'
import { useCircleCircleCollision } from '@hooks/useCircleCircleCollision'
import { usePointRectangleCollision } from '@hooks/usePointRectangleCollision'
import { useRectangleRectangleCollision } from '@hooks/useRectangleRectangleCollision'
import { useCircleRectangleCollision } from '@hooks/useCircleRectangleCollision'

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

const HOOKS = {
  [`${POINTERS.point}-${TARGETS.point}`]: usePointPointCollision,
  [`${POINTERS.point}-${TARGETS.circle}`]: usePointCircleCollision,
  [`${POINTERS.point}-${TARGETS.rect}`]: usePointRectangleCollision,
  [`${POINTERS.circle}-${TARGETS.circle}`]: useCircleCircleCollision,
  [`${POINTERS.circle}-${TARGETS.rect}`]: useCircleRectangleCollision,
  [`${POINTERS.rect}-${TARGETS.rect}`]: useRectangleRectangleCollision,
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

const useCollisions = ({ pointer, target }) => {
  console.log(pointer, target)

  return HOOKS[`${pointer}-${target}`] || HOOKS['point-point']
}

export const App = () => {
  const [current, setCurrent] = useState({
    pointer: POINTERS.point,
    target: TARGETS.point,
  })

  const useCollision = useCollisions({ ...current })

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
      <Demo
        {...current}
        useCollision={useCollision}
      />
    </Styled.Main>
  )
}
