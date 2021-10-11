import React, { useCallback, useState } from 'react'

import { ClickAway } from '@components/ClickAway/ClickAway'

import * as Styled from './Selector.styles'

export const Selector = ({ options, current, onSelect }) => {
  const [opened, setOpened] = useState(false)
  const onToggle = useCallback(() => setOpened(!opened), [opened])

  return (
    <ClickAway onClickAway={onToggle} disabled={!opened}>
      <Styled.Selector onClick={onToggle} $opened={opened}>
        <Styled.SelectorLabel children={`${current.pointer} - ${current.target}`} />
        {opened && (
          <Styled.SelectorSubmenu>
            {options.map(({ pointer, target }) => (
              <Styled.SelectorLabel
                key={`${pointer}-${target}`}
                children={`${pointer} - ${target}`}
                selected={current.pointer === pointer && current.target === target}
                onClick={onSelect({ pointer, target })}
              />
            ))}
          </Styled.SelectorSubmenu>
        )}
      </Styled.Selector>
    </ClickAway>
  )
}
