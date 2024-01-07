"use client"

import { Suspense } from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from "next/navigation"
import 'material-symbols'

import Banner from '@components/ux/Banner'
import SliderStick from "@components/ux/SliderStick"
import { Button } from '@components/ui/Button'
import { HighlightButton } from '@components/ui/HighlightButton'
import Loading from '@components/ui/loading'

type SelectionsContentProps = {
  description: string;
  image: any;
  msg: string;
}

const sectionTwoContents = [
  {
    description: "Image of clock and blocks representing transfers",
    image: require("@images/sections/section2/1-transfer-min.svg"),
    msg: "Transfer in under 30 mins to India**"
  },
  {
    description: "Image of eclipse with two sets representing movimentation",
    image: require("@images/sections/section2/2-transfer-move.svg"),
    msg: "Transfers on the move"
  },
  {
    description: "Image of glob show assured exchange rates",
    image: require("@images/sections/section2/3-exchange-rates.svg"),
    msg: "Assured Exchange Rates"
  },
  {
    description: "Image show circle verified change",
    image: require("@images/sections/section2/4-minimal-change.svg"),
    msg: "Minimal Change"
  },
]

const stepsForTransfer = [
  {
    description: "Illustration of a cell phone with a verified symbol and a hand pressing when clicking",
    image: require("@assets/images/steps/step1.svg"),
    msg: "Register on mobile app or website"
  },
  {
    description: "Illustration of one avatar in the cell phone and at right a card from id",
    image: require("@assets/images/steps/step2.svg"),
    msg: "Verify your identity via a short video call"
  },
  {
    description: "Illustration of money",
    image: require("@assets/images/steps/step3.svg"),
    msg: "Enter the amount you wish to send to India"
  },
  {
    description: "Illustration of writing on paper and a pen",
    image: require("@assets/images/steps/step4.svg"),
    msg: "Add your recipient's account details"
  },
  {
    description: "Illustration of glob where your around have demonstration set of intercambio between monetary values",
    image: require("@assets/images/steps/step5.svg"),
    msg: "Transfer money from yuor local Bank account"
  },
]

const selectionsContent = [
  {
    description: "Image of Malta logo",
    image: require("@images/sections/section5-selections/Malta.png"),
    msg: "Malta"
  },
  {
    description: "Image of Norway logo",
    image: require("@images/sections/section5-selections/Norway.png"),
    msg: "Norway"
  },
  {
    description: "Image of Portugal logo",
    image: require("@images/sections/section5-selections/Portugal.png"),
    msg: "Portugal"
  },
  {
    description: "Image of Slovakia logo",
    image: require("@images/sections/section5-selections/Slovakia.png"),
    msg: "Slovakia"
  },
  {
    description: "Image of Spain logo",
    image: require("@images/sections/section5-selections/Spain.png"),
    msg: "Spain"
  },
  {
    description: "Image of Sweden logo",
    image: require("@images/sections/section5-selections/Sweden.png"),
    msg: "Sweden"
  },
  {
    description: "Image of Austria logo",
    image: require("@images/sections/section5-selections/austria.png"),
    msg: "Austria"
  },
  {
    description: "Image of Belgium logo",
    image: require("@images/sections/section5-selections/belgium.png"),
    msg: "Belgium"
  },
  {
    description: "Image of Cyprua logo",
    image: require("@images/sections/section5-selections/cyprus.png"),
    msg: "Cyprua"
  },
  {
    description: "Image of Denmark logo",
    image: require("@images/sections/section5-selections/denmark.png"),
    msg: "Denmark"
  },
  {
    description: "Image of Estonia logo",
    image: require("@images/sections/section5-selections/estonia.png"),
    msg: "Estonia"
  },
  {
    description: "Image of Finland logo",
    image: require("@images/sections/section5-selections/finland.png"),
    msg: "Finland"
  },
  {
    description: "Image of France logo",
    image: require("@images/sections/section5-selections/france.png"),
    msg: "France"
  },
  {
    description: "Image of Greence logo",
    image: require("@images/sections/section5-selections/greece.png"),
    msg: "Greence"
  },
  {
    description: "Image of Ireland logo",
    image: require("@images/sections/section5-selections/ireland.png"),
    msg: "Ireland"
  },
  {
    description: "Image of Italy logo",
    image: require("@images/sections/section5-selections/italy.png"),
    msg: "Italy"
  },
  {
    description: "Image of Luxembourg logo",
    image: require("@images/sections/section5-selections/luxembourg.png"),
    msg: "Luxembourg"
  },
  {
    description: "Image of Netherlands logo",
    image: require("@images/sections/section5-selections/netherlands.png"),
    msg: "Netherlands"
  },
  {
    description: "Image of Slovinia logo",
    image: require("@images/sections/section5-selections/slovinia.png"),
    msg: "Slovinia"
  },
]

