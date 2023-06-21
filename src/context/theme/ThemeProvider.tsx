'use client'

import { FC, PropsWithChildren, useState } from 'react'
import { ThemeContext } from './ThemeContext'

// TODO: persist theme in local storage

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
   const [theme, setTheme] = useState<'light' | 'dark'>('light')

   const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
   }

   const useTheme = (className: string): string => `${theme}-${className}`

   return (
      <ThemeContext.Provider value={{ theme, toggleTheme, useTheme }}>
         {children}
      </ThemeContext.Provider>
   )
}
