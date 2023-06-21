'use client'

import { useContext } from 'react'
import { FavoritesContext } from '@/context/favorites'
import { PokemonManager } from '@/components/PokemonManager'

export const FavoritePokemons = () => {
   const { pokemons, isLoading } = useContext(FavoritesContext)

   return <>{isLoading ? null : <PokemonManager data={pokemons} />}</>
}
