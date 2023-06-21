'use client'

import { FC, PropsWithChildren, useContext } from 'react'
import { Header } from '../Header'
import { ThemeContext } from '@/context/theme'
import styles from './Wrapper.module.scss'

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
   const { useTheme } = useContext(ThemeContext)

   return (
      <main className={useTheme('body-bg')}>
         <Header />
         <div className={styles.wrapper}>{children}</div>
      </main>
   )
}
