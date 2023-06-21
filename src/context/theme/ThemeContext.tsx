'use client'

import { createContext } from 'react'

interface Props {
   theme: 'light' | 'dark'
   toggleTheme: () => void
   useTheme: (className: string) => string
}

export const ThemeContext = createContext({} as Props)
