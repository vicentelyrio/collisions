import { getRectBounds, getCircleBounds, clampBounds, getHypotenuse } from '@hooks/helpers'

const circleRectCalc = (circle, rectangle) => {
  const [rectX, rectY, rectWidth, rectHeight] = getRectBounds(rectangle)
  const [circleX, circleY, circleRadius] = getCircleBounds(circle)

  const testX = clampBounds(circleX, rectX, rectX + rectWidth)
  const testY = clampBounds(circleY, rectY, rectY + rectHeight)
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
