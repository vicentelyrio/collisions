import { getRectBounds, getCircleBounds, getHypotenuse } from '@hooks/helpers'

export const pointCircleCalc = (pointX, pointY, circleX, circleY, circleRadius) => {
  const distX = pointX - circleX
  const distY = pointY - circleY
  const distance = getHypotenuse(distX, distY)

  return distance <= circleRadius
}

export const pointCircle = (point, circle) => {
  const [pointX, pointY] = getRectBounds(point)
  const [circleX, circleY, circleRadius] = getCircleBounds(circle)

  return {
    collided: pointCircleCalc(pointX, pointY, circleX, circleY, circleRadius)
  }
}

export const usePointCircleCollision = (point, circle) => (
  pointCircle(point, circle)
)

export const useCirclePointCollision = (circle, point) => (
  pointCircle(point, circle)
)
