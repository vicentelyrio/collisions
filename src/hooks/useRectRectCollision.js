import { getRectBounds } from '@hooks/helpers'

export const useRectRectCollision = (rectA, rectB) => {
  const [rectAX, rectAY, rectAWidth, rectAHeight] = getRectBounds(rectA)
  const [rectBX, rectBY, rectBWidth, rectBHeight] = getRectBounds(rectB)

  return {
    collided: rectAX + rectAWidth >= rectBX
      && rectAX <= rectBX + rectBWidth
      && rectAY + rectAHeight >= rectBY
      && rectAY <= rectBY + rectBHeight
  }
}
