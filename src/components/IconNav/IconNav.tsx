import { Box, BoxProps, Title } from '@mantine/core'
import classes from './IconNav.module.css'
import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'

export enum Shapes {
  point = 'point',
  circle = 'circle',
  rect = 'rect',
  line = 'line',
}

export type IconNavType = BoxProps & {
  options: Shapes[]
  label: string
  current: Shapes
  onSelect: Dispatch<SetStateAction<Shapes>>
}

export const IconNav = ({ options, label, current, onSelect }: IconNavType) => (
  <Box className={classes.iconNav}>
    <Title order={6} className={classes.iconNavLabel}>{label}</Title>
    {options.map((type) => (
      <Box
        key={type}
        className={clsx([
          classes.iconNavIcon,
          classes[type],
          current === type ? classes.selected : null,
        ])}
        onClick={() => onSelect(type)}
      />
    ))}
  </Box>
)
