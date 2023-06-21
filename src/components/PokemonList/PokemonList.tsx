import { FC } from 'react'
import { Pokemon } from '@/interfaces'
import { NoResults } from './NoResults'
import styles from './PokemonList.module.scss'
import { PokemonItem } from '../PokemonItem'

interface Props {
   pokemons: Pokemon[]
}

export const PokemonList: FC<Props> = ({ pokemons }) => {
   return (
      <>
         {pokemons.length === 0 ? (
            <NoResults />
         ) : (
            <div className={styles.pokemon_grid}>
               {pokemons.map((pokemon) => (
                  <PokemonItem key={pokemon.id} pokemon={pokemon} />
               ))}
            </div>
         )}
      </>
   )
}
