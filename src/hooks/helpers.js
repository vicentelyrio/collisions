export const getElementBounds = (node) => {
  const { x, y, width, heigth } = node?.getBoundingClientRect() || {}
  return [x, y, width, heigth]
}

export const getCircleCenter = (x, y, w) => {
  const r = w / 2
  const cx = x + r
  const cy = y + r

  return [cx, cy, r]
}
