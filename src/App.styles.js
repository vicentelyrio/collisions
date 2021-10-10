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
  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;
`

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.gray};
  border-bottom: ${({ theme }) => theme.colors.purple} 1px solid;
  box-sizing: border-box;
  height: 60px;
  display: flex;
  flex-flow: row nowrap;
  flex: 0 0 auto;
  padding: 10px;
  z-index: ${({ theme }) => theme.zIndex.base + 2};
`

export const Selector = styled.div`
  background-color: rgba(0, 0, 0, .2);
  color: ${({ theme }) => theme.colors.pink};
  min-width: 200px;
  height: 40px;
  font-size: 14px;
  display: flex;
  position: relative;

  &:focus {
    background-color: rgba(0, 0, 0, .3);
  }

  &:hover {
    background-color: rgba(0, 0, 0, .4);
  }

  &:after {
    border: ${({ theme }) => theme.colors.pink} solid;
    border-width: 0 2px 2px 0;
    content: "";
    width: 8px;
    height: 8px;
    transform: rotate(45deg);
    position: absolute;
    top: 15px;
    right: 15px;
    margin: auto;
    z-index: ${({ theme }) => theme.zIndex.base + 1};
  }
`

export const SelectorSubmenu = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  box-shadow: rgba(0, 0, 0, .1) 3px 0 5px;
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  top: 100%;
  left: 0;
  right: 0;
`

export const SelectorLabel = styled.label`
  width: 100%;
  padding: 10px 15px;
  cursor: pointer;

  ${({ selected, theme }) => selected && `
    background-color: rgba(0, 0, 0, .1);
    pointer-events: none;
    cursor: default;
    color: ${theme.colors.purple};
  `}

  &:hover {
    background-color: rgba(0, 0, 0, .5);
  }
`

export const IconNav = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-left: 40px;
`

export const IconNavLabel = styled.p`
  line-height: 40px;
`

export const IconNavIcon = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, .4);
  margin-left: 10px;

  ${({ selected, theme }) => selected && `
    background-color: rgba(0, 0, 0, .1);
    pointer-events: none;
    cursor: default;
    color: ${theme.colors.purple};
  `}

  &:hover {
    background-color: rgba(0, 0, 0, .5);
  }
`
