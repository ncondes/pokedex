'use client'

import { FC, PropsWithChildren } from 'react'
import { Header } from '../Header'

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
   return (
      <main>
         <Header />
         <div>{children}</div>
      </main>
   )
}
