import { forwardRef } from 'react'
import { Box, BoxProps } from '@mantine/core'
import { Point } from '../Point/Point'

import classes from './Line.module.css'
import clsx from 'clsx'

type LineType = BoxProps & {
  pointer?: boolean
}

export const Line = forwardRef<HTMLDivElement, LineType>(({
  className,
  pointer = false,
  ...rest
}, ref) => (
  <Box
    {...rest}
    ref={ref}
    className={clsx([
      classes.line,
      pointer ? classes.pointer : null,
      className
    ])}>
    <Point className={classes.firstPoint} />
    <Point className={classes.lastPoint}/>
  </Box>
))

export const TargetLine = forwardRef<HTMLDivElement, LineType>((props, ref) => (
  <Line {...props} ref={ref} />
))

export const PointerLine = forwardRef<HTMLDivElement, LineType>((props, ref) => (
  <Line {...props} pointer ref={ref} />
))
