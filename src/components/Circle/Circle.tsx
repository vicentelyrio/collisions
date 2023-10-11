import clsx from 'clsx'
import { forwardRef } from 'react'

import classes from './Circle.module.css'
import { Rect, RectType } from '../Rect/Rect'

export const Circle = forwardRef<HTMLDivElement, RectType>(({
  className,
  ...rest
}, ref) => {
  return (
    <Rect
      {...rest}
      ref={ref}
      className={clsx([ classes.circle, className ])}
    />
  )
})

export const TargetCircle = forwardRef<HTMLDivElement, RectType>((props, ref) => (
  <Circle {...props} ref={ref} />
))

export const PointerCircle = forwardRef<HTMLDivElement, RectType>((props, ref) => (
  <Circle {...props} pointer ref={ref} />
))
