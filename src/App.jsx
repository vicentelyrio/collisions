import React, { useState } from 'react'

import { usePointPointCollision } from '@hooks/usePointPointCollision'
import { usePointCircleCollision } from '@hooks/usePointCircleCollision'
import { useCircleCircleCollision } from '@hooks/useCircleCircleCollision'
import { usePointRectangleCollision } from '@hooks/usePointRectangleCollision'
import { useRectangleRectangleCollision } from '@hooks/useRectangleRectangleCollision'
import { useCircleRectangleCollision } from '@hooks/useCircleRectangleCollision'

import { Demo, TYPES } from './components/Demo/Demo'

import * as Styled from './App.styles'

const DEMO = {
  pointPoint: {
    name: 'Point - Point',
    useCollision: usePointPointCollision,
    pointer: TYPES.point,
    target: TYPES.point,
  },
  pointCircle: {
    name: 'Point - Circle',
    useCollision: usePointCircleCollision,
    pointer: TYPES.point,
    target: TYPES.circle,
  },
  circleCircle: {
    name: 'Circle - Circle',
    useCollision: useCircleCircleCollision,
    pointer: TYPES.circle,
    target: TYPES.circle,
  },
  pointRectangle: {
    name: 'Point - Rectangle',
    useCollision: usePointRectangleCollision,
    pointer: TYPES.point,
    target: TYPES.rect,
  },
  rectangleRectangle: {
    name: 'Rectangle - Rectangle',
    useCollision: useRectangleRectangleCollision,
    pointer: TYPES.rect,
    target: TYPES.rect,
  },
  circleRectangle: {
    name: 'Circle - Rectangle',
    useCollision: useCircleRectangleCollision,
    pointer: TYPES.circle,
    target: TYPES.rect,
  },
}

export const App = () => {
  const [current, setCurrent] = useState(DEMO.pointPoint)

  return (
    <Styled.Main>
      <Styled.List>
        {Object.values(DEMO).map((content, key) => (
          <Styled.ListItem
            key={String(key)}
            $active={content.name === current.name}
            onClick={() => setCurrent(content)}
            children={content.name}
          />
        ))}
      </Styled.List>
      <Demo {...current} />
    </Styled.Main>
  )
}
