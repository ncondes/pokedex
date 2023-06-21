import { ThemeContext, ThemeProvider } from '@/context/theme'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useContext } from 'react'

const MockComponent = () => {
   const { toggleTheme, useTheme } = useContext(ThemeContext)

   return (
      <div>
         <button onClick={toggleTheme} className={useTheme('font')}>
            Toggle Theme
         </button>
      </div>
   )
}

describe('ThemeProvider', () => {
   it('renders children and toggles theme correctly', () => {
      const mockChildren = <MockComponent />
      // render the component with a child element
      const { getByText } = render(
         <ThemeProvider>{mockChildren}</ThemeProvider>
      )

      const childElement = getByText('Toggle Theme')
      expect(childElement).toBeInTheDocument()
      expect(childElement.className).toContain('light')

      fireEvent.click(childElement)
      expect(childElement.className).toContain('dark')

      fireEvent.click(childElement)
      expect(childElement.className).toContain('light')
   })
})
