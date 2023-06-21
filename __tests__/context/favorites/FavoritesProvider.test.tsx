import { FavoritesContext, FavoritesProvider } from '@/context/favorites'
import { Pokemon, Stat } from '@/interfaces'
import { getFavoritePokemons } from '@/services'
import { getFavorites } from '@/utils'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils'

jest.mock('../../../src/utils', () => ({
   getFavorites: jest.fn(),
   toggleFavorite: jest.fn(),
}))

jest.mock('../../../src/services', () => ({
   getFavoritePokemons: jest.fn(),
}))

describe('FavoritesProvider', () => {
   afterEach(() => {
      jest.clearAllMocks()
   })

   it('fetch favorite pokemons', async () => {
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

      ;(getFavorites as jest.Mock).mockReturnValue([1, 2])
      ;(getFavoritePokemons as jest.Mock).mockResolvedValue(pokemons)

      let component

      await act(async () => {
         component = render(
            <FavoritesProvider>
               <div data-testid="child-component">Children</div>
            </FavoritesProvider>
         )
      })

      expect(getFavorites).toHaveBeenCalled()
      expect(getFavoritePokemons).toHaveBeenCalledWith([1, 2])
   })

   it('should render children correctly', () => {
      const { getByText } = render(
         <FavoritesContext.Provider
            value={{
               pokemons: [],
               isLoading: false,
               handleRemoveFromFavorites: jest.fn(),
            }}
         >
            <div data-testid="child-component">Children</div>
         </FavoritesContext.Provider>
      )

      expect(getByText('Children')).toBeInTheDocument()
   })
})
