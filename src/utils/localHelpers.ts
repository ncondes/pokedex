export const toggleFavorite = (id: number) => {
   if (typeof window === 'undefined') return

   const favorites = getFavorites()
   const exists = favorites.includes(id)

   if (exists) {
      const updatedFavorites = favorites.filter((favorite) => favorite !== id)
      setFavorites(updatedFavorites)
   } else {
      const updatedFavorites = [...favorites, id]
      setFavorites(updatedFavorites)
   }
}

export const getFavorites = (): number[] => {
   if (typeof window === 'undefined') return []

   return JSON.parse(localStorage.getItem('pokemon-favorites') || '[]')
}

export const setFavorites = (favorites: number[]) => {
   if (typeof window === 'undefined') return

   localStorage.setItem('pokemon-favorites', JSON.stringify(favorites))
}

export const existsInFavorites = (id: number): boolean => {
   if (typeof window === 'undefined') return false

   const favorites = getFavorites()
   return favorites.includes(id)
}

export const getLocalTheme = () => {
   if (typeof window === 'undefined') return 'light'

   return localStorage.getItem('pokemon-theme') || 'light'
}

export const setLocalTheme = (theme: string) => {
   if (typeof window === 'undefined') return

   localStorage.setItem('pokemon-theme', theme)
}
