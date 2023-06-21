'use client'

import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { FavoritesContext } from './FavoritesContext'
import { getFavorites, toggleFavorite } from '@/utils'
import { Pokemon } from '@/interfaces'
import { getFavoritePokemons } from '@/services'

export const FavoritesProvider: FC<PropsWithChildren> = ({ children }) => {
   const [pokemons, setPokemons] = useState<Pokemon[]>([])
   const [isLoading, setIsLoading] = useState(true)

   const handleRemoveFromFavorites = (id: number) => {
      toggleFavorite(id)
      setPokemons(pokemons.filter((pokemon) => pokemon.id !== id))
   }

   useEffect(() => {
      const ids = getFavorites()

      getFavoritePokemons(ids).then((data) => {
         setPokemons(data)
         setIsLoading(false)
      })
   }, [])

   return (
      <FavoritesContext.Provider
         value={{ pokemons, isLoading, handleRemoveFromFavorites }}
      >
         {children}
      </FavoritesContext.Provider>
   )
}
