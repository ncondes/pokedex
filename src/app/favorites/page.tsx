import { FavoritePokemons } from '@/components/FavoritePokemons'
import { FavoritesProvider } from '@/context/favorites'

export default function Favorites() {
   return (
      <FavoritesProvider>
         <FavoritePokemons />
      </FavoritesProvider>
   )
}
