import { PointBounds, getHypotenuse, LineBounds } from 'hooks/utils'

export type PointLineType = (point: PointBounds, line: LineBounds) => boolean

export const PointLine: PointLineType = ([pX, pY], [[tAX, tAY], [tBX, tBY]]) => {
  const distanceA = getHypotenuse(pX - tAX, pY - tAY)
  const distanceB = getHypotenuse(tBX - pX, tBY - pY)
  const distanceLine = getHypotenuse(tBX - tAX, tBY - tAY)

  return (distanceA + distanceB).toFixed(2) === (distanceLine).toFixed(2)
}
