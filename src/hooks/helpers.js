export const getRectBounds = (node) => {
  const { x, y, width, height } = node?.getBoundingClientRect() || {}
  return [Math.round(x), Math.round(y), width, height]
}

export const getCircleBounds = (node) => {
  const { x, y, width } = node?.getBoundingClientRect() || {}
  const r = width / 2
  const cx = x + r
  const cy = y + r

  return [cx, cy, r]
}

export const getBounds = (cur, min, max) => (
  Math.max(min, Math.min(cur, max))
)

export const getHypotenuse = (distX, distY) => (
  Math.sqrt((distX * distX) + (distY * distY))
)
