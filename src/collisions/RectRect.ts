import { RectBounds } from 'hooks/utils'

export type RectRectType = (a: RectBounds, b: RectBounds) => boolean

export const RectRect: RectRectType = ([AX, AY, AW, AH], [BX, BY, BW, BH]) => (
  AX + AW >= BX && AX <= BX + BW && AY + AH >= BY && AY <= BY + BH
)

