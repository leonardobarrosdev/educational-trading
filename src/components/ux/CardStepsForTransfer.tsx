"use client"

import Image from "next/image"

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

export function CardStepsForTransfer() {
  return(
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
  )
}