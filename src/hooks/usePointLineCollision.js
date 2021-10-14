import { getRectBounds, getHypotenuse } from '@hooks/helpers'

export const usePointLineCollision = (point, line) => {
  const [pointA, pointB] = line?.childNodes ?? []
  const [pointX, pointY] = getRectBounds(point)
  const [pointAX, pointAY] = getRectBounds(pointA)
  const [pointBX, pointBY] = getRectBounds(pointB)

  const distanceA = getHypotenuse(pointX - pointAX, pointY - pointAY)
  const distanceB = getHypotenuse(pointBX - pointX, pointBY - pointY)
  const distanceLine = getHypotenuse(pointBX - pointAX, pointBY - pointAY)

  return {
    collided: parseInt(distanceA + distanceB, 10) === parseInt(distanceLine, 10)
  }
}
