'use client'

import { useState } from 'react'

export default function Header() {
  let [open, setOpen] = useState(false)

  return (
    <header className="w-full items-center">
      <div className="md:min-w-full bg-white">
        <div className="mx-auto max-w-7xl">
          <nav className="relative z-50 flex justify-between">
            <div className="flex items-center md:gap-x-12 py-4">
              <h1 className="text-xxl weight-400 font-normal">Brand</h1>
            </div>
            <div className="flex items-center gap-x-2 md:gap-x-3">
              <ul className="min-md:hidden flex max-md:flex-col justify-between md:divide-x max-md:divide-y divide-blackBlue">
                <li className="md:text-center">
                  <a href="#" className="md:mx-3 md:my-0 my-3 hover:text-danger">About Link</a>
                </li>
                <li className="md:text-center">
                  <a href="#" className="md:mx-3 md:my-0 my-3 hover:md:text-danger">Email Us</a>
                </li>
              </ul>
              <div className="-mr-1 md:hidden">
                <span onClick={() => setOpen(!open)} className="material-symbols-outlined text-3xl">{open? "close" : "menu"}</span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}