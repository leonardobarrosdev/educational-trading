import Image from 'next/image'
import { TopNavbar } from './components/TopNavbar'
import { HighlightButton } from './components/controllers/HighlightButton'
import { Carousel } from '@trendyol-js/react-carousel'
import { Item } from './components/Item'

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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <header className="z-10 w-full items-center">
        <TopNavbar />
        <Image
          src={require("@images/sections/section1/point.jpg")}
          alt="One hat clicked in a point of accesse"
          className="w-full"
        />
      </header>
      <section className="w-full bg-primary">
        <div className="md:mx-auto max-w-7xl md:grid md:grid-cols-4 gap-x-4">
          {
            sectionTwoContents.map((content, index) => (
              <div key={index} className="flex items-center justify-around bg-blackBlue md:h-32 rounded-md">
                <Image
                  src={content.image}
                  alt={content.description}
                  className="px-1"
                />
                <h3 className="text-white font-medium">{content.msg}</h3>
              </div>
            ))
          }
        </div>
      </section>
      <section className="md:h-svh md:w-full mt-16">
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
      <section className="flex w-full">
        <Image
          src={require("@images/sections/section3.jpg")}
          alt=""
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
      <section className="md:my-20 w-full">
        <div className="md:max-w-7xl mx-auto">
          <h3 className="text-4xl mb-3"><span className="text-highlight">transfer </span>in 5 easy steps</h3>
          <hr className="text-danger font-bold w-2/5 rounded-md pb-5" />
          <section className="flex flex-row gap-2 justify-stretch">
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
        </div>
      </section>
      <section className="md:py-20 w-full background-gradient">
        <div className="md:max-w-7xl mx-auto text-center">
          <div className="grid md:grid-cols-4 grid-cols-2">
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
          <div className="flex flex-wrap justify-center">
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
        <h2 className="text-center text-4xl text-blackBlue">Available across 20 countries</h2>
        {/* <Carousel show={3.5} slide={2} transition={0.5}>
          <Item />
        </Carousel> */}
      </section>
    </main>
  )
}
