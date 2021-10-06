import React, { useRef, useState } from 'react'

import * as Styled from './Demo.styles'

export const getElementBounds = (node) => {
  const { x, y, width, heigth } = node?.getBoundingClientRect() || {}
  return [x, y, width, heigth]
}

export const usePointCollision = (element, target) => {
  const [x1, y1] = getElementBounds(element)
  const [x2, y2] = getElementBounds(target)

  return { collided: x1 === x2 && y1 === y2 }
}

const getCenters = (x, y, w) => {
  const r = w / 2
  const cx = x + r
  const cy = y + r

  return [cx, cy, r]
}

const useCircleCollision = (element, target) => {
  const eBounds = getElementBounds(element.current)
  const tBounds = getElementBounds(target.current)
  const [ecx, ecy, er] = getCenters(...eBounds)
  const [tcx, tcy, tr] = getCenters(...tBounds)
  const distX = ecx - tcx
  const distY = ecy - tcy
  const distance = Math.sqrt(distX * distX + distY * distY)

  return { collided: distance <= er + tr }
}

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
