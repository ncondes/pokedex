'use client'

import { FC, useContext } from 'react'
import { ThemeContext } from '@/context/theme'
import { Stat } from '@/interfaces'
import styles from './PokemonItem.module.scss'
import { PokemonStat } from './PokemonStat'

interface Props {
   stats: Stat[]
}

export const PokemonStats: FC<Props> = ({ stats }) => {
   const { useTheme } = useContext(ThemeContext)

   return (
      <div className={`${styles.pokemon_stats} ${useTheme('card-bg')}`}>
         <p className={useTheme('font')}>Base Stats</p>
         <div className={styles.base_stats}>
            {stats.map(({ stat, base_stat }) => (
               <PokemonStat
                  key={stat.name}
                  stat={stat.name}
                  value={base_stat}
               />
            ))}
         </div>
      </div>
   )
}
