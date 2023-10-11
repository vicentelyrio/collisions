import clsx from 'clsx'
import { forwardRef } from 'react'
import { Box, BoxProps } from '@mantine/core'

import classes from './Rect.module.css'

export type RectType = BoxProps & {
  pointer?: boolean
}

export const Rect = forwardRef<HTMLDivElement, RectType>(({
  className,
  pointer = false,
  ...rest
}, ref) => {
  return (
    <Box
      {...rest}
      ref={ref}
      className={clsx([
        classes.rect,
        pointer ? classes.pointer : null,
        className
      ])}
    />
  )
})

export const TargetRect = forwardRef<HTMLDivElement, RectType>((props, ref) => (
  <Rect {...props} ref={ref} />
))

export const PointerRect = forwardRef<HTMLDivElement, RectType>((props, ref) => (
  <Rect {...props} pointer ref={ref} />
))

