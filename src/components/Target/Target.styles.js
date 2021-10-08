import styled from 'styled-components'

export const TargetRect = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  width: 110px;
  height: 110px;
  position: absolute;
  cursor: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;

  &:before {
    border: solid 14px ${({ theme }) => theme.colors.red};
    content: "";
    position: absolute;
    left: 30px;
    top: 30px;
    right: 30px;
    bottom: 30px;
  }

  &:after {
    border: solid 14px ${({ theme }) => theme.colors.red};
    content: "";
    position: absolute;
    left: 4px;
    top: 4px;
    right: 4px;
    bottom: 4px;
  }
`

export const TargetCircle = styled(TargetRect)`
  &, &:before, &:after {
    border-radius: 50%;
  }
`
