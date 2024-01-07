import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Transfer Money',
  description: 'Transfer Money to India from Europe Online - Send...',
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
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      </head>
      <body>{children}</body>
    </html>
  )
}
