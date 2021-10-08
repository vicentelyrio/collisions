import { getRectBounds } from '@hooks/helpers'

export const usePointPointCollision = (pointer, target) => {
  const [ex, ey] = getRectBounds(pointer.current)
  const [tx, ty] = getRectBounds(target.current)

  return {
    collided: ex === tx && ey === ty
  }
}
