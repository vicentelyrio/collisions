import React, { useRef, useState, useCallback } from 'react'

import { getElementBounds } from '@hooks/helpers'

import * as Styled from './Demo.styles'

export { TYPES } from './Demo.styles'

export const Demo = ({ useCollision, elementType, targetType }) => {
  const element = useRef(null)
  const target = useRef(null)
  const { collided } = useCollision(element, target)
  const [elementPosition, setPointPosition] = useState({})

  const onMouseMove = useCallback((event) => {
    const [x, y] = getElementBounds(event.currentTarget)
    const { clientX, clientY } = event
    const { offsetWidth, offsetHeight } = element.current

    setPointPosition({
      left: `${clientX - x - (offsetWidth / 2)}px`,
      top: `${clientY - y - (offsetHeight / 2)}px`
    })
  }, [])

  return (
    <Styled.Demo onMouseMove={onMouseMove} $collided={collided}>
      <Styled.Element $type={elementType} ref={element} style={elementPosition} />
      <Styled.Target $type={targetType} ref={target} />
    </Styled.Demo>
  )
}
