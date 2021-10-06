import React from 'react'

import { usePointCollision } from '@hooks/usePointCollision'

import { Demo, TYPES } from './components/Demo/Demo'

import * as Styled from './App.styles'

export const App = () => (
  <Styled.Main>
    <Demo
      useCollision={usePointCollision}
      elementType={TYPES.point}
      targetType={TYPES.point}
    />
  </Styled.Main>
)
