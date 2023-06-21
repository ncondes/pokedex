import { Header } from '@/components/Header'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Header', () => {
   it('should render the header', () => {
      const { container } = render(<Header />)

      const header = container.querySelector('header')
      const listItems = container.querySelectorAll('li')

      expect(header).toBeInTheDocument()
      expect(listItems.length).toBe(3)
   })

   it('should match the snapshot', () => {
      const { container } = render(<Header />)

      expect(container).toMatchSnapshot()
   })
})
