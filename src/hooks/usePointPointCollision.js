import { getRectBounds } from '@hooks/helpers'

export const usePointPointCollision = (element, target) => {
  const [ex, ey] = getRectBounds(element.current)
  const [tx, ty] = getRectBounds(target.current)

  return {
    collided: ex === tx && ey === ty
  }
}
