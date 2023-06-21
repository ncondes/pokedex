import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Select } from '@/components/Select'
import { ThemeProvider } from '@/context/theme'
import { capitalize } from '@/utils'

describe('Select', () => {
   const label = 'Type'
   const options = ['bug', 'fire', 'water']
   const icon = 'fa-filter'
   const onChange = jest.fn()

   beforeEach(() => {
      onChange.mockClear()
   })

   it('renders the component with label, options, and icon', () => {
      const { container } = render(
         <ThemeProvider>
            <Select
               label={label}
               options={options}
               icon={icon}
               onChange={onChange}
            />
         </ThemeProvider>
      )

      const selectElement = container.querySelector('select')
      const iconElement = container.querySelector('i')

      expect(selectElement).toBeInTheDocument()
      expect(iconElement).toBeInTheDocument()
   })

   it('renders options with capitalized values', () => {
      const { container } = render(
         <ThemeProvider>
            <Select
               label={label}
               options={options}
               icon={icon}
               onChange={onChange}
            />
         </ThemeProvider>
      )

      const selectElement = container.querySelector('select')

      options.forEach((option) => {
         expect(selectElement).toHaveTextContent(capitalize(option))
      })
   })

   it('calls the onChange function with selected option value', () => {
      const { container } = render(
         <ThemeProvider>
            <Select
               label={label}
               options={options}
               icon={icon}
               onChange={onChange}
            />
         </ThemeProvider>
      )

      const selectElement = container.querySelector('select')!

      fireEvent.change(selectElement, { target: { value: 'fire' } })

      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith('fire')
   })

   it('applies theme classes to select element', () => {
      const { container } = render(
         <ThemeProvider>
            <Select
               label={label}
               options={options}
               icon={icon}
               onChange={onChange}
            />
         </ThemeProvider>
      )

      const selectElement = container.querySelector('select')

      expect(selectElement).toHaveClass('light-font light-input-bg')
   })
})
