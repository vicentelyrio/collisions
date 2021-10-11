import { getRectBounds, getCircleBounds, getBounds, getHypotenuse } from '@hooks/helpers'

const circleRectCalc = (circle, rectangle) => {
  const [rectX, rectY, rectWidth, rectHeight] = getRectBounds(rectangle)
  const [circleX, circleY, circleRadius] = getCircleBounds(circle)

  const testX = getBounds(circleX, rectX, rectX + rectWidth)
  const testY = getBounds(circleY, rectY, rectY + rectHeight)
  const distX = circleX - testX
  const distY = circleY - testY
  const distance = getHypotenuse(distX, distY)

  return {
    collided: distance <= circleRadius
  }
}

export const useCircleRectCollision = (circle, rect) => (
  circleRectCalc(circle, rect)
)

export const useRectCircleCollision = (rect, circle) => (
  circleRectCalc(circle, rect)
)
