import { ChangeEvent, FC, useContext } from 'react'
import { ThemeContext } from '@/context/theme'
import { capitalize } from '@/utils'
import styles from './Select.module.scss'

interface Props {
   label: string
   options: any[]
   icon: string
   onChange: Function
}

export const Select: FC<Props> = ({ label, options, icon, onChange }) => {
   const { useTheme } = useContext(ThemeContext)

   const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
      onChange(event.target.value)
   }

   return (
      <div className={styles.select}>
         <select
            name={`pokemon-select-${label}`}
            id={`pokemon-select-${label}`}
            className={`${useTheme('font')} ${useTheme('input-bg')}`}
            onChange={handleChange}
         >
            {options.map((option) => (
               <option key={option} value={option}>
                  {capitalize(option)}
               </option>
            ))}
         </select>
         <div>
            <i className={`fa-solid ${icon}`}></i>
         </div>
      </div>
   )
}
