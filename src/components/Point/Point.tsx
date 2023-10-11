import { forwardRef } from 'react'
import clsx from 'clsx'
import { Box, BoxProps } from '@mantine/core'

import classes from './Point.module.css'

export const Point = forwardRef<HTMLDivElement, BoxProps>((props, ref) => (
  <Box
    {...props}
    ref={ref}
    className={clsx([ classes.point, props?.className ])}
  />
))

