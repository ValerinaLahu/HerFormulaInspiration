import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HerFormulaInspiration',
  description: 'Handmade ceramics, kitchen treasures, and captured moments by a daughter and her mom',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'HerFormulaInspiration',
    description: 'Handmade ceramics and photography',
    type: 'website',
    url: 'https://herformulaInspiration.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
