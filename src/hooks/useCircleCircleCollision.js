import { getCircleBounds, getHypotenuse } from '@hooks/helpers'

export const circleCircleCollision = (
  circleAX,
  circleAY,
  circleARadius,
  circleBX,
  circleBY,
  circleBRadius
) => {
  const distX = circleAX - circleBX
  const distY = circleAY - circleBY
  const distance = getHypotenuse(distX, distY)

  return distance <= circleARadius + circleBRadius
}

export const useCircleCircleCollision = (circleA, circleB) => ({
  collided: circleCircleCollision(
    ...getCircleBounds(circleA),
    ...getCircleBounds(circleB)
  )
})
