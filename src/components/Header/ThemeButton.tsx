'use client'

import { FC } from 'react'

export const ThemeButton: FC = () => {
   const theme = 'light'
   const handleClick = () => {
      console.log('toggle theme')
   }

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
