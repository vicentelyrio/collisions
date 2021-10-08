import styled from 'styled-components'

export const Point = styled.div`
  width: 0;
  height: 0;
  box-sizing: border-box;
  position: absolute;

  &, &:before, &:after {
    border-radius: 50%;
  }

  &:before {
    border: solid 2px ${({ theme }) => theme.colors.gray};
    content: "";
    position: absolute;
    left: -2px;
    top: -2px;
  }

  &:after {
    border: solid 10px rgba(255, 255, 255, .2);
    box-shadow: ${({ theme }) => theme.colors.pink} 0 0 0 1px;
    content: "";
    position: absolute;
    left: -10px;
    top: -10px;
  }
`
