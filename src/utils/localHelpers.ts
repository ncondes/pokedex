export const toggleFavorite = (id: number) => {
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
   return JSON.parse(localStorage.getItem('pokemon-favorites') || '[]')
}

export const setFavorites = (favorites: number[]) => {
   localStorage.setItem('pokemon-favorites', JSON.stringify(favorites))
}

export const existsInFavorites = (id: number): boolean => {
   const favorites = getFavorites()
   return favorites.includes(id)
}

export const getLocalTheme = () => {
   return localStorage.getItem('pokemon-theme') || 'light'
}

export const setLocalTheme = (theme: string) => {
   localStorage.setItem('pokemon-theme', theme)
}
