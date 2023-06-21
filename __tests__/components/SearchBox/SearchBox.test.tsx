import { render, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '@/context/theme'
import { useDebounce } from '@/hooks'
import { SearchBox } from '@/components/SearchBox'

jest.mock('../../../src/hooks', () => ({
   useDebounce: jest.fn((value) => ({
      debouncedValue: value,
      isInDelay: false,
   })),
}))

describe('SearchBox', () => {
   const mockCallback = jest.fn()

   beforeEach(() => {
      jest.clearAllMocks()
   })

   it('renders the search box and calls the callback with the debounced value', () => {
      const { getByRole } = render(
         <ThemeProvider>
            <SearchBox callback={mockCallback} />
         </ThemeProvider>
      )

      const input = getByRole('textbox') as HTMLInputElement

      fireEvent.change(input, { target: { value: 'pikachu' } })

      expect(input.value).toBe('pikachu')
      expect(mockCallback).toHaveBeenCalledWith('pikachu')
      expect(useDebounce).toHaveBeenCalledWith('pikachu', 300)
   })

   it('clears the search box and calls the callback with an empty query', () => {
      const { getByRole } = render(
         <ThemeProvider>
            <SearchBox callback={mockCallback} />
         </ThemeProvider>
      )

      const input = getByRole('textbox') as HTMLInputElement
      const clearButton = getByRole('button')

      fireEvent.change(input, { target: { value: 'pikachu' } })
      fireEvent.click(clearButton)

      expect(input.value).toBe('')
      expect(mockCallback).toHaveBeenCalledWith('')
   })
})
