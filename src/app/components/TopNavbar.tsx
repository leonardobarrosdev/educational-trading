'use client'
import { useState } from 'react'
import 'material-symbols'

type linkProps = {
  name: string,
  link: string
}

export function TopNavbar() {
  let [open, setOpen] = useState(false)
  let Links = [
    {name: "HOME", link: "#"},
    {name: "EXCHANGE RATER", link: "#"},
    {name: "FEATURE", link: "#"},
    {name: "HOW TO TRANSFER", link: "#"},
    {name: "CONTACT US", link: "#"},
    {name: "FAQs", link: "#"}
  ]

  return (
    <div className="flex md:1 lg:w-100 h-28 gap-10 items-center bg-[white]">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <h1 className="text-xxl weight-400 font-normal">Brand</h1>
        </div>
        <div className="nav-links duraction-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
          <ul className="flex md:flex-row flex-col md:gap-[4vw] gap-8">
            {
              Links.map((link) => {
                <li>
                  <a href={link.link} className="hover:bg-[danger] hover:text-[white]">{link.name}</a>
                </li>
              })
            }
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-1 text-md">
            <button className="bg-[primary] text-white py-1">SIGN UP</button>
            <button className="primary">LOGIN</button>
          </div>
          <span onClick={() => setOpen(!open)} className="material-symbols-outlined text-3xl cursor-point md-hidden">{open? "close" : "menu"}</span>
        </div>
      </nav>
    </div>
  )
}