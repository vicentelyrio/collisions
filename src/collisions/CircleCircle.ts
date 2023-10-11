import { CircleBounds, getHypotenuse } from 'hooks/utils'

export type CircleCircleType = (a: CircleBounds, b: CircleBounds) => boolean

export const CircleCircle: CircleCircleType = ([AX, AY, AR], [BX, BY, BR]) => {
  return getHypotenuse(AX - BX, AY - BY) <= AR + BR
}

