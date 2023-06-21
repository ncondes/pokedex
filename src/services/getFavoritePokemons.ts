import { Pokemon } from '@/interfaces'

export const getFavoritePokemons = async (
   ids: number[]
): Promise<Pokemon[]> => {
   try {
      const promises: Promise<Pokemon>[] = ids.map(async (id) => {
         const url = `https://pokeapi.co/api/v2/pokemon/${id}`
         const resp = await fetch(url)
         const data = await resp.json()
         return data
      })

      const pokemons = await Promise.all(promises)

      return pokemons
   } catch (error) {
      // handle error in case of network failure
      return []
   }
}
