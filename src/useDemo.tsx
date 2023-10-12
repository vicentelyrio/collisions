import {
  MouseEventHandler,
  useCallback,
  useMemo,
  useRef,
  useState
} from 'react'

import '@mantine/core/styles.css'


import { clamp, getCircleBounds, getLineBounds, getPointBounds, getRectBounds } from 'hooks/utils'

import { Shapes } from './components/IconNav/IconNav'
import { Point } from './components/Point/Point'
import { PointerLine, TargetLine } from './components/Line/Line'
import { PointerCircle, TargetCircle } from './components/Circle/Circle'
import { PointerRect, TargetRect } from './components/Rect/Rect'

import { PointPoint } from 'collisions/PointPoint'
import { PointRect } from 'collisions/PointRect'
import { PointCircle } from 'collisions/PointCircle'
import { PointLine } from 'collisions/PointLine'
import { RectRect } from 'collisions/RectRect'
import { CircleCircle } from 'collisions/CircleCircle'
import { LineCircle } from 'collisions/LineCircle'
import { LineLine } from 'collisions/LineLine'
import { LineRect } from 'collisions/LineRect'
import { RectCircle } from 'collisions/RectCircle'

const POINTER: any = {
  [Shapes.point]: Point,
  [Shapes.circle]: PointerCircle,
  [Shapes.rect]: PointerRect,
  [Shapes.line]: PointerLine,
}

const TARGET: any = {
  [Shapes.point]: Point,
  [Shapes.circle]: TargetCircle,
  [Shapes.rect]: TargetRect,
  [Shapes.line]: TargetLine,
}

type ElementType = {
  target: HTMLElement
  pointer: HTMLElement
}

type HookFn = ({ target, pointer }: ElementType) => boolean

enum HookTypes {
  'PointPoint' = 'point-point',
  'PointRect' = 'point-rect',
  'PointCircle' = 'point-circle',
  'PointLine' = 'point-line',
  'RectRect' = 'rect-rect',
  'RectPoint' = 'rect-point',
  'RectCircle' = 'rect-circle',
  'RectLine' = 'rect-line',
  'CircleCircle' = 'circle-circle',
  'CirclePoint' = 'circle-point',
  'CircleRect' = 'circle-rect',
  'CircleLine' = 'circle-line',
  'LineLine' = 'line-line',
  'LinePoint' = 'line-point',
  'LineRect' = 'line-rect',
  'LineCircle' = 'line-circle',
}

const HOOKS: Record<HookTypes, HookFn> = {
  [HookTypes.PointPoint]: ({ pointer, target }) => (
    PointPoint(getPointBounds(pointer), getPointBounds(target))
  ),
  [HookTypes.PointRect]: ({ pointer, target }) => (
    PointRect(getPointBounds(pointer), getRectBounds(target))
  ),
  [HookTypes.PointCircle]: ({ pointer, target }) => (
    PointCircle(getPointBounds(pointer), getCircleBounds(target))
  ),
  [HookTypes.PointLine]: ({ pointer, target }) => (
    PointLine(getPointBounds(pointer), getLineBounds(target))
  ),
  [HookTypes.RectRect]: ({ pointer, target }) => (
    RectRect(getRectBounds(pointer), getRectBounds(target))
  ),
  [HookTypes.RectPoint]: ({ pointer, target }) => (
    PointRect(getPointBounds(target), getRectBounds(pointer))
  ),
  [HookTypes.RectCircle]: ({ pointer, target }) => (
    RectCircle(getRectBounds(pointer), getCircleBounds(target))
  ),
  [HookTypes.RectLine]: ({ pointer, target }) => (
    LineRect(getLineBounds(target), getRectBounds(pointer))
  ),
  [HookTypes.CircleCircle]: ({ pointer, target }) => (
    CircleCircle(getCircleBounds(pointer), getCircleBounds(target))
  ),
  [HookTypes.CirclePoint]: ({ pointer, target }) => (
    PointCircle(getPointBounds(target), getCircleBounds(pointer))
  ),
  [HookTypes.CircleRect]: ({ pointer, target }) => (
    RectCircle(getRectBounds(target), getCircleBounds(pointer))
  ),
  [HookTypes.CircleLine]: ({ pointer, target }) => (
    LineCircle(getLineBounds(target), getCircleBounds(pointer))
  ),
  [HookTypes.LineLine]: ({ pointer, target }) => (
    LineLine(getLineBounds(target), getLineBounds(pointer))
  ),
  [HookTypes.LinePoint]: ({ pointer, target }) => (
    PointLine(getPointBounds(target), getLineBounds(pointer))
  ),
  [HookTypes.LineRect]: ({ pointer, target }) => (
    LineRect(getLineBounds(pointer), getRectBounds(target))
  ),
  [HookTypes.LineCircle]: ({ pointer, target }) => (
    LineCircle(getLineBounds(pointer), getCircleBounds(target))
  ),
}

export function useDemo() {
  const containerRef = useRef(null)
  const pointerRef = useRef(null)
  const targetRef = useRef(null)

  const [pointerPosition, setPointerPosition] = useState({})
  const [pointer, setPointer] = useState<Shapes>(Shapes.point)
  const [target, setTarget] = useState<Shapes>(Shapes.circle)
  const [coords, setCoords] = useState<[number, number]>([0, 0])
  const [collided, setCollision] = useState<boolean>(false)

  const Pointer = useMemo(() => POINTER[pointer] || POINTER.point, [pointer])
  const Target = useMemo(() => TARGET[target] || TARGET.point, [target])

  const onMouseMove: MouseEventHandler<HTMLDivElement> = useCallback((event) => {
    if (!targetRef?.current || !containerRef?.current || !pointerRef?.current) return

    const [cx, cy, cw, ch] = getRectBounds(containerRef.current)
    const { clientX, clientY } = event
    const { offsetWidth = 0, offsetHeight = 0 } = pointerRef?.current ?? {}

    setPointerPosition({
      left: `${clientX - cx - (offsetWidth / 2)}px`,
      top: `${clientY - cy - (offsetHeight / 2)}px`,
      margin: 0,
    })

    setCoords([
      clamp(clientX - cx, 0, cw),
      clamp(clientY - cy, 0, ch)
    ])

    const collisionFn = HOOKS[`${pointer}-${target}` as HookTypes]
      ?? HOOKS[HookTypes.PointPoint]

    setCollision(collisionFn({
      pointer: pointerRef.current,
      target: targetRef.current
    }))
  }, [pointer, target, pointerRef, targetRef, containerRef])

  return {
    containerRef,
    pointerRef,
    targetRef,

    pointerPosition,
    coords,
    collided,
    onMouseMove,

    pointer,
    target,
    Target,
    Pointer,
    setTarget,
    setPointer,
  }
}