export default function Home() {
  const router = useRouter()
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
    <main className="min-h-screen flex flex-col items-center">
      <header id="home" className="z-10 w-full items-center relative">
        <div className="md:fixed md:min-w-full bg-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <nav className="relative z-50 flex justify-between">
              <div className="flex items-center lg:gap-x-24">
                <>
                <h1 className="text-xxl weight-400 font-normal">Brand</h1>
                </>
                <ul className="hidden md:flex">
                  {
                    sectionLinks.map((link) => (
                      <li key={link.name} className="md:py-8">
                        <a href={link.link} className="md:py-8 md:px-4 hover:bg-danger hover:text-[white]">{link.name}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="flex items-center gap-x-2 md:gap-x-3">
                <Button type="button" title="SIGN UP" onClick={() => router.push("/auth/register")} />
                <Button type="button" title="LOGIN" onClick={() => router.push("/auth/login")} />
                <div className="-mr-1 md:hidden">
                  <span onClick={() => setOpen(!open)} className="material-symbols-outlined text-3xl">{open? "close" : "menu"}</span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <Banner />
      <section className="w-full bg-primary" style={{marginTop: "-5px"}}>
        <div className="md:mx-auto max-w-7xl md:grid md:grid-cols-4 gap-x-4">
          {
            sectionTwoContents.map((content, index) => (
              <div key={index} className="flex items-center justify-around bg-blackBlue py-7 rounded-md">
                <Image
                  src={content.image}
                  alt={content.description}
                  className="px-1"
                />
                <h3 className="text-white text-3xl font-medium">{content.msg}</h3>
              </div>
            ))
          }
        </div>
      </section>
      <section id="exchange-rater" className="md:h-svh md:w-full my-16">
        <div className="md:flex mx-auto max-w-7xl relative items-center md:justify-between">
          <article className="grid md:gap-y-10 font-normal text-left">
            <h2 className="text-blackBlue" style={{fontSize: "2.25rem"}}>
              A <span className="text-highlight">CONVENIENT</span>, <span className="text-highlight">TRUSTED </span>
              and <span className="text-highlight">ECONOMICAL</span> money
              transfer service
            </h2>
            <hr className="text-danger font-bold w-auto rounded-md" />
            <div className="text-blackBlue md:text-xl text-base leading-6 grid md:gap-y-10">
              <p>Company Europe is an online money transfer service by ICICI Bank Germany.</p>
              <p>We offer quick fund transfers from Europe to any bank account in India.</p>
            </div>
            <div style={{paddingRight: "0.5rem", paddingLeft: "o.5rem"}}>
              <HighlightButton title="TRANSFER NOW" />
            </div>
          </article>
          <Image
            src={require("@images/sections/section2-ellipse.jpg")}
            alt="Image with two formal persons point at cell phone, one of them is holding the cell phone"
          />
        </div>
      </section>
      <section id="feacture" className="flex w-full">
        <Image
          src={require("@images/sections/feature.jpg")}
          alt="The image depicts an aerial view of a city at night with illuminated buildings and city lights. It includes outdoor elements such as trees and a river, and the sky shows a sunset with clouds."
          className="w-1/2"
        />
        <article className="w-1/2 flex items-center bg-blackBlue text-white">
          <div className="md:px-8">
            <h3 className="text-4xl mb-3">Why Company Europe?</h3>
            <hr className="text-white font-bold w-3/4 rounded-md pb-5" />
            <ul className="diamond-style text-2xl grid gap-2.5">
              <li>Lock your exchange rates</li>
              <li>Get more value for your money</li>
              <li>Minimal charges with no hidden costs</li>
              <li>Transfer to any bank in India</li>
              <li>Transfer in under 30 minutes toICICI Bank accounts</li>
              <li>Convenient and light mobile app</li>
            </ul>
          </div>
        </article>
      </section>
        <section id="how-to-transfer" className="md:my-20 w-full">
          <div className="md:max-w-7xl mx-auto">
            <h3 className="text-4xl mb-3"><span className="text-highlight">transfer </span>in 5 easy steps</h3>
            <hr className="text-danger font-bold w-2/5 rounded-md" />
            <Suspense fallback={<Loading />}>
              <section className="flex flex-row gap-2 justify-stretch mt-10 mb-20">
                {
                  stepsForTransfer.map((content, index) => (
                    <div key={index} className="card-from-step">
                      <Image
                        src={content.image}
                        alt={content.description}
                        className="mx-auto"
                      />
                      <h4 className="text-danger text-center text-2xl px-2.5 mt-4 mb-8">{content.msg}</h4>
                    </div>
                  ))
                }
              </section>
            </Suspense>
          </div>
        </section>
      <section className="md:py-20 w-full background-gradient">
        <div className="md:max-w-7xl mx-auto text-center divide-y divide-blackBlue">
          <div className="grid md:grid-cols-4 grid-cols-2  divide-x divide-blackBlue">
            <div className="py-2.5 px-6">
              <h3 className="text-white text-2xl">Available across 20 Eurozone countries</h3>
            </div>
            <div className="py-2.5 px-6">
              <h3 className="text-white text-2xl">Multiple payment options</h3>
            </div>
            <div className="py-2.5 px-6">
              <h3 className="text-white text-2xl">Convenient ways of confirming your identity</h3>
            </div>
            <div className="py-2.5 px-6">
              <h3 className="text-white text-2xl">Fast and secure transfers</h3>
            </div>
          </div>
          <div className="flex flex-wrap justify-center  divide-x divide-blackBlue">
            <div className="w-64 py-2.5 px-6">
              <h3 className="text-white text-2xl">Lock your exchange rates</h3>
            </div>
            <div className="w-64 py-2.5 px-6">
              <h3 className="text-white text-2xl">Transfer within 30 minutes to ICICI accounts 24x7</h3>
            </div>
            <div className="w-64 py-2.5 px-auto sm:px-6">
              <h3 className="text-white text-2xl">Minimalservice charge</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="my-20 w-full">
        <h2 className="text-center text-4xl text-blackBlue mb-16">Available across {selectionsContent.length} countries</h2>
        <Suspense fallback={<Loading />}>
          <SliderStick />
        </Suspense>
      </section>
      <Suspense fallback={<Loading />}>
      <section id="contact-us" className="w-full py-14 px-1 bg-[url('../assets/images/sections/contactbg.jpg')] bg-no-repeat">
        <h2 className="text-center text-4xl text-white">Get in touch</h2>
        <div className="mx-auto flex items-center justify-center py-20">
          <div className="flex flex-col w-1/3 relative">
            <Image
              src={require("@images/contacts/contact-phone.svg")}
              alt="Illustration of phone"
              className="mx-auto"
            />
            <ul className="text-white text-center text-2xl">
              <li>India: +91 407100 4532</li>
              <li>Europe: 00 800 4499 6532</li>
            </ul>
          </div>
          <div className="flex flex-col w-1/3 relative">
            <Image
              src={require("@images/contacts/contact-email.svg")}
              alt="Illustration of email"
              className="mx-auto"
            />
            <a className="text-white text-center text-2xl" href="#">europe@company.com</a>
          </div>
        </div>
      </section>
      </Suspense>
      <section className="w-full h-40 flex flex-col items-center justify-center">
        <Suspense fallback={<Loading />}>
          <h4 className="text-blackBlue text-md">Download MoneyCompany app</h4>
          <div className="flex justify-center gap-2 mt-2">
            <Image
              src={require("@images/sections/googleplay.png")}
              alt="Google Play Image"
            />
            <Image
              src={require("@images/sections/appstore.png")}
              alt="App Store Image"
            />
          </div>
        </Suspense>
      </section>
      <footer className="w-full">
        <div className="w-1/2 mx-auto">
          <ul className="flex items-center justify-center divide-x divide-blackBlue border-y-2 relative animate-fade delay-250">
            <li className="my-2 px-2 text-sm"><a href="/en/sociallink#gototab1" target="_blank">Imprint</a></li>
            <li className="my-2 px-2 text-sm"><a href="/en/sociallink#gototab2" target="_blank">User Identification</a></li>
            <li className="my-2 px-2 text-sm"><a href="/en/sociallink#gototab3" target="_blank">Privacy Policy</a></li>
            <li className="my-2 px-2 text-sm"><a href="/en/sociallink#gototab4" target="_blank">Terms of Use</a></li>
            <li className="my-2 px-2 text-sm"><a href="/en/sociallink#gototab5" target="_blank">Online Security</a></li>
            <li className="my-2 px-2 text-sm"><a href="/en/sociallink#gototab6" target="_blank">Holiday List</a></li>
            <li className="my-2 px-2 text-sm"><a href="/en/sociallink#gototab7" target="_blank">About US</a></li>
          </ul>
        </div>
        <p className="text-center text-blckBlue my-3">Copyright©2020. All rights Reserved.</p>
      </footer>
    </main>
  )
}
