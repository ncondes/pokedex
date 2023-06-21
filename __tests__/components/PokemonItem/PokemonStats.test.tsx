import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ThemeProvider } from '@/context/theme'
import { PokemonStats } from '@/components/PokemonItem/PokemonStats'
import { Stat } from '@/interfaces'

describe('PokemonStats', () => {
   it('renders the base stats correctly', () => {
      const stats = [
         { stat: { name: 'hp' }, base_stat: 100 },
         { stat: { name: 'attack' }, base_stat: 80 },
         { stat: { name: 'defense' }, base_stat: 65 },
      ] as Stat[]

      const { getByText } = render(
         <ThemeProvider>
            <PokemonStats stats={stats} />
         </ThemeProvider>
      )

      expect(getByText('Base Stats')).toBeInTheDocument()
      expect(getByText('Hp')).toBeInTheDocument()
      expect(getByText('100')).toBeInTheDocument()
      expect(getByText('Attack')).toBeInTheDocument()
      expect(getByText('80')).toBeInTheDocument()
      expect(getByText('Defense')).toBeInTheDocument()
      expect(getByText('65')).toBeInTheDocument()
   })

   it('should match the snapshot', () => {
      const stats = [
         { stat: { name: 'hp' }, base_stat: 100 },
         { stat: { name: 'attack' }, base_stat: 80 },
         { stat: { name: 'defense' }, base_stat: 65 },
      ] as Stat[]

      const { container } = render(
         <ThemeProvider>
            <PokemonStats stats={stats} />
         </ThemeProvider>
      )

      expect(container).toMatchSnapshot()
   })
})
