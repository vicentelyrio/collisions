import { getCircleBounds, getHypotenuse } from '@hooks/helpers'

export const useCircleCircleCollision = (pointer, target) => {
  const [ex, ey, er] = getCircleBounds(pointer.current)
  const [tx, ty, tr] = getCircleBounds(target.current)

  const distX = ex - tx
  const distY = ey - ty
  const distance = getHypotenuse(distX, distY)

  return {
    collided: distance <= er + tr
  }
}
