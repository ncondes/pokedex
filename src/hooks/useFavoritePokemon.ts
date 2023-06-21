import { useEffect, useState } from 'react'
import { toggleFavorite, existsInFavorites } from '../utils'

export const useFavoritePokemon = (id: number) => {
   const [isFavorite, setIsFavorite] = useState(false)
   const [isLoading, setIsLoading] = useState(true)

   const handleToggle = () => {
      toggleFavorite(id)
      setIsFavorite(!isFavorite)
   }

   useEffect(() => {
      const result = existsInFavorites(id)
      setIsFavorite(result)
      setIsLoading(false)
   }, [id])

   return {
      isFavorite,
      isLoading,
      handleToggle,
   }
}
