"use client" 

import { useRouter } from "next/navigation"
import { useState, Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"

import { Button } from "../ui/Button"

export default function NavBar() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
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
          <Menu as="div" className="relative lg:hidden inline-block text-left">
            <div>
              <Menu.Button
                onClick={() => setOpen(!open)}
                className="inline-flex w-full justify-center rounded-md px-2 md:px-4 py-1 md:py-2 text-sm font-normal md:font-medium hover:bg-blackBlue/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                >
                  <span className="material-symbols-outlined text-primary">
                    {open ? "close" : "menu"}
                  </span>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="list-none absolute right-0 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                {navLinks.map((link, index) => (
                  <a href={link.link} key={index} onClick={() => setOpen(!open)}>
                    <div className="w-full px-2 hover:bg-danger hover:text-white text-blackBlue">
                      <Menu.Item>
                        <li className="text-sm px-2 py-2">{link.name}</li>
                      </Menu.Item>
                    </div>
                  </a>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </nav>
  )
}