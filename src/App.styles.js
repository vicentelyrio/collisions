import styled from 'styled-components'

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.pink};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
`

export const List = styled.ul`
  background-color: rgba(0, 0, 0, .1);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
`

export const ListItem = styled.li`
  cursor: pointer;
  font-size: 14px;
  padding: 10px 20px;

  ${({ $active }) => $active && `
    background-color: rgba(0, 0, 0, .1);
  `}
`
