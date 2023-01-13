import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const browser = typeof window !== 'undefined'

export const stepAtom = atom(1)

export const sideBarAtom = atom(false)

export const themeAtom = atomWithStorage(
  'theme',
  browser && matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
)
