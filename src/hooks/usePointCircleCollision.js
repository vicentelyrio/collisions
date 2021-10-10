import { getRectBounds, getCircleBounds, getHypotenuse } from '@hooks/helpers'

export const usePointCircleCollision = (point, circle) => {
  const [pointX, pointY] = getRectBounds(point)
  const [circleX, circleY, circleRadius] = getCircleBounds(circle)

  const distX = pointX - circleX
  const distY = pointY - circleY
  const distance = getHypotenuse(distX, distY)

  return {
    collided: distance <= circleRadius
  }
}
