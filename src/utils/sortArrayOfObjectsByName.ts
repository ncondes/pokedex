export const sortArrayOfObjectsByName = (
   array: any[],
   order: 'ascending' | 'descending' = 'ascending'
) => {
   // clone the array to avoid mutating the original array
   const sortedArray = structuredClone(array)

   sortedArray.sort((a, b) => {
      const nameA = a.name.toLowerCase()
      const nameB = b.name.toLowerCase()

      return order === 'ascending'
         ? nameA.localeCompare(nameB)
         : nameB.localeCompare(nameA)
   })

   return sortedArray
}
