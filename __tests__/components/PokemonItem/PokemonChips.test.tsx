import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { PokemonChips } from '@/components/PokemonItem/PokemonChips'
import { Type } from '@/interfaces'

describe('PokemonChips', () => {
   it('renders the correct chips based on the provided types', () => {
      const types = [
         { type: { name: 'grass' } },
         { type: { name: 'fire' } },
         { type: { name: 'water' } },
      ] as Type[]

      const { getByText } = render(<PokemonChips types={types} />)

      expect(getByText('Grass')).toBeInTheDocument()
      expect(getByText('Fire')).toBeInTheDocument()
      expect(getByText('Water')).toBeInTheDocument()
   })

   it('renders no chips when no types are provided', () => {
      const types = [] as Type[]

      const { container } = render(<PokemonChips types={types} />)

      const chips = container.querySelectorAll('div')

      chips.forEach((chip) => {
         expect(chip).not.toHaveClass('pokemon_chip')
      })
   })

   it('should match the snapshot', () => {
      const types = [
         { type: { name: 'grass' } },
         { type: { name: 'fire' } },
         { type: { name: 'water' } },
      ] as Type[]

      const { container } = render(<PokemonChips types={types} />)

      expect(container).toMatchSnapshot()
   })
})
