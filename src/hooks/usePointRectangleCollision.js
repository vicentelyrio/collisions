import { getRectBounds } from '@hooks/helpers'

export const usePointRectangleCollision = (pointer, target) => {
  const [ex, ey] = getRectBounds(pointer.current)
  const [tx, ty, tw, th] = getRectBounds(target.current)

  return {
    collided: ex >= tx
      && ex <= tx + tw
      && ey >= ty
      && ey <= ty + th
  }
}
