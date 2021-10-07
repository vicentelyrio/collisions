import { getRectBounds } from '@hooks/helpers'

export const useRectangleRectangleCollision = (element, target) => {
  const [ex, ey, ew, eh] = getRectBounds(element.current)
  const [tx, ty, tw, th] = getRectBounds(target.current)

  return {
    collided: ex + ew >= tx
      && ex <= tx + tw
      && ey + eh >= ty
      && ey <= ty + th
  }
}
