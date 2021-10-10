import { getRectBounds } from '@hooks/helpers'

export const usePointPointCollision = (pointA, pointB) => {
  const [pointAX, pointAY] = getRectBounds(pointA)
  const [pointBX, pointBY] = getRectBounds(pointB)

  return {
    collided: pointAX === pointBX && pointAY === pointBY
  }
}
