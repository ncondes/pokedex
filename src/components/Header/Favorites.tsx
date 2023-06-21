'use client'

import Link from 'next/link'
import { FC } from 'react'
import { usePathname } from 'next/navigation'

export const Favorites: FC = () => {
   const pathname = usePathname()

   return (
      <Link aria-label="favorites link" href="/favorites">
         {pathname === '/favorites' ? (
            <i className="fa-solid fa-heart fa-lg"></i>
         ) : (
            <i className="fa-regular fa-heart fa-lg"></i>
         )}
      </Link>
   )
}
