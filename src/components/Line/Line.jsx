import React, { forwardRef } from 'react'

import * as Styled from './Line.styles'

export const Line = forwardRef((props, ref) => (
  <Styled.Line ref={ref} {...props}>
    <Styled.Point />
    <Styled.Point />
  </Styled.Line>
))
