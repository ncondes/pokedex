'use client'

import { usePathname } from 'next/navigation'
import { ThemeContext } from '@/context/theme'
import { useContext } from 'react'
import styles from './Introduction.module.scss'

export const Introduction = () => {
   const pathname = usePathname()
   const { useTheme } = useContext(ThemeContext)
   const fontColorClassName = useTheme('font')

   return (
      <>
         {pathname === '/' ? (
            <p className={`${styles.introduction} ${fontColorClassName}`}>
               Discover and explore a vast collection of diverse and fascinating
               Pokemon creatures.{' '}
               <span className={styles.introduction_extended}>
                  Easily search for your favorite Pokemon, learn about their
                  unique abilities, and uncover their captivating stories. Start
                  your adventure now and delve into the magical world of
                  Pokemon!
               </span>
            </p>
         ) : (
            <p className={`${styles.introduction} ${fontColorClassName}`}>
               Welcome to your Favorite Pokemon Section! Discover, admire, and
               celebrate the Pokemon that hold a special place in your heart.
            </p>
         )}
      </>
   )
}
