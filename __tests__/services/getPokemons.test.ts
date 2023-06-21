import { getPokemons } from '@/services/getPokemons'

describe('getPokemons', () => {
   it('should return an array of pokemons when API request is successful', async () => {
      const mockResponse = {
         results: [
            { url: 'https://pokeapi.co/api/v2/pokemon/1' },
            { url: 'https://pokeapi.co/api/v2/pokemon/2' },
            { url: 'https://pokeapi.co/api/v2/pokemon/3' },
         ],
      }

      const mockFetch = jest.fn((url) => {
         if (url === 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0') {
            return Promise.resolve({
               ok: true,
               json: () => Promise.resolve(mockResponse),
            })
         }
         const id = url.split('/').pop()
         return Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ id, name: `pokemon${id}` }),
         })
      })

      global.fetch = mockFetch as any

      const pokemons = await getPokemons()

      expect(pokemons).toHaveLength(3)
      expect(pokemons[0]).toEqual({ id: '1', name: 'pokemon1' })
      expect(pokemons[1]).toEqual({ id: '2', name: 'pokemon2' })
      expect(pokemons[2]).toEqual({ id: '3', name: 'pokemon3' })
      expect(mockFetch).toHaveBeenCalledTimes(4)
      expect(mockFetch).toHaveBeenCalledWith(
         'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
      )
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

   it('should return an empty array when API request fails', async () => {
      const mockFetch = jest.fn(() => Promise.resolve({ ok: false }))

      ;(global as any).fetch = mockFetch

      const pokemons = await getPokemons()

      expect(pokemons).toEqual([])
      expect(mockFetch).toHaveBeenCalledTimes(1)
      expect(mockFetch).toHaveBeenCalledWith(
         'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
      )
   })

   it('should return an empty array when there are no pokemons', async () => {
      const mockResponse = { results: [] }

      const mockFetch = jest.fn(() =>
         Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockResponse),
         })
      )

      ;(global as any).fetch = mockFetch

      const pokemons = await getPokemons()

      expect(pokemons).toEqual([])
      expect(mockFetch).toHaveBeenCalledTimes(1)
      expect(mockFetch).toHaveBeenCalledWith(
         'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
      )
   })
})
