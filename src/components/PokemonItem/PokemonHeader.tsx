'use client'

import { FC } from 'react'
import { capitalize } from '@/utils'
import styles from './PokemonItem.module.scss'

interface Props {
   id: number
   name: string
}

export const PokemonHeader: FC<Props> = ({ id, name }) => {
   const isFavorite = true
   const isLoading = false

   const handleFavoriteButton = () => {
      // TODO: handleFavoriteButton
      console.log('Favorite')
   }

   return (
      <div className={styles.pokemon_header}>
         <h2>{capitalize(name)}</h2>
         <button onClick={handleFavoriteButton} disabled={isLoading}>
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
