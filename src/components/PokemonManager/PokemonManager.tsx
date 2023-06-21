'use client'

import { SearchBox } from '@/components/SearchBox'
import { Select } from '@/components/Select'
import { Pokemon } from '@/interfaces'
import { FC, useContext } from 'react'
import { useFilteredPokemons } from '@/hooks'
import { PokemonList } from '@/components/PokemonList'
import { ThemeContext } from '@/context/theme'
import { Introduction } from '../Introduction'
import styles from './PokemonManager.module.scss'

interface Props {
   data: Pokemon[]
}

const pokemonTypes = [
   'all',
   'bug',
   'dark',
   'dragon',
   'electric',
   'fairy',
   'fighting',
   'fire',
   'flying',
   'ghost',
   'grass',
   'ground',
   'ice',
   'normal',
   'poison',
   'psychic',
   'rock',
   'steel',
   'water',
]

const sortOptions = ['ascending', 'descending']

export const PokemonManager: FC<Props> = ({ data }) => {
   const { pokemons, handleSearch, handleFilter, handleSort } =
      useFilteredPokemons(data)

   const { useTheme } = useContext(ThemeContext)

   return (
      <>
         <Introduction />
         <div className={styles.tools}>
            <SearchBox callback={handleSearch} />
            <Select
               label="filter"
               icon="fa-filter"
               options={pokemonTypes}
               onChange={handleFilter}
            />
            <Select
               label="sort"
               icon="fa-sort"
               options={sortOptions}
               onChange={handleSort}
            />
         </div>
         <PokemonList pokemons={pokemons} />
      </>
   )
}
