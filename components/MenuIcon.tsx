import { useAtom } from 'jotai'
import { Squash } from 'hamburger-react'
import { useState, useEffect } from 'react'
import { themeAtom, sideBarAtom } from 'store'

export default function MenuIcon() {
  const [theme] = useAtom(themeAtom)
  const [color, setColor] = useState('white')
  const [showSideBar, setShowSideBar] = useAtom(sideBarAtom)

  useEffect(() => {
    setColor(theme === 'dark' ? 'var(--light)' : 'var(--primary-900)')
  }, [theme])

  return (
    <button
      onClick={() => setShowSideBar((prevState) => !prevState)}
      aria-label="Toggle Sidebar Menu"
      className="lg:hidden"
    >
      <Squash
        label="show/hide sidemenu"
        key="hamburger"
        rounded
        distance="sm"
        size={24}
        color={color}
        toggled={showSideBar}
      />
    </button>
  )
}
