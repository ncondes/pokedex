import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { PokemonManager } from '@/components/PokemonManager'
import { Pokemon, Stat } from '@/interfaces'
import { ThemeProvider } from '@/context/theme'

global.structuredClone = (val) => JSON.parse(JSON.stringify(val))

const pokemons = [
   {
      id: 1,
      name: 'Pikachu',
      types: [{ type: { name: 'electric' } }],
      sprites: {
         front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      },
      stats: [] as Stat[],
   },
   {
      id: 2,
      name: 'Charizard',
      types: [{ type: { name: 'fire' } }],
      sprites: {
         front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
      },
      stats: [] as Stat[],
   },
   {
      id: 3,
      name: 'Bulbasaur',
      types: [{ type: { name: 'grass' } }],
      sprites: {
         front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      },
      stats: [] as Stat[],
   },
] as Pokemon[]

describe('PokemonManager', () => {
   it('renders the component and handles search, filter, and sort actions', async () => {
      const { getByText, getByRole, getAllByRole, queryByText } = render(
         <ThemeProvider>
            <PokemonManager data={pokemons} />
         </ThemeProvider>
      )

      // initial rendering
      expect(getByText('Pikachu')).toBeInTheDocument()
      expect(getByText('Charizard')).toBeInTheDocument()
      expect(getByText('Bulbasaur')).toBeInTheDocument()

      const select = getAllByRole('combobox')[0]

      // filter action
      fireEvent.change(select, { target: { value: 'grass' } })

      const pikachu = queryByText('Pikachu')
      const charizard = queryByText('Charizard')
      const bulbasaur = queryByText('Bulbasaur')

      expect(pikachu).not.toBeInTheDocument()
      expect(charizard).not.toBeInTheDocument()
      expect(bulbasaur).toBeInTheDocument()
   })

   it('should match snapshot', () => {
      const { container } = render(
         <ThemeProvider>
            <PokemonManager data={pokemons} />
         </ThemeProvider>
      )

      expect(container).toMatchSnapshot()
   })
})
