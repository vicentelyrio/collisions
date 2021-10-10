import React, { useRef, useState, useCallback, useMemo } from 'react'

import { getRectBounds, getBounds } from '@hooks/helpers'

import * as Styled from './Demo.styles'

export const TYPES = {
  point: 'point',
  circle: 'circle',
  rect: 'rect',
}

export const POINTER = {
  [TYPES.point]: Styled.PointerPoint,
  [TYPES.circle]: Styled.PointerCircle,
  [TYPES.rect]: Styled.PointerRect,
}

export const TARGET = {
  [TYPES.point]: Styled.TargetPoint,
  [TYPES.circle]: Styled.TargetCircle,
  [TYPES.rect]: Styled.TargetRect,
}

export const Demo = ({ useCollision, pointer, target }) => {
  const containerRef = useRef(null)
  const pointerRef = useRef(null)
  const targetRef = useRef(null)

  const { collided } = useCollision(pointerRef.current, targetRef.current)
  const [pointerPosition, setElementPosition] = useState({})
  const [coord, setCoords] = useState({ x: 0, y: 0 })

  const onMouseMove = useCallback((event) => {
    const [x, y] = getRectBounds(event.currentTarget)
    const [cx, cy, cw, ch] = getRectBounds(containerRef.current)
    const { clientX, clientY } = event
    const { offsetWidth, offsetHeight } = pointerRef.current

    setElementPosition({
      left: `${clientX - x - (offsetWidth / 2)}px`,
      top: `${clientY - y - (offsetHeight / 2)}px`
    })

    setCoords({
      x: getBounds(clientX - cx, 0, cw),
      y: getBounds(clientY - cy, 0, ch)
    })
  }, [])

  const Pointer = useMemo(() => POINTER[pointer] || POINTER.point, [pointer])
  const Target = useMemo(() => TARGET[target] || TARGET.point, [target])

  return (
    <Styled.Demo ref={containerRef} onMouseMove={onMouseMove} $collided={collided}>
      <Styled.Coords children={`${coord.x} x | ${coord.y} y`} />
      <Pointer ref={pointerRef} style={pointerPosition} />
      <Target ref={targetRef} />
    </Styled.Demo>
  )
}
