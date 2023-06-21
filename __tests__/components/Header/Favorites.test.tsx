import { Favorites } from '@/components/Header/Favorites'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

jest.mock('next/navigation', () => ({
   usePathname: () => '/favorites',
}))

describe('Favorites', () => {
   it('renders the favorite link', () => {
      const { container } = render(<Favorites />)

      const link = container.querySelector('a')

      expect(link).toHaveAttribute('href', '/favorites')
   })

   it('should render a solid heart icon when on the favorites page', () => {
      const { container } = render(<Favorites />)

      const icon = container.querySelector('i')

      expect(icon).toHaveClass('fa-solid fa-heart fa-lg')
   })

   it('should match the snapshot', () => {
      const { container } = render(<Favorites />)

      expect(container).toMatchSnapshot()
   })
})
