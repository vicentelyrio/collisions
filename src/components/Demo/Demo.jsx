import React, { useRef, useState } from 'react'

import { getElementBounds } from '@hooks/helpers'
import { useCircleCollision } from '@hooks/useCircleCollision'

import * as Styled from './Demo.styles'

export const Demo = () => {
  const element = useRef(null)
  const target = useRef(null)
  const { collided } = useCircleCollision(element, target)
  const [elementPosition, setPointPosition] = useState({})

  const onMouseMove = (event) => {
    const [x, y] = getElementBounds(event.currentTarget)
    const { clientX, clientY } = event
    const { offsetWidth, offsetHeight } = element.current

    setPointPosition({
      left: `${clientX - x - (offsetWidth / 2)}px`,
      top: `${clientY - y - (offsetHeight / 2)}px`
    })
  }

  return (
    <Styled.Demo onMouseMove={onMouseMove} $collided={collided}>
      <Styled.Element ref={element} style={elementPosition} />
      <Styled.Target ref={target} />
    </Styled.Demo>
  )
}
