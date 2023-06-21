import { getFavoritePokemons } from '@/services/getFavoritePokemons'

describe('getFavoritePokemons', () => {
   it('should return an array of favorite pokemons when given a valid array of ids', async () => {
      const mockResponse1 = { id: 1, name: 'bulbasaur' }
      const mockResponse2 = { id: 2, name: 'charmander' }
      const mockResponse3 = { id: 3, name: 'squirtle' }
      const mockResponses = [mockResponse1, mockResponse2, mockResponse3]

      const mockFetch = jest.fn((url) => {
         const id = url.split('/').pop()
         const mockResponse = mockResponses.find(
            (response) => response.id === parseInt(id)
         )

         return Promise.resolve({
            json: () => Promise.resolve(mockResponse),
         })
      })

      global.fetch = mockFetch as any

      const ids = [1, 2, 3]
      const pokemons = await getFavoritePokemons(ids)

      expect(pokemons).toEqual(mockResponses)
      expect(mockFetch).toHaveBeenCalledTimes(3)
      expect(mockFetch).toHaveBeenCalledWith(
         'https://pokeapi.co/api/v2/pokemon/1'
      )
      expect(mockFetch).toHaveBeenCalledWith(
         'https://pokeapi.co/api/v2/pokemon/2'
      )
      expect(mockFetch).toHaveBeenCalledWith(
         'https://pokeapi.co/api/v2/pokemon/3'
      )
   })

   it('should return an empty array when there are no favorite pokemons', async () => {
      const mockFetch = jest.fn(() =>
         Promise.reject(new Error('Network error'))
      )

      global.fetch = mockFetch

      const ids = [1, 2, 3]
      const pokemons = await getFavoritePokemons(ids)

      expect(pokemons).toEqual([])
      expect(mockFetch).toHaveBeenCalledTimes(3)
      expect(mockFetch).toHaveBeenCalledWith(
         'https://pokeapi.co/api/v2/pokemon/1'
      )
      expect(mockFetch).toHaveBeenCalledWith(
         'https://pokeapi.co/api/v2/pokemon/2'
      )
      expect(mockFetch).toHaveBeenCalledWith(
         'https://pokeapi.co/api/v2/pokemon/3'
      )
   })
})
