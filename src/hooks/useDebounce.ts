import { useEffect, useState } from 'react'

export const useDebounce = <T>(
   value: T,
   delay?: number
): { debouncedValue: T; isInDelay: boolean } => {
   const [debouncedValue, setDebouncedValue] = useState<T>(value)
   const [isInDelay, setIsInDelay] = useState<boolean>(false)

   useEffect(() => {
      setIsInDelay(true)

      const timer = setTimeout(() => {
         setDebouncedValue(value)
         setIsInDelay(false)
      }, delay || 500)

      return () => {
         clearTimeout(timer)
      }
   }, [value, delay])

   return { debouncedValue, isInDelay }
}
