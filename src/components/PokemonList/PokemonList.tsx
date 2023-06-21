import { FC } from 'react'
import { Pokemon } from '@/interfaces'
import { NoResults } from './NoResults'
import styles from './PokemonList.module.scss'

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
                  <p key={pokemon.id}>{pokemon.name}</p>
               ))}
            </div>
         )}
      </>
   )
}
