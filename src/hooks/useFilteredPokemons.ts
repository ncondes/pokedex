import { sortArrayOfObjectsByName } from '@/utils'
import { useState, useMemo } from 'react'
import { Pokemon } from '@/interfaces'

export const useFilteredPokemons = (data: Pokemon[]) => {
   const [activeFilter, setActiveFilter] = useState<string>('all')
   const [query, setQuery] = useState<string>('')
   const [order, setOrder] = useState<'ascending' | 'descending'>('ascending')

   const filteredPokemons = useMemo(() => {
      let result: Pokemon[] = data

      // perform filter if there is an active filter
      if (activeFilter !== 'all') {
         result = result.filter((pokemon) => {
            const isMatchingType = pokemon.types.some(
               (type) =>
                  type.type.name.toLowerCase() === activeFilter.toLowerCase()
            )

            return isMatchingType
         })
      }

      // perform search if there is a query
      if (query !== '') {
         result = result.filter((pokemon) => {
            const isMatchingName = pokemon.name
               .toLowerCase()
               .includes(query.toLowerCase())

            return isMatchingName
         })
      }

      return sortArrayOfObjectsByName(result, order)
   }, [data, activeFilter, query, order])

   const handleSearch = (option: string) => {
      setQuery(option)
   }

   const handleFilter = (option: string) => {
      setActiveFilter(option)
   }

   const handleSort = (option: 'ascending' | 'descending') => {
      setOrder(option)
   }

   return {
      pokemons: filteredPokemons,
      handleSearch,
      handleFilter,
      handleSort,
   }
}
