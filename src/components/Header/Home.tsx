import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './Header.module.scss'

export const Home: FC = () => {
   return (
      <Link href="/" className={styles.home_link}>
         <div>
            <Image
               src={'/images/pokeball-icon-color.png'}
               alt="pokeball icon"
               width={25}
               height={25}
            />
         </div>
         <span>Pokedex</span>
      </Link>
   )
}
