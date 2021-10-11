import React from 'react'

import * as Styled from './IconNav.styles'

export const IconNav = ({ options, label, current, onSelect }) => (
  <Styled.IconNav>
    <Styled.IconNavLabel children={label} />
    {options.map((type) => (
      <Styled.IconNavIcon
        key={type}
        type={type}
        selected={current[label] === type}
        onClick={onSelect({ ...current, [label]: type })}
      />
    ))}
  </Styled.IconNav>
)
