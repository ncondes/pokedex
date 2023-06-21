import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Home } from '@/components/Header/Home'

describe('Home', () => {
   it('renders the correct elements with the proper props', () => {
      const { getByText, getByAltText, container } = render(<Home />)
      const link = container.querySelector('a')

      expect(getByText('Pokedex')).toBeInTheDocument()
      expect(getByAltText('pokeball icon')).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '/')
   })

   it('should match the snapshot', () => {
      const { container } = render(<Home />)

      expect(container).toMatchSnapshot()
   })
})
