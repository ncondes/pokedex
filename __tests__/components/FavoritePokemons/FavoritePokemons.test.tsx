import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { FavoritesContext } from '@/context/favorites'
import { FavoritePokemons } from '@/components/FavoritePokemons'
import { Pokemon, Stat } from '@/interfaces'
import { ThemeProvider } from '@/context/theme'

global.structuredClone = (val) => JSON.parse(JSON.stringify(val))

describe('FavoritePokemons', () => {
   it('renders PokemonManager when favorites are not loading', () => {
      const pokemons = [
         {
            id: 1,
            name: 'Pikachu',
            types: [{ type: { name: 'electric' } }],
            sprites: {
               front_default:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
            },
            stats: [] as Stat[],
         },
         {
            id: 2,
            name: 'Charizard',
            types: [{ type: { name: 'fire' } }],
            sprites: {
               front_default:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
            },
            stats: [] as Stat[],
         },
      ] as Pokemon[]

      const isLoading = false
      const handleRemoveFromFavorites = jest.fn()

      const { getByText } = render(
         <ThemeProvider>
            <FavoritesContext.Provider
               value={{ pokemons, isLoading, handleRemoveFromFavorites }}
            >
               <FavoritePokemons />
            </FavoritesContext.Provider>
         </ThemeProvider>
      )

      expect(getByText('Pikachu')).toBeInTheDocument()
      expect(getByText('Charizard')).toBeInTheDocument()
   })

   it('does not render PokemonManager when favorites are loading', () => {
      const pokemons = [] as Pokemon[]
      const isLoading = true
      const handleRemoveFromFavorites = jest.fn()

      const { queryByText } = render(
         <FavoritesContext.Provider
            value={{ pokemons, isLoading, handleRemoveFromFavorites }}
         >
            <FavoritePokemons />
         </FavoritesContext.Provider>
      )

      expect(queryByText('Pikachu')).not.toBeInTheDocument()
      expect(queryByText('Charizard')).not.toBeInTheDocument()
   })

   it('should match snapshot', () => {
      const pokemons = [
         {
            id: 1,
            name: 'Pikachu',
            types: [{ type: { name: 'electric' } }],
            sprites: {
               front_default:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
            },
            stats: [] as Stat[],
         },
         {
            id: 2,
            name: 'Charizard',
            types: [{ type: { name: 'fire' } }],
            sprites: {
               front_default:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
            },
            stats: [] as Stat[],
         },
      ] as Pokemon[]

      const isLoading = false
      const handleRemoveFromFavorites = jest.fn()

      const { container } = render(
         <ThemeProvider>
            <FavoritesContext.Provider
               value={{ pokemons, isLoading, handleRemoveFromFavorites }}
            >
               <FavoritePokemons />
            </FavoritesContext.Provider>
         </ThemeProvider>
      )

      expect(container).toMatchSnapshot()
   })
})
