import React, { forwardRef, useMemo } from 'react'

import * as Styled from './Target.styles'

export const TYPES = {
  circle: Styled.TargetCircle,
  rect: Styled.TargetRect,
}

export const Target = forwardRef(({ type, ...rest }, ref) => {
  const Component = useMemo(() => TYPES[type] || TYPES.circle, [type])

  return (
    <Component {...rest} ref={ref} />
  )
})
