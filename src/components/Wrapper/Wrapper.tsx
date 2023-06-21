'use client'

import { FC, PropsWithChildren, useContext } from 'react'
import { Header } from '../Header'
import { ThemeContext } from '@/context/theme'

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
   const { useTheme } = useContext(ThemeContext)

   return (
      <main className={useTheme('body-bg')}>
         <Header />
         <div>{children}</div>
      </main>
   )
}
