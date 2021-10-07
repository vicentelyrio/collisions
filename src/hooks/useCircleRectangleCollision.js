import { getRectBounds, getCircleBounds, getBounds, getHypotenuse } from '@hooks/helpers'

export const useCircleRectangleCollision = (element, target) => {
  const [tx, ty, tw, th] = getRectBounds(target.current)
  const [ex, ey, er] = getCircleBounds(element.current)

  const testX = getBounds(ex, tx, tx + tw)
  const testY = getBounds(ey, ty, ty + th)
  const distX = ex - testX
  const distY = ey - testY
  const distance = getHypotenuse(distX, distY)

  return {
    collided: distance <= er
  }
}
