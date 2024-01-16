import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'Dashboard',
    template: '%s | Dashboard'
  },
}

export default function Layout({children}: {
  children: React.ReactNode
}) {
  return (
      <>
        {children}
      </>
  )
}