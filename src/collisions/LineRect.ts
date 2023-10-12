import { LineBounds, RectBounds } from 'hooks/utils'
import { LineLine } from './LineLine'

export type LineRectType = (line: LineBounds, rect: RectBounds) => boolean

export const LineRect: LineRectType = (line, rect) => {
  const [pX, pY, pW, pH] = rect

  const left = LineLine(line, [[pX, pY], [pX, pY + pH]]);
  const right = LineLine(line, [[pX + pW, pY], [pX + pW, pY + pH]]);
  const top = LineLine(line, [[pX, pY], [pX + pW, pY]]);
  const bottom = LineLine(line, [[pX + pW, pY], [pX + pW, pY + pH]]);

  return left || right || top || bottom
}

