import styled from 'styled-components'

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.pink};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;
`

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.pink};
  box-sizing: border-box;
  height: 60px;
  display: flex;
  flex-flow: row nowrap;
  flex: 0 0 auto;
  padding: 10px;
  z-index: ${({ theme }) => theme.zIndex.base + 2};
`

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.gray};
  box-sizing: border-box;
  height: 30px;
  display: flex;
  flex-flow: row nowrap;
  flex: 0 0 auto;
  padding: 10px;
  z-index: ${({ theme }) => theme.zIndex.base + 2};
`
