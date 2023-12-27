import Image from 'next/image'
import { TopNavbar } from './components/TopNavbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-['Malish']">
      <header className="z-10 w-full items-center bg-white">
        <TopNavbar />
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </header>
    </main>
  )
}
