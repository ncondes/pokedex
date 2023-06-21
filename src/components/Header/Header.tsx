import { ThemeButton } from './ThemeButton'
import { Favorites } from './Favorites'
import styles from './Header.module.scss'
import { Home } from './Home'

export const Header = () => {
   return (
      <header className={styles.header}>
         <ul>
            <li>
               <Home />
            </li>
            <div className={styles.theme_and_favorites_links}>
               <li>
                  <ThemeButton />
               </li>
               <li>
                  <Favorites />
               </li>
            </div>
         </ul>
      </header>
   )
}
