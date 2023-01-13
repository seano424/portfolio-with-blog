import { useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import { themeAtom } from 'store'
import { Squash } from 'hamburger-react'

export default function MenuIcon() {
  const [theme] = useAtom(themeAtom)
  const [color, setColor] = useState('white')
  const [showSideBar, setShowSideBar] = useState(false)

  useEffect(() => {
    setColor(theme === 'dark' ? 'white' : 'black')
  }, [theme])

  return (
    <button aria-label="Toggle Sidebar Menu" className="lg:hidden">
      <Squash
        label="show/hide sidemenu"
        rounded
        size={32}
        color={color}
        toggle={setShowSideBar}
        toggled={showSideBar}
      />
    </button>
  )
}
