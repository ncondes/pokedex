import { PokemonHeader } from '@/components/PokemonItem/PokemonHeader'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

jest.mock('../../../src/hooks', () => ({
   useFavoritePokemon: () => ({
      isFavorite: false,
      isLoading: true,
      handleToggle: jest.fn(),
   }),
}))

describe('PokemonHeader', () => {
   it('should render the component correctly', () => {
      const { getByText, container } = render(
         <PokemonHeader id={1} name="pikachu" />
      )

      const title = getByText('Pikachu')
      const button = container.querySelector('button')

      expect(title).toBeInTheDocument()
      expect(button).toBeInTheDocument()
   })

   it('should disable the button when the isLoading is true', () => {
      const { container } = render(<PokemonHeader id={1} name="pikachu" />)

      const button = container.querySelector('button')

      expect(button).toBeDisabled()
   })
})
