'use client'

import { SearchBox } from '@/components/SearchBox'
import { Select } from '@/components/Select'
import { Pokemon } from '@/interfaces'
import { FC, useContext } from 'react'
import { useFilteredPokemons } from '@/hooks'
import { PokemonList } from '@/components/PokemonList'
import { ThemeContext } from '@/context/theme'
import styles from './HomeView.module.scss'

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

export const HomeView: FC<Props> = ({ data }) => {
   const { pokemons, handleSearch, handleFilter, handleSort } =
      useFilteredPokemons(data)

   const { useTheme } = useContext(ThemeContext)

   return (
      <>
         <p className={`${styles.introduction} ${useTheme('font')}`}>
            Discover and explore a vast collection of diverse and fascinating
            Pokemon creatures.{' '}
            <span className={styles.introduction_extended}>
               Easily search for your favorite Pokemon, learn about their unique
               abilities, and uncover their captivating stories. Start your
               adventure now and delve into the magical world of Pokemon!
            </span>
         </p>
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
