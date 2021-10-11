import styled from 'styled-components'

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
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
`

export const IconNavIcon = styled.div`
  background-color: rgba(0, 0, 0, .2);
  border-radius: 2px;
  width: 40px;
  height: 40px;
  position: relative;
  cursor: pointer;
  margin-left: 10px;

  &:before,
  &:after {
    content: "";
    position: absolute;
  }

  &:after {
    background-color: ${({ theme }) => theme.colors.black};
  }

  &:before {
    border-color: ${({ theme }) => theme.colors.black};
  }

  &:hover {
    background-color: rgba(0, 0, 0, .1);
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
          border: 2px solid;
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
    background-color: rgba(0, 0, 0, .8);
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
