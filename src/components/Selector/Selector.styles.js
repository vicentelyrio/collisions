import styled from 'styled-components'

export const Selector = styled.div`
  background-color: rgba(0, 0, 0, .2);
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.pink};
  text-transform: uppercase;
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
    content: "";
    border: solid ${({ theme }) => theme.colors.pink};
    box-sizing: unset;
    border-width: 3px 3px 0 0;
    width: 4px;
    height: 4px;
    transform: ${({ $opened }) => `rotate(${$opened ? '315deg' : '135deg'})`};
    transition: transform ease-in .2s;
    position: absolute;
    top: 0;
    bottom: 0;
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
