import { getElementBounds, getCircleCenter } from './helpers'

export const useCircleCollision = (element, target) => {
  const eBounds = getElementBounds(element.current)
  const tBounds = getElementBounds(target.current)
  const [ecx, ecy, er] = getCircleCenter(...eBounds)
  const [tcx, tcy, tr] = getCircleCenter(...tBounds)
  const distX = ecx - tcx
  const distY = ecy - tcy
  const distance = Math.sqrt(distX * distX + distY * distY)

  return { collided: distance <= er + tr }
}
