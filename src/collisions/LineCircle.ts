import { CircleBounds, LineBounds, getHypotenuse } from 'hooks/utils'
import { PointCircle } from './PointCircle'
import { PointLine } from './PointLine'

export type LineCircleType = (line: LineBounds, circle: CircleBounds) => boolean

export const LineCircle: LineCircleType = (line, circle) => {
  const [pX, pY, pR] = circle
  const [[tAX, tAY], [tBX, tBY]] = line
  const isInsidePointA = PointCircle(line[0], circle)
  const isInsidePointB = PointCircle(line[1], circle)

  if (isInsidePointA || isInsidePointB) return true

  const distanceLine = getHypotenuse(tBX - tAX, tBY - tAY)
  const dot = (((pX - tAX) * (tBX - tAX)) + ((pY - tAY) * (tBY - tAY))) / distanceLine ** 2

  const closestX = tAX + (dot * (tBX - tAX))
  const closestY = tAY + (dot * (tBY - tAY))

  const onSegment = PointLine([closestX, closestY], [[tAX, tAY], [tBX, tBY]])

  if (!onSegment) return false

  const distance = getHypotenuse(closestX - pX, closestY - pY)

  return distance <= pR
}

