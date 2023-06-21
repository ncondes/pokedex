import { ThemeButton } from '@/components/Header/ThemeButton'
import { ThemeContext } from '@/context/theme'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('ThemeButton', () => {
   it('should render the theme button', () => {
      const { container } = render(
         <ThemeContext.Provider
            value={{
               theme: 'light',
               toggleTheme: jest.fn(),
               useTheme: jest.fn(),
            }}
         >
            <ThemeButton />
         </ThemeContext.Provider>
      )

      const button = container.querySelector('button')!
      const icon = container.querySelector('i')

      expect(button).toBeInTheDocument()
      expect(icon).toHaveClass('fa-regular fa-moon fa-xl')
   })

   it('should match the snapshot', () => {
      const { container } = render(
         <ThemeContext.Provider
            value={{
               theme: 'light',
               toggleTheme: jest.fn(),
               useTheme: jest.fn(),
            }}
         >
            <ThemeButton />
         </ThemeContext.Provider>
      )

      expect(container).toMatchSnapshot()
   })
})
