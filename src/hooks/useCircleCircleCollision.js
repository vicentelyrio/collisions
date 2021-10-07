import { getCircleBounds, getHypotenuse } from '@hooks/helpers'

export const useCircleCircleCollision = (element, target) => {
  const [ex, ey, er] = getCircleBounds(element.current)
  const [tx, ty, tr] = getCircleBounds(target.current)
  const distX = ex - tx
  const distY = ey - ty
  const distance = getHypotenuse(distX, distY)

  return {
    collided: distance <= er + tr
  }
}
