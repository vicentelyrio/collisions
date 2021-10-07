import React, { useRef, useState, useCallback } from 'react'

import { getRectBounds, getBounds } from '@hooks/helpers'

import * as Styled from './Demo.styles'

export { TYPES } from './Demo.styles'

export const Demo = ({ useCollision, elementType, targetType }) => {
  const container = useRef(null)
  const element = useRef(null)
  const target = useRef(null)
  const { collided } = useCollision(element, target)
  const [elementPosition, setPointPosition] = useState({})
  const [coord, setCoords] = useState({ clientX: 0, clientY: 0 })

  const onMouseMove = useCallback((event) => {
    const [x, y] = getRectBounds(event.currentTarget)
    const [cx, cy, cw, ch] = getRectBounds(container.current)
    const { clientX, clientY } = event
    const { offsetWidth, offsetHeight } = element.current

    setPointPosition({
      left: `${clientX - x - (offsetWidth / 2)}px`,
      top: `${clientY - y - (offsetHeight / 2)}px`
    })
    setCoords({ x: getBounds(clientX - cx, 0, cw), y: getBounds(clientY - cy, 0, ch) })
  }, [])

  return (
    <Styled.Demo ref={container} onMouseMove={onMouseMove} $collided={collided}>
      <Styled.Element ref={element} $type={elementType} style={elementPosition} />
      <Styled.Target ref={target} $type={targetType} />
      <Styled.Coords children={`${coord.x} x | ${coord.y} y`} />
    </Styled.Demo>
  )
}
