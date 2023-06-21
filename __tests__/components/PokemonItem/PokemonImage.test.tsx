import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { PokemonImage } from '@/components/PokemonItem/PokemonImage'
import { Sprites } from '@/interfaces'

describe('PokemonImage', () => {
   const sprites = {
      other: {
         home: {
            front_default: '/images/home_front_default.png',
         },
      },
   } as Sprites

   it('renders the Pokemon image with the correct source', () => {
      const { getByAltText } = render(<PokemonImage sprites={sprites} />)

      const pokemonImage = getByAltText('pokemon image')

      expect(pokemonImage).toBeInTheDocument()
   })

   it('renders the Pokemon image with the fallback source when home front_default is not available', () => {
      const { getByAltText } = render(
         <PokemonImage
            sprites={{ front_default: '/images/front_default.png' } as Sprites}
         />
      )

      const pokemonImage = getByAltText('pokemon image')

      expect(pokemonImage).toBeInTheDocument()
   })

   it('renders the background icons', () => {
      const { getByAltText } = render(<PokemonImage sprites={sprites} />)

      const pokeballIcon = getByAltText('pokeball icon')
      const pointsIcon = getByAltText('points icon')
      const linesIcon = getByAltText('lines icon')

      expect(pokeballIcon).toBeInTheDocument()
      expect(pointsIcon).toBeInTheDocument()
      expect(linesIcon).toBeInTheDocument()
   })

   it('should match the snapshot', () => {
      const { container } = render(<PokemonImage sprites={sprites} />)

      expect(container).toMatchSnapshot()
   })
})
