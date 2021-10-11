import { getRectBounds } from '@hooks/helpers'

export const pointRectCalc = (point, rect) => {
  const [pointX, pointY] = getRectBounds(point)
  const [rectX, rectY, rectWidth, rectHeight] = getRectBounds(rect)

  return {
    collided: pointX >= rectX
      && pointX <= rectX + rectWidth
      && pointY >= rectY
      && pointY <= rectY + rectHeight
  }
}

export const usePointRectCollision = (point, rect) => (
  pointRectCalc(point, rect)
)

export const useRectPointCollision = (rect, point) => (
  pointRectCalc(point, rect)
)
