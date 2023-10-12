import { PointBounds } from 'hooks/utils'

export type PointPointType = (a: PointBounds, b: PointBounds) => boolean

export const PointPoint: PointPointType = ([AX, AY], [BX, BY]) => (
  AX === BX && AY === BY
)

