'use client'
import { useState } from 'react'
import 'material-symbols'
import { Button } from './controllers/Button'

export function TopNavbar() {
  let [open, setOpen] = useState(false)
  let sectionLinks = [
    {name: "HOME", link: "#"},
    {name: "EXCHANGE RATER", link: "#"},
    {name: "FEATURE", link: "#"},
    {name: "HOW TO TRANSFER", link: "#"},
    {name: "CONTACT US", link: "#"},
    {name: "FAQs", link: "#"}
  ]

  return (
    <div className="fixed top-0 left-0 flex w-full md:h-28 bg-white">
      <nav className="md:container md:flex justify-between items-center py-4 px-7">
        <div>
          <h1 className="text-xxl weight-400 font-normal">Brand</h1>
        </div>
        <div className="md:hidden absolute right-8 top-6 cursor-point rounded-lg border-solid">
          <span onClick={() => setOpen(!open)} className="material-symbols-outlined text-3xl">{open? "close" : "menu"}</span>
        </div>
        <ul className={`md:flex md:items-center md:static md:z-auto md:w-auto md:pb-0 md:gap-0 absolute z-[-1] pb-12 left-0 pl-9 w-full transition-all duration-500 ease-in ${open? 'top-20':'top-[-490px]'}`}>
          {
            sectionLinks.map((link) => (
              <li key={link.name} className="md:py-14 md:px-4 hover:bg-danger hover:text-[white]">
                <a href={link.link}>{link.name}</a>
              </li>
            ))
          }
          <div className="flex gap-1 md:ml-4 text-md">
            <Button title="SIGN UP" />
            <Button title="LOGIN" />
          </div>
        </ul>
      </nav>
    </div>
  )
}