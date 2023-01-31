import { random } from '@/lib/utilities/random'
import { range } from '@/lib/utilities/range'
import { usePrefersReducedMotion } from 'hooks/usePrefersReducedMotion'
import { useRandomInterval } from 'hooks/useRandomInterval'
import React from 'react'
import { useAtom } from 'jotai'
import { themeAtom } from 'store'

const DEFAULT_COLOR = 'var(--fuchsia-400)'
const generateSparkle = (color: string) => {
  const sparkle = {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(10, 30),
    style: {
      top: random(0, 100) + '%',
      left: random(0, 100) + '%',
    },
  }
  return sparkle
}

const Sparkles = ({
  color = DEFAULT_COLOR,
  children,
  ...delegated
}: {
  color?: string
  children: React.ReactNode
}) => {
  const [sparkles, setSparkles] = React.useState(() => {
    return range(3).map(() => generateSparkle(color))
  })
  const prefersReducedMotion = usePrefersReducedMotion()
  useRandomInterval(
    () => {
      const sparkle = generateSparkle(color)
      const now = Date.now()
      const nextSparkles = sparkles.filter((sp) => {
        const delta = now - sp.createdAt
        return delta < 750
      })
      nextSparkles.push(sparkle)
      setSparkles(nextSparkles)
    },
    prefersReducedMotion ? 0 : 50,
    prefersReducedMotion ? 0 : 450
  )
  return (
    <div className="relative inline-block" {...delegated}>
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <div className="relative z-10 font-black">{children}</div>
    </div>
  )
}

const Sparkle = ({
  size,
  color,
  style,
}: {
  size: number
  color: string
  style: React.CSSProperties
}) => {
  const [theme] = useAtom(themeAtom)
  const isDark = theme === 'dark'

  const path =
    'M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z'
  return (
    <div
      className="absolute z-20 block animate-comeInOut  motion-reduce:animate-none"
      style={style}
    >
      <svg
        className="animate-spin motion-reduce:animate-none"
        width={size}
        height={size}
        viewBox="0 0 68 68"
        fill="none"
      >
        <path d={path} fill={isDark ? 'var(--fuchsia-400)' : color} />
      </svg>
    </div>
  )
}

export default Sparkles
