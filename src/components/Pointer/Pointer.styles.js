import styled from 'styled-components'

export const PointerRect = styled.div`
  background-color: ${({ theme }) => theme.colors.yellow};
  width: 110px;
  height: 110px;
  position: absolute;
  cursor: none;
  z-index: ${({ theme }) => theme.zIndex.base + 1};
`

export const PointerCircle = styled(PointerRect)`
  &, &:before, &:after {
    border-radius: 50%;
  }
`
