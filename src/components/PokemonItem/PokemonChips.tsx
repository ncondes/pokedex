import { Type } from '@/interfaces'
import { FC } from 'react'
import { capitalize } from '@/utils'
import styles from './PokemonItem.module.scss'

interface Props {
   types: Type[]
}

export const PokemonChips: FC<Props> = ({ types }) => {
   return (
      <div className={styles.pokemon_chips}>
         {types.map(({ type }) => (
            <div key={type.name} className={styles.pokemon_chip}>
               {capitalize(type.name)}
            </div>
         ))}
      </div>
   )
}
