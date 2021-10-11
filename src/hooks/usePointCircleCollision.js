import { getRectBounds, getCircleBounds, getHypotenuse } from '@hooks/helpers'

export const pointCircleCalc = (point, circle) => {
  const [pointX, pointY] = getRectBounds(point)
  const [circleX, circleY, circleRadius] = getCircleBounds(circle)

  const distX = pointX - circleX
  const distY = pointY - circleY
  const distance = getHypotenuse(distX, distY)

  return {
    collided: distance <= circleRadius
  }
}

export const usePointCircleCollision = (point, circle) => (
  pointCircleCalc(point, circle)
)

export const useCirclePointCollision = (circle, point) => (
  pointCircleCalc(point, circle)
)
