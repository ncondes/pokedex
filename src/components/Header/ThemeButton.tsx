'use client'

import { ThemeContext } from '@/context/theme'
import { FC, useContext } from 'react'

export const ThemeButton: FC = () => {
   const { theme, toggleTheme } = useContext(ThemeContext)

   const handleClick = () => toggleTheme()

   return (
      <button onClick={handleClick}>
         <i
            className={`fa-regular ${
               theme === 'light' ? 'fa-moon' : 'fa-sun'
            } fa-xl`}
         ></i>
      </button>
   )
}
