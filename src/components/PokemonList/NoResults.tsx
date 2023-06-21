'use client'
import { useContext } from 'react'
import styles from './PokemonList.module.scss'
import { ThemeContext } from '@/context/theme'

export const NoResults = () => {
   const { useTheme } = useContext(ThemeContext)

   return (
      <p className={`${styles.no_results} ${useTheme('font')}`}>
         No Pokemons Found.
      </p>
   )
}
