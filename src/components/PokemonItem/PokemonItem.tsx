import { Pokemon } from '@/interfaces'
import { FC } from 'react'
import { PokemonHeader } from './PokemonHeader'
import { PokemonChips } from './PokemonChips'
import { PokemonImage } from './PokemonImage'
import styles from './PokemonItem.module.scss'
import { PokemonStats } from './PokemonStats'

interface Props {
   pokemon: Pokemon
}

export const PokemonItem: FC<Props> = ({ pokemon }) => {
   const type = `pokemon-type-${pokemon.types?.[0].type.name || 'default'}`

   return (
      <article className={`${styles.pokemon_card} ${type}`}>
         {/* pokemon image */}
         <section>
            <PokemonHeader id={pokemon.id} name={pokemon.name} />
            <PokemonChips types={pokemon.types} />
            <PokemonImage sprites={pokemon.sprites} />
         </section>
         {/* pokemon description */}
         <PokemonStats stats={pokemon.stats} />
      </article>
   )
}
