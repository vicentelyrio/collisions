import { getCircleBounds, getHypotenuse } from '@hooks/helpers'

export const useCircleCircleCollision = (circleA, circleB) => {
  const [circleAX, circleAY, circleARadius] = getCircleBounds(circleA)
  const [circleBX, circleBY, circleBRadius] = getCircleBounds(circleB)

  const distX = circleAX - circleBX
  const distY = circleAY - circleBY
  const distance = getHypotenuse(distX, distY)

  return {
    collided: distance <= circleARadius + circleBRadius
  }
}
