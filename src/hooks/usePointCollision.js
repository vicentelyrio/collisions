import { getElementBounds } from './helpers'

export const usePointCollision = (element, target) => {
  const [x1, y1] = getElementBounds(element)
  const [x2, y2] = getElementBounds(target)

  return { collided: x1 === x2 && y1 === y2 }
}
