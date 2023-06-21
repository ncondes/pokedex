'use client'

import { FC, PropsWithChildren, useState } from 'react'
import { ThemeContext } from './ThemeContext'
import { getLocalTheme, setLocalTheme } from '@/utils'

const INITIAL_THEME = getLocalTheme() as 'light' | 'dark'

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
   const [theme, setTheme] = useState<'light' | 'dark'>(INITIAL_THEME)

   const toggleTheme = () => {
      const t = theme === 'light' ? 'dark' : 'light'
      setTheme(t)
      setLocalTheme(t)
   }

   const useTheme = (className: string): string => `${theme}-${className}`

   return (
      <ThemeContext.Provider value={{ theme, toggleTheme, useTheme }}>
         {children}
      </ThemeContext.Provider>
   )
}
