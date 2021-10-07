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
  width: 70vw;
  height: 70vh;
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

  ${({ $type, theme }) => {
    if ($type === TYPES.circle) {
      return `
        &, &:before, &:after {
          border-radius: 50%;
        }
      `
    }

    if ($type === TYPES.point) {
      return `
        width: 0;
        height: 0;
        box-sizing: border-box;

        &, &:before, &:after {
          border-radius: 50%;
        }

        &:before {
          border: solid 2px ${theme.colors.gray};
          content: "";
          position: absolute;
          left: -2px;
          top: -2px;
        }

        &:after {
          border: solid 10px rgba(255, 255, 255, .2);
          box-shadow: ${theme.colors.pink} 0 0 0 1px;
          content: "";
          position: absolute;
          left: -10px;
          top: -10px;
        }
      `
    }

    return ''
  }}
`

export const Element = styled(Base)`
  background-color: ${({ theme }) => theme.colors.gray};
  z-index: ${({ theme }) => theme.zIndex.base + 1};

  ${({ $type, theme }) => {
    if ($type !== TYPES.point) {
      return `
        background-color: ${theme.colors.yellow};
        width: 110px;
        height: 110px;
      `
    }
    return ''
  }}
`

export const Target = styled(Base)`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;

  ${({ $type, theme }) => {
    if ($type !== TYPES.point) {
      return `
        width: 110px;
        height: 110px;
        overflow: hidden;

        &:before {
          border: solid 14px ${theme.colors.red};
          content: "";
          position: absolute;
          left: 30px;
          top: 30px;
          right: 30px;
          bottom: 30px;
        }

        &:after {
          border: solid 14px ${theme.colors.red};
          content: "";
          position: absolute;
          left: 4px;
          top: 4px;
          right: 4px;
          bottom: 4px;
        }
      `
    }
    return ''
  }}
`
