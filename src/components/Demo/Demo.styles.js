import styled from 'styled-components'

export const Demo = styled.section`
  background-color: ${({ theme: { colors }, $collided }) => (
    $collided ? colors.yellow : colors.purple
  )};
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

export const Element = styled.div`
  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  position: absolute;
  cursor: none;
  z-index: ${({ theme }) => theme.zIndex.base + 1};
`

export const Target = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`
