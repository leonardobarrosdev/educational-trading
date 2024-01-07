'use client'

import { useState, useEffect } from "react";
import { setInterval, clearInterval } from "timers";
import Image from "next/image"
import "material-symbols"

const slides = [
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

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  // const slides: slidesProps = deckSlides[numberOfSection]
  const intervalInMs = 3000
  let autoSlide = true

  function prevSlide() {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  function nextSlide() {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  useEffect(() => {
    if(!autoSlide) return
    const slideInterval = setInterval(nextSlide, intervalInMs)
    console.log(slideInterval)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div className="items-center">
      <Image
        src={slides[currentIndex].image}
        alt={slides[currentIndex].description}
      />
      <h5 className="text-2xl">{slides[currentIndex].msg}</h5>
    </div>
  )
}