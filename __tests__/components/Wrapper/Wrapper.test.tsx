import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Wrapper } from '@/components/Wrapper'
import { ThemeContext, ThemeProvider } from '@/context/theme'

describe('Wrapper', () => {
   it('renders the component with children', () => {
      const { getByText } = render(
         <ThemeContext.Provider
            value={{
               theme: 'light',
               toggleTheme: jest.fn(),
               useTheme: jest.fn(),
            }}
         >
            <Wrapper>
               <div>Child Component</div>
            </Wrapper>
         </ThemeContext.Provider>
      )

      expect(getByText('Child Component')).toBeInTheDocument()
   })

   it('applies the theme class to the main element', () => {
      const { container } = render(
         <ThemeProvider>
            <Wrapper>
               <div>Child Component</div>
            </Wrapper>
         </ThemeProvider>
      )

      expect(container.querySelector('main')?.className).toContain('light')
   })

   it('renders the Header component', () => {
      const { getByText } = render(
         <ThemeProvider>
            <Wrapper>
               <div>Child Component</div>
            </Wrapper>
         </ThemeProvider>
      )

      expect(getByText('Pokedex')).toBeInTheDocument()
   })
})
