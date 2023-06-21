import { PokemonList } from '@/components/PokemonList'
import { ThemeProvider } from '@/context/theme'
import { Pokemon, Stat } from '@/interfaces'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('PokemonList', () => {
   it('renders the correct number of PokemonItem components', () => {
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
      ] as Pokemon[]

      const { getByText } = render(
         <ThemeProvider>
            <PokemonList pokemons={pokemons} />
         </ThemeProvider>
      )

      const pikachu = getByText('Pikachu')
      const charizard = getByText('Charizard')

      expect(pikachu).toBeInTheDocument()
      expect(charizard).toBeInTheDocument()
   })

   it('renders the NoResults component when there are no pokemons', () => {
      const pokemons = [] as Pokemon[]

      const { getByText } = render(
         <ThemeProvider>
            <PokemonList pokemons={pokemons} />
         </ThemeProvider>
      )

      const noResults = getByText('No Pokemons Found.')

      expect(noResults).toBeInTheDocument()
   })

   it('should match the snapshot', () => {
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
      ] as Pokemon[]

      const { container } = render(
         <ThemeProvider>
            <PokemonList pokemons={pokemons} />
         </ThemeProvider>
      )

      expect(container.firstChild).toMatchSnapshot()
   })
})
