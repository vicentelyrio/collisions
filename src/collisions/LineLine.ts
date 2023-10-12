import { LineBounds } from 'hooks/utils'

export type LineLineType = (A: LineBounds, B: LineBounds) => boolean

export const LineLine: LineLineType = ([[pAX, pAY], [pBX, pBY]], [[tAX, tAY], [tBX, tBY]]) => {
  const uA = ((tBX - tAX) * (pAY - tAY) - (tBY - tAY) * (pAX - tAX))
    / ((tBY - tAY) * (pBX - pAX) - (tBX - tAX) * (pBY - pAY))

  const uB = ((pBX - pAX) * (pAY - tAY) - (pBY - pAY) * (pAX - tAX))
    / ((tBY - tAY) * (pBX - pAX) - (tBX - tAX) * (pBY - pAY))

  return uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1
}
