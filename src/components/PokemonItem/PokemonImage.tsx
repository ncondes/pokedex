import Image from 'next/image'
import { Sprites } from '@/interfaces'
import { FC } from 'react'
import styles from './PokemonItem.module.scss'

interface Props {
   sprites: Sprites
}

export const PokemonImage: FC<Props> = ({ sprites }) => {
   return (
      <div className={styles.pokemon_bg_image_container}>
         {/* background icons */}
         <div className={styles.pokeball_icon}>
            <Image
               src={'/images/pokeball-icon.png'}
               alt="pokeball icon"
               width={150}
               height={150}
            />
         </div>
         <div className={styles.points_icon}>
            <Image
               src={'/images/points-icon.png'}
               alt="points icon"
               width={50}
               height={50}
            />
         </div>
         <div className={styles.lines_icon}>
            <Image
               src={'/images/lines-icon.png'}
               alt="lines icon"
               width={50}
               height={50}
            />
         </div>
         {/* pokemon image */}
         <div className={styles.pokemon_image}>
            <Image
               src={sprites.other?.home?.front_default || sprites.front_default}
               alt="pokemon image"
               width={200}
               height={200}
               priority
            />
         </div>
      </div>
   )
}
