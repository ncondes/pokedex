import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { usePathname } from 'next/navigation'
import { ThemeProvider } from '@/context/theme'
import { Introduction } from '@/components/Introduction'

jest.mock('next/navigation', () => ({
   usePathname: jest.fn(),
}))

describe('Introduction', () => {
   it('renders the introduction text when the pathname is root', () => {
      ;(usePathname as jest.Mock).mockReturnValue('/')

      const { getByText } = render(
         <ThemeProvider>
            <Introduction />
         </ThemeProvider>
      )

      expect(
         getByText(
            'Discover and explore a vast collection of diverse and fascinating Pokemon creatures.'
         )
      ).toBeInTheDocument()
   })

   it('renders the introduction text when the pathname is not root', () => {
      ;(usePathname as jest.Mock).mockReturnValue('/favorites')

      const { getByText } = render(
         <ThemeProvider>
            <Introduction />
         </ThemeProvider>
      )

      expect(
         getByText(
            'Welcome to your Favorite Pokemon Section! Discover, admire, and celebrate the Pokemon that hold a special place in your heart.'
         )
      ).toBeInTheDocument()
   })

   it('should match the snapshot', () => {
      ;(usePathname as jest.Mock).mockReturnValue('/')

      const { container } = render(
         <ThemeProvider>
            <Introduction />
         </ThemeProvider>
      )

      expect(container).toMatchSnapshot()
   })
})
