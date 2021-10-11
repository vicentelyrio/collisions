import styled from 'styled-components'

import { gameFont } from '@/theme'

const TYPES = {
  point: 'point',
  circle: 'circle',
  rect: 'rect',
}

export const IconNav = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-left: 40px;
`

export const IconNavLabel = styled.h6`
  text-transform: uppercase;
  line-height: 40px;
  font-size: 10px;
  ${gameFont}
  color: ${({ theme }) => theme.colors.gray};
`

export const IconNavIcon = styled.div`
  border-radius: 2px;
  box-shadow: inset rgba(0, 0, 0, .04) 0 0 4px 4px;
  width: 40px;
  height: 40px;
  position: relative;
  cursor: pointer;
  margin-left: 10px;
  transition: background-color ease-in-out .2s;

  &:hover {
    background-color: rgba(0, 0, 0, .1);
  }

  &:active {
    background-color: rgba(0, 0, 0, .2);
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
  }

  &:after {
    background-color: ${({ theme }) => theme.colors.gray};
  }

  &:before {
    border-color: ${({ theme }) => theme.colors.gray};
  }

  ${({ type }) => {
    if (type === TYPES.point) {
      return `
        &:after {
          border-radius: 50%;
          width: 4px;
          height: 4px;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto
        }
        &:before {
          border-width: 2px;
          border-style: solid;
          border-radius: 50%;
          width: 22px;
          height: 22px;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto
        }
      `
    }
    if (type === TYPES.circle) {
      return `
        &:after {
          border-radius: 50%;
          width: 22px;
          height: 22px;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto
        }
      `
    }
    if (type === TYPES.rect) {
      return `
        &:after {
          width: 22px;
          height: 22px;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto
        }
      `
    }

    return ''
  }}

  ${({ selected, theme }) => selected && `
    background-color: ${theme.colors.gray};
    pointer-events: none;
    cursor: default;
    color: ${theme.colors.purple};

    &:after {
      background-color: ${theme.colors.pink};
    }
    &:before {
      border-color: ${theme.colors.pink};
    }
  `}
`
