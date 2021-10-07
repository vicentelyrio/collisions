import { getRectBounds } from '@hooks/helpers'

export const usePointRectangleCollision = (element, target) => {
  const [ex, ey] = getRectBounds(element.current)
  const [tx, ty, tw, th] = getRectBounds(target.current)

  return {
    collided: ex >= tx
      && ex <= tx + tw
      && ey >= ty
      && ey <= ty + th
  }
}
