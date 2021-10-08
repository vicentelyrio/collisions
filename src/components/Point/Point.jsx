import React, { forwardRef } from 'react'

import * as Styled from './Point.styles'

export const Point = forwardRef((props, ref) => (
  <Styled.Point ref={ref} {...props} />
))
