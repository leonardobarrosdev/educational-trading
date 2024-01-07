'use client'

import { Component } from "react"
import Image from "next/image"
import Slider from "react-slick"

const slides = [
  {
    description: "",
    image: require("@images/sections/section1/banner1.jpg"),
    msg: "Don’t let urgent fund\ntransfers wait",
    subMsg: "Transfers on the move",
    extraMsg: ""
  },
  {
    description: "",
    image: require("@images/sections/section1/banner2.jpg"),
    msg: "Make the most of\nevery CENT",
    subMsg: "Get the best exchange rates",
    extraMsg: ""
  },
  {
    description: "",
    image: require("@images/sections/section1/banner3.jpg"),
    msg: "Enjoy quick &amp; safe\ntransfers",
    subMsg: "Transfer in under 30 minutes\nto India**",
    extraMsg: "**Any ICICI Bank account in India."
  },
  {
    description: "",
    image: require("@images/sections/section1/banner4.jpg"),
    msg: "Save up on\ntransfer charges",
    subMsg: "Complete fund transfers\nwith minimal charges",
    extraMsg: ""
  },
]

export default class Banner extends Component {
  render() {
    const settings = {
      className: "w-full mt-20 mb-0",
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      speed: 500,
    }
  
    return (
      <Slider {...settings}>
        {
          slides.map((content, index) => (
            <div key={index} className="relative">
              <Image
                src={content.image}
                alt={content.description}
                className="z-0"
              />
              <div className="absolute left-80 top-1/2 z-1 max-w-1/4">
                <h1 className="text-[40px] text-blackBlue">{content.msg}</h1>
                <p className="text-[32px] text-blackBlue">{content.subMsg}</p>
                {content.extraMsg.length > 0 && <p className="text-blackBlue">{content.extraMsg}</p>}
              </div>
            </div>
          ))
        }
      </Slider>
    )
  }
}