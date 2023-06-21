import { ThemeContext } from '@/context/theme'
import { useDebounce } from '@/hooks'
import { ChangeEvent, FC, useContext, useEffect, useState } from 'react'
import styles from './SearchBox.module.scss'

interface Props {
   callback: (query: string) => void
}

export const SearchBox: FC<Props> = ({ callback }) => {
   const [value, setValue] = useState('')
   const { debouncedValue, isInDelay } = useDebounce(value, 300)
   const { useTheme } = useContext(ThemeContext)

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const query = event.target.value
      setValue(query)
   }

   const handleClear = () => {
      setValue('')
      callback('')
   }

   useEffect(() => {
      callback(debouncedValue)
      //   TODO: comment why callback is missing
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [debouncedValue])

   return (
      <div className={`${styles.search_box} ${useTheme('input-bg')}`}>
         <input
            type="text"
            value={value}
            onChange={handleChange}
            className={useTheme('font')}
         />
         <button
            onClick={handleClear}
            disabled={value === ''}
            style={{ cursor: value === '' ? '' : 'pointer' }}
         >
            {isInDelay ? (
               <i className="fa-solid fa-spinner fa-spin"></i>
            ) : (
               <i className="fa-solid fa-repeat"></i>
            )}
         </button>
      </div>
   )
}
