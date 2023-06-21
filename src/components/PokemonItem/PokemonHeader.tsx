'use client'

import { FC, useContext } from 'react'
import { capitalize } from '@/utils'
import { useFavoritePokemon } from '@/hooks'
import { usePathname } from 'next/navigation'
import styles from './PokemonItem.module.scss'
import { FavoritesContext } from '@/context/favorites'

interface Props {
   id: number
   name: string
}

export const PokemonHeader: FC<Props> = ({ id, name }) => {
   const { isFavorite, isLoading, handleToggle } = useFavoritePokemon(id)
   const { handleRemoveFromFavorites } = useContext(FavoritesContext)
   const pathname = usePathname()

   const handleClick = () => {
      pathname === '/favorites' ? handleRemoveFromFavorites(id) : handleToggle()
   }

   return (
      <div className={styles.pokemon_header}>
         <h2>{capitalize(name)}</h2>
         <button onClick={handleClick} disabled={isLoading}>
            {isLoading ? (
               <i className="fa-solid fa-spinner fa-spin"></i>
            ) : (
               <i
                  className={`${
                     isFavorite ? 'fa-solid' : 'fa-regular'
                  } fa-heart fa-xl`}
               ></i>
            )}
         </button>
      </div>
   )
}
