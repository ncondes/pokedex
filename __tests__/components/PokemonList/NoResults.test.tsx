import { NoResults } from '@/components/PokemonList/NoResults'
import { ThemeProvider } from '@/context/theme'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('NoResults', () => {
   it('renders the correct text', () => {
      const { getByText } = render(
         <ThemeProvider>
            <NoResults />
         </ThemeProvider>
      )

      const noResults = getByText('No Pokemons Found.')

      expect(noResults).toBeInTheDocument()
   })

   it('should match the snapshot', () => {
      const { container } = render(
         <ThemeProvider>
            <NoResults />
         </ThemeProvider>
      )

      expect(container.firstChild).toMatchSnapshot()
   })
})
