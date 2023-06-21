import { renderHook, act } from '@testing-library/react'
import { useDebounce } from '@/hooks/useDebounce'

jest.useFakeTimers()

describe('useDebounce', () => {
   afterEach(() => {
      jest.clearAllTimers()
   })

   it('should debounce the value and return the debounced value after the delay', () => {
      const { result, rerender } = renderHook(
         ({ value, delay }) => useDebounce(value, delay),
         {
            initialProps: { value: 'initial', delay: 1000 },
         }
      )

      expect(result.current.debouncedValue).toBe('initial')

      act(() => {
         rerender({ value: 'updated', delay: 1000 })
      })

      expect(result.current.debouncedValue).toBe('initial')
      expect(result.current.isInDelay).toBe(true)

      act(() => {
         jest.advanceTimersByTime(1000)
      })

      expect(result.current.debouncedValue).toBe('updated')
      expect(result.current.isInDelay).toBe(false)
   })
})
