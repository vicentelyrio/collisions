import { getRectBounds, getCircleBounds, getHypotenuse } from '@hooks/helpers'
import { pointCircleCalc } from '@hooks/usePointCircleCollision'
import { pointLineCalc } from '@hooks/usePointLineCollision'

export const useCircleLineCollision = (circle, line) => {
  const [pointA, pointB] = line?.childNodes ?? []
  const [pointAX, pointAY] = getRectBounds(pointA)
  const [pointBX, pointBY] = getRectBounds(pointB)
  const [circleX, circleY, circleRadius] = getCircleBounds(circle)

  const isInsidePointA = pointCircleCalc(pointAX, pointAY, circleX, circleY, circleRadius)
  const isInsidePointB = pointCircleCalc(pointBX, pointBY, circleX, circleY, circleRadius)

  if (isInsidePointA || isInsidePointB) return { collided: true }

  const distanceLine = getHypotenuse(pointBX - pointAX, pointBY - pointAY)
  const dot = (
    ((circleX - pointAX) * (pointBX - pointAX)) + ((circleY - pointAY) * (pointBY - pointAY))
  ) / distanceLine ** 2

  const closestX = pointAX + (dot * (pointBX - pointAX))
  const closestY = pointAY + (dot * (pointBY - pointAY))

  const onSegment = pointLineCalc(closestX, closestY, pointAX, pointAY, pointBX, pointBY)

  if (!onSegment) return { collided: false }

  const distance = getHypotenuse(closestX - circleX, closestY - circleY)

  return {
    collided: distance <= circleRadius
  }
}
