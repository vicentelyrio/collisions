import { getElementBounds } from '@hooks/helpers'

export const usePointCollision = (element, target) => {
  const [x1, y1] = getElementBounds(element.current)
  const [x2, y2] = getElementBounds(target.current)

  return { collided: x1 === x2 && y1 === y2 }
}
