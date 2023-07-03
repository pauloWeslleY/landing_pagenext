import { ReactNode } from 'react'
import { Plus_Jakarta_Sans as PlusJakartaSans } from 'next/font/google'
import { StylesProvider } from '@/providers/StylesProvider'

const plusJakartaSans = PlusJakartaSans({
  subsets: ['latin'],
  weight: ['800', '700', '600', '500', '400'],
})

export const metadata = {
  title: 'Leadster Page',
  description: 'Leadster Líder em Marketing Conversacional',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <StylesProvider>{children}</StylesProvider>
      </body>
    </html>
  )
}
