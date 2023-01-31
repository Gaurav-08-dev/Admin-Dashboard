import React, { useCallback, useEffect, useRef } from 'react'

export const ClickOutsideListener = ({ onClose, children }) => {
  const ref = useRef(null)
  const escapeListener = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }, [])
  const clickListener = useCallback(
    (e) => {

        if(!ref.current) return;
      if (!(ref.current).contains(e.target)) {
        onClose?.() // using optional chaining here, change to onClose && onClose(), if required
      }
    },
    [ref.current],
  )

  useEffect(() => {
    // Attach the listeners on component mount.
    document.addEventListener('click', clickListener)
    document.addEventListener('keyup', escapeListener)
    // Detach the listeners on component unmount.
    return () => {
      document.removeEventListener('click', clickListener)
      document.removeEventListener('keyup', escapeListener)
    }
  }, [])
  return (
    <div
      ref={ref}
    >
      {children}
    </div>
  )
}