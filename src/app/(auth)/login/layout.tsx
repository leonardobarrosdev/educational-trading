import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Log In",
  description: "Login page"
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