import styled from 'styled-components'

import { Point as PointComp } from '@components/Point/Point'

export const Line = styled.div`
  max-width: 800px;
  background-color: ${({ theme }) => theme.colors.pink};
  width: 100%;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transform: rotate(-25deg);
`

export const Point = styled(PointComp)`
  &:first-child { left: 0; }
  &:last-child { right: 0; }
`
