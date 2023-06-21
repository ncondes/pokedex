import { getPokemons } from '@/services'
import { PokemonManager } from '@/components/PokemonManager'

export default async function Home() {
   // as this is a server side rendered app, we can fetch data here
   const pokemons = await getPokemons()

   return <PokemonManager data={pokemons} />
}
