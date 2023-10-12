import { RectBounds, PointBounds } from 'hooks/utils'

export type PointRectType = (point: PointBounds, rect: RectBounds) => boolean

export const PointRect: PointRectType = ([pX, pY], [tX, tY, tW, tH]) => {
  const xCollision = pX >= tX && pX <= tX + tW
  const yCollision = pY >= tY && pY <= tY + tH

  return xCollision && yCollision
}

