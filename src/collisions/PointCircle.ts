import { CircleBounds, PointBounds, getHypotenuse } from 'hooks/utils'

export type PointCircleType = (point: PointBounds, circle: CircleBounds) => boolean

export const PointCircle: PointCircleType = (point, circle) => {
  const [pointX, pointY] = point
  const [circleX, circleY, circleRadius] = circle
  const distX = pointX - circleX
  const distY = pointY - circleY
  const distance = getHypotenuse(distX, distY)

  return distance <= circleRadius
}
