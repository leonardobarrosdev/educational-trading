'use client'

import { useState } from 'react'
import 'material-symbols'

import { Button } from '../ui/Button'

export function Header() {
  let [open, setOpen] = useState(false)
  let sectionLinks = [
    {name: "HOME", link: "#home"},
    {name: "EXCHANGE RATER", link: "#exchange-rater"},
    {name: "FEATURE", link: "#feacture"},
    {name: "HOW TO TRANSFER", link: "#how-to-transfer"},
    {name: "CONTACT US", link: "#contact-us"},
    {name: "FAQs", link: "#"}
  ]

  return (
    <header id="home" className="z-10 w-full items-center relative">
      <div className="md:fixed md:min-w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <nav className="relative z-50 flex justify-between">
            <div className="flex items-center md:gap-x-12">
              <h1 className="text-xxl weight-400 font-normal">Brand</h1>
              <ul className="hidden md:flex md:gap-x-6">
                {
                  sectionLinks.map((link) => (
                    <li key={link.name} className="md:py-8 md:px-4 hover:bg-danger hover:text-[white]">
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="flex items-center gap-x-2 md:gap-x-3">
              <Button title="SIGN UP" />
              <Button title="LOGIN" />
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