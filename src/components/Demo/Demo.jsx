import React, { useRef, useState, useCallback, useMemo } from 'react'

import { getRectBounds, clampBounds } from '@hooks/helpers'
import { usePointPointCollision } from '@hooks/usePointPointCollision'
import { useCircleCircleCollision } from '@hooks/useCircleCircleCollision'
import { useRectRectCollision } from '@hooks/useRectRectCollision'
import { usePointLineCollision } from '@hooks/usePointLineCollision'
import { usePointCircleCollision, useCirclePointCollision } from '@hooks/usePointCircleCollision'
import { usePointRectCollision, useRectPointCollision } from '@hooks/usePointRectCollision'
import { useCircleRectCollision, useRectCircleCollision } from '@hooks/useCircleRectCollision'
import { useCircleLineCollision } from '@hooks/useCircleLineCollision'

import * as Styled from './Demo.styles'

export const TYPES = {
  point: 'point',
  circle: 'circle',
  rect: 'rect',
  line: 'line',
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
  [TYPES.line]: Styled.TargetLine,
}

const HOOKS = {
  [`${TYPES.point}-${TYPES.point}`]: usePointPointCollision,
  [`${TYPES.point}-${TYPES.circle}`]: usePointCircleCollision,
  [`${TYPES.point}-${TYPES.rect}`]: usePointRectCollision,
  [`${TYPES.point}-${TYPES.line}`]: usePointLineCollision,

  [`${TYPES.circle}-${TYPES.point}`]: useCirclePointCollision,
  [`${TYPES.circle}-${TYPES.circle}`]: useCircleCircleCollision,
  [`${TYPES.circle}-${TYPES.rect}`]: useCircleRectCollision,
  [`${TYPES.circle}-${TYPES.line}`]: useCircleLineCollision,

  [`${TYPES.rect}-${TYPES.point}`]: useRectPointCollision,
  [`${TYPES.rect}-${TYPES.circle}`]: useRectCircleCollision,
  [`${TYPES.rect}-${TYPES.rect}`]: useRectRectCollision,
}

const getCollision = ({ pointer, target }) => HOOKS[`${pointer}-${target}`]

export const Demo = ({ pointer, target }) => {
  const containerRef = useRef(null)
  const pointerRef = useRef(null)
  const targetRef = useRef(null)

  const Pointer = useMemo(() => POINTER[pointer] || POINTER.point, [pointer])
  const Target = useMemo(() => TARGET[target] || TARGET.point, [target])

  const [pointerPosition, setElementPosition] = useState({})
  const [coord, setCoords] = useState({ x: 0, y: 0 })

  const useCollision = useMemo(() => (
    getCollision({ pointer, target }) ?? usePointPointCollision
  ), [pointer, target])
  const { collided } = useCollision(pointerRef.current, targetRef.current)

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
      x: clampBounds(clientX - cx, 0, cw),
      y: clampBounds(clientY - cy, 0, ch)
    })
  }, [])

  return (
    <Styled.Demo ref={containerRef} onMouseMove={onMouseMove} $collided={collided}>
      <Styled.Coords children={`${coord.x} x | ${coord.y} y`} />
      <Pointer ref={pointerRef} style={pointerPosition} />
      <Target ref={targetRef} />
    </Styled.Demo>
  )
}
