'use client'

import { Pokemon } from '@/interfaces'
import { createContext } from 'react'

interface Props {
   pokemons: Pokemon[]
   isLoading: boolean
   handleRemoveFromFavorites: (id: number) => void
}

export const FavoritesContext = createContext({} as Props)
