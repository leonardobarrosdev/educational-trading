'use client'

import { Component } from "react"
import Image from "next/image"
import Slider from "react-slick"

const styleMsg = "text-base sm:text-2xl md:text-[40px] font-semibold leading-[120%] tracking-light text-balance max-w-lg"
const styleSubMsg = "text-sm sm:text-xl md:text-[32px] leading-[120%] tracking-light text-balance"

const slides = [
  {
    description: "",
    image: require("@images/sections/section1/banner1.jpg"),
    msg: <h1 className={`${styleMsg} text-danger`}>Don’t let urgent fund<br/>transfers wait</h1>,
    subMsg: <p className={`${styleSubMsg} text-primary`}>Transfers on the move</p>,
    extraMsg: ""
  },
  {
    description: "",
    image: require("@images/sections/section1/banner2.jpg"),
    msg: <h1 className={`${styleMsg} text-white`}>Make the most of<br/>every CENT</h1>,
    subMsg: <p className={`${styleSubMsg} text-warning`}>Get the best exchange rates</p>,
    extraMsg: ""
  },
  {
    description: "",
    image: require("@images/sections/section1/banner3.jpg"),
    msg: <h1 className={`${styleMsg} text-danger`}>Enjoy quick &amp; safe<br/>transfers</h1>,
    subMsg: <p className={`${styleSubMsg} text-blackBlue`}>Transfer in under 30 minutes<br/>to India**</p>,
    extraMsg: "**Any ICICI Bank account in India."
  },
  {
    description: "",
    image: require("@images/sections/section1/banner4.jpg"),
    msg: <h1 className={`${styleMsg} text-danger`}>Save up on<br/>transfer charges</h1>,
    subMsg: <p className={`${styleSubMsg} text-blackBlue`}>Complete fund transfers<br/>with minimal charges</p>,
    extraMsg: ""
  },
]

export default class Banner extends Component {
  render() {
    const settings = {
      className: "w-full relative md:mt-20",
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      speed: 500,
      arrows: false,
    }
  
    return (
      <Slider {...settings}>
        {slides.map((content, index) => (
            <div key={index} className="relative">
              <Image
                src={content.image}
                alt={content.description}
                className="z-0"
              />
              <div className="absolute z-1 left-3 md:left-8 lg:left-80 inset-y-1/4 lg:inset-y-1/3 max-w-1/4 grid gap-y-1 md:gap-y-3">
                {content.msg}
                {content.subMsg}
                {content.extraMsg.length > 0 && <p className="text-blackBlue mt-16">{content.extraMsg}</p>}
              </div>
            </div>
        ))}
      </Slider>
    )
  }
}