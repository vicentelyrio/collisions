import { getRectBounds, getCircleBounds, getHypotenuse } from '@hooks/helpers'

export const usePointCircleCollision = (element, target) => {
  const [ex, ey] = getRectBounds(element.current)
  const [tx, ty, tr] = getCircleBounds(target.current)
  const distX = ex - tx
  const distY = ey - ty
  const distance = getHypotenuse(distX, distY)

  return {
    collided: distance <= tr
  }
}
