import styled from 'styled-components'

import { Point } from '@components/Point/Point'
import { Pointer } from '@components/Pointer/Pointer'
import { Target } from '@components/Target/Target'

export const Demo = styled.section`
  background-color: ${({ theme: { colors }, $collided }) => (
    $collided ? colors.yellow : colors.purple
  )};
  cursor: none;
  transition: background-color ease-in .2s;
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
`

export const Coords = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.gray};
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px;
`

// Pointer (mouse)
export const PointerPoint = styled(Point)`
  z-index: ${({ theme }) => theme.zIndex.base + 1};
`

export const PointerCircle = styled(Pointer).attrs({ type: 'circle' })`
  z-index: ${({ theme }) => theme.zIndex.base + 1};
`

export const PointerRect = styled(Pointer).attrs({ type: 'rect' })`
  z-index: ${({ theme }) => theme.zIndex.base + 1};
`

// Target
export const TargetPoint = styled(Point)`
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
`

export const TargetCircle = styled(Target).attrs({ type: 'circle' })``

export const TargetRect = styled(Target).attrs({ type: 'rect' })``
