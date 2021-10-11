import React, { useRef, useEffect } from 'react'

const useClickAway = ({ ref, onClickAway, disabled }) => {
  useEffect(() => {
    function handleClick(event) {
      if (disabled || typeof onClickAway !== 'function') return
      if (ref.current && !ref.current.contains(event.target)) onClickAway(event)
    }

    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [ref, onClickAway, disabled])
}

export const ClickAway = ({ children, onClickAway, disabled = false }) => {
  const nodeRef = useRef(null)
  useClickAway({ ref: nodeRef, onClickAway, disabled })

  return (
    <div ref={nodeRef}>
      {children}
    </div>
  )
}
