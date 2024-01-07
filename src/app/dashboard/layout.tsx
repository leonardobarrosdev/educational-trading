import './globals.css'

import { getUser } from "@/lib/auth"

export default function RootLayout({dashboard, auth}: {
  dashboard: React.ReactNode,
  auth: React.ReactNode
  }) {
    const isLoggedIn = getUser()
    return (
      <html>
        <body>
          {isLoggedIn ? dashboard : auth}
        </body>
      </html>
    )
}
