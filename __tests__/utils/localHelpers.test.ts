import {
   toggleFavorite,
   getFavorites,
   setFavorites,
   existsInFavorites,
   getLocalTheme,
   setLocalTheme,
} from '@/utils/localHelpers'

describe('toggleFavorite', () => {
   it('should add the id to favorites if it does not exist', () => {
      const initialFavorites = [1, 2, 3]
      const id = 4

      setFavorites(initialFavorites)
      toggleFavorite(id)
      const updatedFavorites = getFavorites()

      expect(updatedFavorites).toEqual([...initialFavorites, id])
   })

   it('should remove the id from favorites if it exists', () => {
      const initialFavorites = [1, 2, 3]
      const id = 2

      setFavorites(initialFavorites)
      toggleFavorite(id)
      const updatedFavorites = getFavorites()

      expect(updatedFavorites).toEqual([1, 3])
   })
})

describe('getFavorites', () => {
   it('should return an empty array if there are no favorites', () => {
      localStorage.removeItem('pokemon-favorites')
      const favorites = getFavorites()

      expect(favorites).toEqual([])
   })

   it('should return an array of favorites if they exist', () => {
      const initialFavorites = [1, 2, 3]
      setFavorites(initialFavorites)
      const favorites = getFavorites()

      expect(favorites).toEqual(initialFavorites)
   })
})

describe('setFavorites', () => {
   it('should set the favorites in local storage', () => {
      const favorites = [1, 2, 3]
      setFavorites(favorites)
      const storedFavorites = JSON.parse(
         localStorage.getItem('pokemon-favorites') || '[]'
      )

      expect(storedFavorites).toEqual(favorites)
   })
})

describe('existsInFavorites', () => {
   it('should return true if the id exists in favorites', () => {
      const favorites = [1, 2, 3]
      setFavorites(favorites)
      const id = 2
      const exists = existsInFavorites(id)

      expect(exists).toBe(true)
   })

   it('should return false if the id does not exist in favorites', () => {
      const favorites = [1, 2, 3]
      setFavorites(favorites)
      const id = 4
      const exists = existsInFavorites(id)

      expect(exists).toBe(false)
   })
})

describe('getLocalTheme', () => {
   it('should return "light" if theme is not set in local storage', () => {
      localStorage.removeItem('pokemon-theme')
      const theme = getLocalTheme()

      expect(theme).toBe('light')
   })

   it('should return the theme set in local storage', () => {
      const theme = 'dark'
      localStorage.setItem('pokemon-theme', theme)
      const storedTheme = getLocalTheme()

      expect(storedTheme).toBe(theme)
   })
})

describe('setLocalTheme', () => {
   it('should set the theme in local storage', () => {
      const theme = 'dark'
      setLocalTheme(theme)
      const storedTheme = localStorage.getItem('pokemon-theme')

      expect(storedTheme).toBe(theme)
   })
})
