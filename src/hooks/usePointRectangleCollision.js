import { getRectBounds } from '@hooks/helpers'

export const usePointRectangleCollision = (point, rect) => {
  const [pointX, pointY] = getRectBounds(point)
  const [rectX, rectY, rectWidth, rectHeight] = getRectBounds(rect)

  return {
    collided: pointX >= rectX
      && pointX <= rectX + rectWidth
      && pointY >= rectY
      && pointY <= rectY + rectHeight
  }
}
