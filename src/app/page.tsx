import { PokemonList } from '@/components/PokemonList'
import { getPokemons } from '@/services'
import { sortArrayOfObjectsByName } from '@/utils'
import { HomeView } from '@/views/Home'

export default async function Home() {
   // as this is a server side rendered app, we can fetch data here
   const pokemons = await getPokemons()
   const sortedPokemons = sortArrayOfObjectsByName(pokemons)

   return (
      <main>
         <HomeView data={pokemons} />
      </main>
   )
}
