"use client" 

import { useRouter } from "next/navigation"
import { Dropdown } from 'flowbite-react'

import { Button } from "../ui/Button"

export default function NavBar() {
  const router = useRouter()
  let navLinks = [
    {name: "HOME", link: "#home"},
    {name: "EXCHANGE RATER", link: "#exchange-rater"},
    {name: "FEATURE", link: "#feacture"},
    {name: "HOW TO TRANSFER", link: "#how-to-transfer"},
    {name: "CONTACT US", link: "#contact-us"},
    {name: "FAQs", link: "#"}
  ]

  return (
    <nav className="mx-auto md:max-w-7xl w-11/12 relative">
      <div className="flex items-center justify-between gap-x-4 lg:gap-x-6">
        <div className="flex items-center lg:gap-x-24">
          <h1 className="text-xl md:text-2xl weight-400 font-semibold">Brand</h1>
          <ul className="lg:flex hidden">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.link} className="md:py-8 md:px-4 hover:bg-danger hover:text-[white]">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-x-2 md:gap-x-3">
          <Button type="button" title="SIGN UP" onClick={() => router.push("/register")} />
          <Button type="button" title="LOGIN" onClick={() => router.push("/login")} />
          <div className="-mr-1 lg:hidden">
            <Dropdown
              label=""
              size="md"
              dismissOnClick={false}
              renderTrigger={() => <span className="material-symbols-outlined text-3xl">menu</span>}
            >
              {navLinks.map((link) => (
                <Dropdown.Item key={link.link}><a href={link.link}>{link.name}</a></Dropdown.Item>
              ))}
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  )
}