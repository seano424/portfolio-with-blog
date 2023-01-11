import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const stepAtom = atom(1)
export const darkModeAtom = atomWithStorage('darkMode', false)
