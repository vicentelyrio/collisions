import { getRectBounds, getCircleBounds, clampBounds, getHypotenuse } from '@hooks/helpers'

const circleRectCollision = (
  circleX,
  circleY,
  circleRadius,
  rectX,
  rectY,
  rectWidth,
  rectHeight
) => {
  const testX = clampBounds(circleX, rectX, rectX + rectWidth)
  const testY = clampBounds(circleY, rectY, rectY + rectHeight)
  const distance = getHypotenuse(circleX - testX, circleY - testY)

  return distance <= circleRadius
}

export const useCircleRectCollision = (circle, rect) => ({
  collided: circleRectCollision(
    ...getCircleBounds(circle),
    ...getRectBounds(rect),
  )
})

export const useRectCircleCollision = (rect, circle) => ({
  collided: circleRectCollision(
    ...getCircleBounds(circle),
    ...getRectBounds(rect),
  )
})
