import { Data, Pokemon, Result } from '@/interfaces'

export const getPokemons = async (): Promise<Pokemon[]> => {
   try {
      const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
      const resp = await fetch(url)
      // handle error in case of bad response
      if (!resp.ok) return []

      const data: Data = await resp.json()
      // map over the results array and fetch each pokemon
      const promises: Promise<Pokemon>[] = data.results.map(
         async (pokemon: Result) => {
            const resp = await fetch(pokemon.url)
            const data = await resp.json()
            return data
         }
      )

      const pokemons = await Promise.all(promises)

      return pokemons
   } catch (error) {
      // handle error in case of network failure
      return []
   }
}
