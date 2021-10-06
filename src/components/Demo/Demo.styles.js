import styled from 'styled-components'

export const TYPES = {
  point: 'point',
  circle: 'circle',
  rect: 'rect',
}

export const Demo = styled.section`
  background-color: ${({ theme: { colors }, $collided }) => (
    $collided ? colors.yellow : colors.purple
  )};
  cursor: none;
  transition: background-color ease-in .2s;
  position: absolute;
  width: 60vw;
  height: 40vw;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
`

export const Base = styled.div`
  position: absolute;
  cursor: none;

  ${({ $type }) => {
    if ($type === TYPES.circle) {
      return `
        border-radius: 50%;
        width: 20px;
        height: 20px;
      `
    }

    return `
      width: 4px;
      height: 4px;
    `
  }}
`

export const Element = styled(Base)`
  background-color: ${({ theme }) => theme.colors.yellow};
  z-index: ${({ theme }) => theme.zIndex.base + 1};
`

export const Target = styled(Base)`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`
