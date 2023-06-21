'use client'

import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { ThemeContext } from './ThemeContext'
import { getLocalTheme, setLocalTheme } from '@/utils'

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
   const [theme, setTheme] = useState<'light' | 'dark'>('light')

   const toggleTheme = () => {
      const t = theme === 'light' ? 'dark' : 'light'
      setTheme(t)
      setLocalTheme(t)
   }

   const useTheme = (className: string): string => `${theme}-${className}`

   useEffect(() => {
      const initialTheme = getLocalTheme() as 'light' | 'dark'
      setTheme(initialTheme)
   }, [])

   return (
      <ThemeContext.Provider value={{ theme, toggleTheme, useTheme }}>
         {children}
      </ThemeContext.Provider>
   )
}
