import { capitalize } from '@/utils/capitalize'

describe('capitalize', () => {
   it('should capitalize the first letter of a string', () => {
      const input = 'hello'
      const expectedOutput = 'Hello'

      const result = capitalize(input)

      expect(result).toBe(expectedOutput)
   })

   it('should return an empty string if input is empty', () => {
      const input = ''
      const expectedOutput = ''

      const result = capitalize(input)

      expect(result).toBe(expectedOutput)
   })

   it('should handle strings with only one character', () => {
      const input = 'a'
      const expectedOutput = 'A'

      const result = capitalize(input)

      expect(result).toBe(expectedOutput)
   })

   it('should not modify an already capitalized string', () => {
      const input = 'Hello'
      const expectedOutput = 'Hello'

      const result = capitalize(input)

      expect(result).toBe(expectedOutput)
   })
})
