import React from 'react'

const QUERY = '(prefers-reduced-motion: no-preference)'

export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState<
    boolean | null
  >(null)
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setPrefersReducedMotion(!window.matchMedia(QUERY).matches)
    }
    const mediaQueryList = window.matchMedia(QUERY)
    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(!event.matches)
    }
    mediaQueryList.addEventListener('change', listener)
    return () => {
      mediaQueryList.removeEventListener('change', listener)
    }
  }, [])
  return prefersReducedMotion
}
