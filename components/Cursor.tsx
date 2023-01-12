import { useState, useEffect } from 'react'

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  const isMobile = () => {
    const ua = navigator.userAgent
    return /Android|Mobi/i.test(ua)
  }

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', mMove)
      document.addEventListener('mouseenter', mEnter)
      document.addEventListener('mouseleave', mLeave)
      document.addEventListener('mousedown', mDown)
      document.addEventListener('mouseup', mUp)
    }
    const removeEventListeners = () => {
      document.removeEventListener('mousemove', mMove)
      document.removeEventListener('mouseenter', mEnter)
      document.removeEventListener('mouseleave', mLeave)
      document.removeEventListener('mousedown', mDown)
      document.removeEventListener('mouseup', mUp)
    }

    const handleLinkHoverEvents = () => {
      document
        .querySelectorAll('a, #hamburger, #themeButton, button')
        .forEach((el) => {
          el.addEventListener('mouseover', () => setLinkHovered(true))
          el.addEventListener('mouseout', () => setLinkHovered(false))
        })
    }

    const mMove = (el) => {
      setPosition({ x: el.clientX, y: el.clientY })
    }

    const mDown = () => {
      setClicked(true)
    }

    const mUp = () => {
      setClicked(false)
    }

    const mEnter = () => {
      setHidden(false)
    }

    const mLeave = () => {
      setHidden(true)
    }

    addEventListeners()
    handleLinkHoverEvents()
    return () => removeEventListeners()
  }, [])

  if (typeof navigator !== 'undefined' && isMobile()) return null
  return (
    <div
      className={`pointer-events-none  fixed z-50 h-10 w-10 -translate-y-1/2 -translate-x-1/2 transform rounded-full border-[1px] border-dark mix-blend-color-dodge transition-opacity duration-300 ease-in-out dark:border-opacity-0 dark:bg-dark dark:bg-opacity-100 dark:mix-blend-overlay
        ${hidden ? 'opacity-0' : 'opacity-100'}
        ${
          clicked
            ? '-translate-y-1/2 -translate-x-1/2 scale-90 transform bg-dark'
            : 'scale-100'
        }
        ${
          linkHovered
            ? '-translate-y-1/2 -translate-x-1/2 scale-150 transform bg-dark transition-transform duration-300 ease-linear dark:border-white dark:border-opacity-100 dark:bg-light'
            : 'scale-100'
        }
      `}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    ></div>
  )
}
