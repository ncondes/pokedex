import { renderHook, act } from '@testing-library/react'
import { useFilteredPokemons } from '@/hooks/useFilteredPokemons'
import { Pokemon } from '@/interfaces'

const mockPokemons = [
   { name: 'Bulbasaur', types: [{ type: { name: 'Grass' } }] },
   { name: 'Charizard', types: [{ type: { name: 'Fire' } }] },
   { name: 'Pikachu', types: [{ type: { name: 'Electric' } }] },
   { name: 'Raichu', types: [{ type: { name: 'Electric' } }] },
   { name: 'Squirtle', types: [{ type: { name: 'Water' } }] },
] as Pokemon[]

global.structuredClone = (val) => JSON.parse(JSON.stringify(val))

describe('useFilteredPokemons', () => {
   afterEach(() => {
      jest.clearAllMocks()
   })

   it('should filter and sort the pokemons correctly', () => {
      const { result } = renderHook(() => useFilteredPokemons(mockPokemons))

      expect(result.current.pokemons).toEqual(mockPokemons) // Initially, no filter or sort applied

      act(() => {
         result.current.handleFilter('electric') // Apply filter
      })

      expect(result.current.pokemons).toEqual([
         { name: 'Pikachu', types: [{ type: { name: 'Electric' } }] },
         { name: 'Raichu', types: [{ type: { name: 'Electric' } }] },
      ])

      act(() => {
         result.current.handleSort('descending') // Apply sort
      })

      expect(result.current.pokemons).toEqual([
         { name: 'Raichu', types: [{ type: { name: 'Electric' } }] },
         { name: 'Pikachu', types: [{ type: { name: 'Electric' } }] },
      ])

      act(() => {
         result.current.handleSearch('Squirtle') // Apply search
      })

      expect(result.current.pokemons).toEqual([]) // No matching search result

      act(() => {
         result.current.handleFilter('all') // Apply filter
         result.current.handleSearch('cha') // Apply search
      })

      expect(result.current.pokemons).toEqual([
         { name: 'Charizard', types: [{ type: { name: 'Fire' } }] },
      ])
   })
})
