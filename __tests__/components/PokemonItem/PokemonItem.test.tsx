import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { PokemonItem } from '@/components/PokemonItem/PokemonItem'
import { Pokemon } from '@/interfaces'
import { ThemeProvider } from '@/context/theme'

const pokemon = {
   id: 1,
   name: 'Pikachu',
   types: [{ type: { name: 'electric' } }],
   sprites: {
      front_default:
         'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
   },
   stats: [
      { stat: { name: 'hp' }, base_stat: 35 },
      { stat: { name: 'attack' }, base_stat: 55 },
      { stat: { name: 'defense' }, base_stat: 40 },
   ],
} as Pokemon

describe('PokemonItem', () => {
   it('renders the Pokemon details correctly', () => {
      const { getByText, getByAltText } = render(
         <ThemeProvider>
            <PokemonItem pokemon={pokemon} />
         </ThemeProvider>
      )

      expect(getByText('Pikachu')).toBeInTheDocument()
      expect(getByAltText('pokemon image')).toBeInTheDocument()
      expect(getByText('Hp')).toBeInTheDocument()
      expect(getByText('35')).toBeInTheDocument()
      expect(getByText('Attack')).toBeInTheDocument()
      expect(getByText('55')).toBeInTheDocument()
      expect(getByText('Defense')).toBeInTheDocument()
      expect(getByText('40')).toBeInTheDocument()
   })

   it('renders the correct CSS class based on the Pokemon type', () => {
      const { container } = render(
         <ThemeProvider>
            <PokemonItem pokemon={pokemon} />
         </ThemeProvider>
      )

      expect(container.firstChild).toHaveClass('pokemon-type-electric')
   })

   it('should match the snapshot', () => {
      const { container } = render(
         <ThemeProvider>
            <PokemonItem pokemon={pokemon} />
         </ThemeProvider>
      )

      expect(container.firstChild).toMatchSnapshot()
   })
})
