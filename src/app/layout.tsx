import { Roboto } from 'next/font/google'
import { Wrapper } from '@/components/Wrapper'
import '@/scss/index.scss'

const roboto = Roboto({
   weight: ['100', '300', '500', '700', '900'],
   subsets: ['latin'],
})

export const metadata = {
   title: 'Pokedex App',
   description:
      'Unleash your inner Pokemon trainer with the Pokemon App. Discover a vast collection of diverse and fascinating Pokemon creatures, collect your favorites, and embark on exciting adventures. Learn about their unique abilities, uncover captivating stories, and become a master trainer. Start your Pokemon journey today!',
   keywords: [
      'Pokemon',
      'Pokemon app',
      'Pokemon creatures',
      'Pokemon collection',
      'Pokemon trainer',
      'Pokemon journey',
      'Pokemon abilities',
      'Pokemon adventures',
      'Pokemon stories',
      'Catch Pokemon',
      'Train Pokemon',
      'Pokemon battles',
      'Pokedex',
      'Explore Pokemon world',
      'Pokemon fan',
      'Pokemon games',
      'Pokemon enthusiasts',
      'Pokemon community',
      'Pokemon news',
   ],
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <head>
            <link
               rel="stylesheet"
               href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
               integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
               crossOrigin="anonymous"
               referrerPolicy="no-referrer"
            />
            <link rel="icon" href="/favicon.ico" sizes="any" />
         </head>
         <body className={roboto.className}>
            <Wrapper>{children}</Wrapper>
         </body>
      </html>
   )
}
