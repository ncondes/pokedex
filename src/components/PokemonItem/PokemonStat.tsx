import { FC, useContext } from 'react'
import { capitalize } from '@/utils'
import { ThemeContext } from '@/context/theme'
import styles from './PokemonItem.module.scss'

interface Props {
   stat: string
   value: number
}

export const PokemonStat: FC<Props> = ({ stat, value }) => {
   const { useTheme } = useContext(ThemeContext)

   let background: string = 'high'

   if (value < 30) {
      background = '#d85248'
   } else if (value >= 30 && value <= 50) {
      background = '#dfd158'
   } else if (value > 50) {
      background = '#88c45f'
   }

   const formatStatName = (name: string) => {
      if (name === 'special-attack') return 'Sp. Atk'
      if (name === 'special-defense') return 'Sp. Def'
      return capitalize(name)
   }

   return (
      <div className={`${styles.pokemon_stat} ${useTheme('font')}`}>
         <span>{formatStatName(stat)}</span>
         <b>{value}</b>
         {/* stat bar */}
         <div className={styles.pokemon_statbar_container}>
            <div className={styles.pokemon_statbar_bar}>
               <div
                  style={{ width: `${Math.min(value, 100)}%`, background }}
               ></div>
            </div>
         </div>
      </div>
   )
}
