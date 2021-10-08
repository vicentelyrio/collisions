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
  background-color: ${({ theme }) => theme.colors.gray};
  border-bottom: ${({ theme }) => theme.colors.purple} 1px solid;
  display: flex;
  flex-flow: row nowrap;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.base + 2};
`

export const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.pink};
  cursor: pointer;
  font-size: 14px;
  padding: 20px 20px;

  ${({ $active }) => $active && `
    background-color: rgba(0, 0, 0, .1);
  `}

  &:hover {
    background-color: rgba(255, 255, 255, .02);
  }
`
