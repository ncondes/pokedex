import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ThemeProvider } from '@/context/theme'
import { PokemonStat } from '@/components/PokemonItem/PokemonStat'

describe('PokemonStat', () => {
   it('renders the correct stat name, value, and stat bar', () => {
      const { getByText, container } = render(
         <ThemeProvider>
            <PokemonStat stat="attack" value={80} />
         </ThemeProvider>
      )

      const statName = getByText('Attack')
      const statValue = getByText('80')

      const divs = container.querySelectorAll('div')

      const statBarIsInTheDocument = Array.from(divs).some((div) =>
         div.className.includes('pokemon_statbar_bar')
      )

      expect(statName).toBeInTheDocument()
      expect(statValue).toBeInTheDocument()
      expect(statBarIsInTheDocument).toBe(true)
   })

   it('renders the formatted special attack stat name', () => {
      const { getByText } = render(
         <ThemeProvider>
            <PokemonStat stat="special-attack" value={90} />
         </ThemeProvider>
      )

      const statName = getByText('Sp. Atk')

      expect(statName).toBeInTheDocument()
   })

   it('renders the correct background color based on the value low', () => {
      const { container } = render(
         <ThemeProvider>
            <PokemonStat stat="defense" value={25} />
         </ThemeProvider>
      )

      const statBar = container.querySelectorAll('div')[3]

      expect(statBar).toHaveStyle('background: #d85248')
   })

   it('renders the correct background color based on the value medium', () => {
      const { container } = render(
         <ThemeProvider>
            <PokemonStat stat="defense" value={45} />
         </ThemeProvider>
      )

      const statBar = container.querySelectorAll('div')[3]

      expect(statBar).toHaveStyle('background: #dfd158')
   })

   it('renders the correct background color based on the value high', () => {
      const { container } = render(
         <ThemeProvider>
            <PokemonStat stat="defense" value={65} />
         </ThemeProvider>
      )

      const statBar = container.querySelectorAll('div')[3]

      expect(statBar).toHaveStyle('background: #88c45f')
   })

   it('should match the snapshot', () => {
      const { container } = render(
         <ThemeProvider>
            <PokemonStat stat="defense" value={65} />
         </ThemeProvider>
      )

      expect(container).toMatchSnapshot()
   })
})
