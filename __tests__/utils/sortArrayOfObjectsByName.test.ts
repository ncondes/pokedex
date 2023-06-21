import { sortArrayOfObjectsByName } from '@/utils/sortArrayOfObjectsByName'

global.structuredClone = (val) => JSON.parse(JSON.stringify(val))

describe('sortArrayOfObjectsByName', () => {
   it('should sort the array of objects by name in ascending order', () => {
      const array = [
         { name: 'Charmander' },
         { name: 'Squirtle' },
         { name: 'Bulbasaur' },
      ]
      const expectedOutput = [
         { name: 'Bulbasaur' },
         { name: 'Charmander' },
         { name: 'Squirtle' },
      ]

      const result = sortArrayOfObjectsByName(array, 'ascending')

      expect(result).toEqual(expectedOutput)
   })

   it('should sort the array of objects by name in descending order', () => {
      const array = [
         { name: 'Charmander' },
         { name: 'Squirtle' },
         { name: 'Bulbasaur' },
      ]
      const order = 'descending'
      const expectedOutput = [
         { name: 'Squirtle' },
         { name: 'Charmander' },
         { name: 'Bulbasaur' },
      ]

      const result = sortArrayOfObjectsByName(array, order)

      expect(result).toEqual(expectedOutput)
   })
})
