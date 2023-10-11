import { CircleBounds, RectBounds, getHypotenuse, clamp } from 'hooks/utils'

export type RectCircleType = (rect: RectBounds, circle: CircleBounds) => boolean

export const RectCircle: RectCircleType = ([pX, pY, pW, pH], [tX, tY, tR]) => {
  const testX = clamp(tX, pX, pX + pW)
  const testY = clamp(tY, pY, pY + pH)
  const distance = getHypotenuse(tX - testX, tY - testY)

  return distance <= tR
}

