import Image from 'next/image'
import { TopNavbar } from './components/TopNavbar'
import { HighlightButton } from './components/controllers/HighlightButton'

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
            <h2 className="text-blackBlue leading-9" style={{fontSize: "2.25rem"}}>
              A <span className="text-danger">CONVENIENT</span>, <span className="text-danger">TRUSTED </span>
              and <span className="text-danger">ECONOMICAL</span> money
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
    </main>
  )
}
