import React, { forwardRef, useMemo } from 'react'

import * as Styled from './Pointer.styles'

export const TYPES = {
  circle: Styled.PointerCircle,
  rect: Styled.PointerRect,
}

export const Pointer = forwardRef(({ type, ...rest }, ref) => {
  const Component = useMemo(() => TYPES[type] || TYPES.circle, [type])

  return (
    <Component {...rest} ref={ref} />
  )
})
