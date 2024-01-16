import { Suspense } from 'react'
import Image from 'next/image'

import "@assets/styles/landingpage.css"
import Banner from '@components/ux/Banner'
import SliderStick from "@components/ux/SliderStick"
import { HighlightButton } from '@components/ui/HighlightButton'
import Loading from '@components/ui/loading'
import CustomService from '@/components/ux/CustomService'
import NavBar from '@/components/ux/NavBar'

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

export default function Home() {
  return (
    <main id="home" className="min-h-screen flex flex-col items-center">
      <header className="w-full z-50 md:fixed md:h-20 h-16 flex items-center bg-white">
        <NavBar />
      </header>
      <Banner />
      <section className="w-full bg-primary mt-[-5px]">
        <div className="md:mx-auto max-w-7xl">
          <CustomService />
        </div>
      </section>
      <section id="exchange-rater" className="md:w-full my-6 md:my-16">
        <div className="lg:max-w-7xl mx-3 lg:mx-auto relative flex flex-col-reverse md:flex-row items-center justify-around lg:justify-between">
          <article className="grid  gap-y-3 md:gap-y-10 font-normal text-left">
            <h2 className="text-[1.25rem] md:text-[1.875rem] lg:text-[2.25rem] leading-[120%] tracking-light text-blackBlue">
              A <span className="text-highlight">CONVENIENT</span>, <span className="text-highlight">TRUSTED </span>
              and <span className="text-highlight">ECONOMICAL</span> money
              transfer service
            </h2>
            <hr className="text-danger font-bold w-auto rounded-md" />
            <div className="text-base md:text-lg lg:text-2xl text-blackBlue grid md:gap-y-10">
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
            className="w-3/4 md:w-4/5 lg:w-full relative mb-3 md:mb-auto"
          />
        </div>
      </section>
      <section id="feacture" className="w-full flex flex-col md:flex-row">
        <Image
          src={require("@images/sections/feature.jpg")}
          alt="The image depicts an aerial view of a city at night with illuminated buildings and city lights. It includes outdoor elements such as trees and a river, and the sky shows a sunset with clouds."
          className="w-full md:w-1/2"
        />
        <article className="w-full md:w-1/2 flex items-center bg-blackBlue text-white max-sm:py-3">
          <div className="max-md:m-3 mx-auto md:px-8">
            <h3 className="text-xl lg:text-4xl mb-3">Why Company Europe?</h3>
            <hr className="text-white font-bold md:w-2/3 lg:w-3/4 pb-5" />
            <ul className="diamond-list-style grid gap-2 md:gap-2.5">
              <li className="text-base md:text-lg lg:text-2xl">Lock your exchange rates</li>
              <li className="text-base md:text-lg lg:text-2xl">Get more value for your money</li>
              <li className="text-base md:text-lg lg:text-2xl">Minimal charges with no hidden costs</li>
              <li className="text-base md:text-lg lg:text-2xl">Transfer to any bank in India</li>
              <li className="text-base md:text-lg lg:text-2xl">Transfer in under 30 minutes toICICI Bank accounts</li>
              <li className="text-base md:text-lg lg:text-2xl">Convenient and light mobile app</li>
            </ul>
          </div>
        </article>
      </section>
        <section id="how-to-transfer" className="my-8 md:my-20 w-full">
          <div className="mx-3 lg:max-w-7xl lg:mx-auto">
            <h3 className="text-lg md:text-2xl lg:text-4xl leading-[120%] mb-3"><span className="text-highlight">transfer </span>in 5 easy steps</h3>
            <hr className="text-danger font-bold w-10/12 md:w-1/2 lg:w-2/5 rounded-md" />
            <Suspense fallback={<Loading />}>
              <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-10 mb-20">
                {stepsForTransfer.map((content, index) => (
                  <div key={index} className="card-from-step relative">
                    <Image
                      src={content.image}
                      alt={content.description}
                      className="mx-auto stroke-0 md:stroke-2"
                    />
                    <h4 className="text-lg md:text-xl lg:text-2xl text-center text-danger leading-[120%] px-2.5 mt-4 mb-8">
                      {content.msg}
                    </h4>
                    <span className="absolute left-2 md:left-6 top-2 md:top-6 h-6 md:h-8 w-6 md:w-8 rounded-2xl bg-danger text-sm md:text-base lg:text-lg md:text-xl text-center text-blackBlue text-white font-bold subpixel-antialiased">
                      {index + 1}
                    </span>
                  </div>
                ))}
              </section>
            </Suspense>
          </div>
        </section>
      <section className="md:py-20 w-full background-gradient">
        <div className="md:max-w-7xl mx-auto text-center max-md:divide-x divide-y divide-blackBlue">
          <div className="grid md:grid-cols-4 grid-cols-2 max-md:divide-y divide-x divide-blackBlue">
            <div className="py-2.5 px-6">
              <h3 className="text-lg md:text-2xl leading-[120%] text-white">Available across 20 Eurozone countries</h3>
            </div>
            <div className="py-2.5 px-6">
              <h3 className="text-lg md:text-2xl leading-[120%] text-white">Multiple payment options</h3>
            </div>
            <div className="py-2.5 px-6">
              <h3 className="text-lg md:text-2xl leading-[120%] text-white">Convenient ways of confirming your identity</h3>
            </div>
            <div className="py-2.5 px-6">
              <h3 className="text-lg md:text-2xl leading-[120%] text-white">Fast and secure transfers</h3>
            </div>
          </div>
          <div className="flex flex-wrap justify-center divide-x max-md:divide-y divide-blackBlue">
            <div className="w-1/2 md:w-64 py-2.5 px-6">
              <h3 className="text-lg md:text-2xl leading-[120%] text-white">Lock your exchange rates</h3>
            </div>
            <div className="w-1/2 md:w-64 py-2.5 px-6">
              <h3 className="text-lg md:text-2xl leading-[120%] text-white">Transfer within 30 minutes to ICICI accounts 24x7</h3>
            </div>
            <div className="w-full md:w-64 py-2.5 px-auto sm:px-6">
              <h3 className="text-lg md:text-2xl leading-[120%] text-white">Minimalservice charge</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="my-20 w-full">
        <Suspense fallback={<Loading />}>
          <SliderStick />
        </Suspense>
      </section>
      <Suspense fallback={<Loading />}>
      <section id="contact-us" className="w-full py-14 px-1 bg-[url('../assets/images/sections/contactbg.jpg')] bg-no-repeat">
        <h2 className="text-center text-4xl text-white">Get in touch</h2>
        <div className="mx-auto flex max-sm:flex-col items-center justify-center py-16 md:py-20 gap-3">
          <div className="flex flex-col md:w-1/3 relative">
            <Image
              src={require("@images/contacts/contact-phone.svg")}
              alt="Illustration of phone"
              className="mx-auto max-sm:w-2/5"
            />
            <ul className="text-base md:text-lg lg:text-2xl text-white text-center">
              <li>India: +91 407100 4532</li>
              <li>Europe: 00 800 4499 6532</li>
            </ul>
          </div>
          <div className="flex flex-col md:w-1/3 relative">
            <Image
              src={require("@images/contacts/contact-email.svg")}
              alt="Illustration of email"
              className="mx-auto max-sm:w-2/5"
            />
            <a className="text-base md:text-lg lg:text-2xl text-white text-center" href="#">europe@company.com</a>
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
          <ul className="flex flex-wrap items-center justify-center md:divide-x divide-blackBlue border-y-2 relative animate-fade delay-250">
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
