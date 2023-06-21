import { act, renderHook } from '@testing-library/react'
import { useFavoritePokemon } from '@/hooks/useFavoritePokemon'
import { existsInFavorites, toggleFavorite } from '@/utils'

jest.mock('../../src/utils', () => ({
   toggleFavorite: jest.fn(),
   existsInFavorites: jest.fn().mockReturnValue(true),
}))

describe('useFavoritePokemon', () => {
   afterEach(() => {
      jest.clearAllMocks()
   })

   it('should initialize with correct values after mount', () => {
      const { result } = renderHook(() => useFavoritePokemon(1))

      expect(result.current.isFavorite).toBe(true)
      expect(result.current.isLoading).toBe(false)
      expect(typeof result.current.handleToggle).toBe('function')
   })

   it('should call toggleFavorite and update isFavorite state on handleToggle', () => {
      const id = 1

      ;(existsInFavorites as jest.Mock).mockReturnValueOnce(true)

      const { result } = renderHook(() => useFavoritePokemon(id))

      expect(result.current.isFavorite).toBe(true)

      act(() => {
         result.current.handleToggle()
      })

      expect(toggleFavorite).toHaveBeenCalledWith(id)
      expect(result.current.isFavorite).toBe(false)
   })
})
