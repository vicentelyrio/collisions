export type PointBounds = [number, number]
export type RectBounds = [number, number, number, number]
export type CircleBounds = [number, number, number]
export type LineBounds = [PointBounds, PointBounds]

type PointBoundsType = (node: HTMLElement) => PointBounds
type RectBoundsType = (node: HTMLElement) => RectBounds
type CircleBoundsType = (node: HTMLElement) => CircleBounds
type LineBoundsType = (node: HTMLElement) => LineBounds

type ClampType = (cur: number, min: number, max: number) => number
type HypotenuseType = (distX: number, distY: number) => number

export const getPointBounds: PointBoundsType = (node) => {
  const { x, y } = node?.getBoundingClientRect() || {}
  return [Math.round(x), Math.round(y)]
}

export const getRectBounds: RectBoundsType = (node) => {
  const { x, y, width, height } = node?.getBoundingClientRect() || {}
  return [Math.round(x), Math.round(y), width, height]
}

export const getCircleBounds: CircleBoundsType = (node) => {
  const { x, y, width } = node?.getBoundingClientRect() || {}
  const r = width / 2
  const cx = x + r
  const cy = y + r

  return [cx, cy, r]
}

export const getLineBounds: LineBoundsType = (node) => {
  const [pointA, pointB] = node?.childNodes ?? []
  const pointABounds = getPointBounds(pointA as HTMLElement)
  const pointBBounds = getPointBounds(pointB as HTMLElement)

  return [pointABounds, pointBBounds]
}

export const clamp: ClampType = (cur, min, max) => (
  Math.max(min, Math.min(cur, max))
)

export const getHypotenuse: HypotenuseType = (distX, distY) => (
  Math.sqrt((distX * distX) + (distY * distY))
)

