import { useAtom } from 'jotai'
import { useState, useEffect } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { MoonIcon, BoltIcon } from '@heroicons/react/24/solid'

import { themeAtom } from 'store'

export default function ThemeButton() {
  const [theme, setTheme] = useAtom(themeAtom)
  const [icon, setIcon] = useState(<></>)

  const themeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1.3,
      transition: {
        duration: 0.1,
        ease: [0.83, 0, 0.17, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.1,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  }

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
  }, [theme])

  useEffect(() => {
    setIcon(() =>
      theme === 'dark' ? (
        <BoltIcon className="w-7 text-cyan-300 transition-opacity delay-75 duration-500 ease-linear" />
      ) : (
        <MoonIcon className="w-7 text-fuchsia-400 transition-opacity delay-75 duration-500 ease-linear" />
      )
    )
  }, [theme])

  return (
    <div id="themeButton">
      <AnimatePresence mode="wait" initial={false}>
        <m.button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          variants={themeVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          aria-label="change color theme button"
        >
          {icon}
        </m.button>
      </AnimatePresence>
    </div>
  )
}
