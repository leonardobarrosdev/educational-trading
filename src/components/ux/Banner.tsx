'use client'

import { Component } from "react"
import Image from "next/image"
import Slider from "react-slick"

const slides = [
  {
    description: "",
    image: require("@images/sections/section1/banner1.jpg"),
    msg: <h1 className="text-[46px] text-danger">Don’t let urgent fund<br/>transfers wait</h1>,
    subMsg: <p className="text-[32px] text-primary">Transfers on the move</p>,
    extraMsg: ""
  },
  {
    description: "",
    image: require("@images/sections/section1/banner2.jpg"),
    msg: <h1 className="text-[46px] text-white">Make the most of<br/>every CENT</h1>,
    subMsg: <p className="text-[32px] text-warning">Get the best exchange rates</p>,
    extraMsg: ""
  },
  {
    description: "",
    image: require("@images/sections/section1/banner3.jpg"),
    msg: <h1 className="text-[46px] text-danger">Enjoy quick &amp; safe<br/>transfers</h1>,
    subMsg: <p className="text-[32px] text-blackBlue">Transfer in under 30 minutes<br/>to India**</p>,
    extraMsg: "**Any ICICI Bank account in India."
  },
  {
    description: "",
    image: require("@images/sections/section1/banner4.jpg"),
    msg: <h1 className="text-[46px] text-danger">Save up on<br/>transfer charges</h1>,
    subMsg: <p className="text-[32px] text-blackBlue">Complete fund transfers<br/>with minimal charges</p>,
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
              <div className="absolute left-80 inset-y-1/3 z-1 max-w-1/4">
                {content.msg}
                {content.subMsg}
                {content.extraMsg.length > 0 && <p className="text-blackBlue mt-16">{content.extraMsg}</p>}
              </div>
            </div>
          ))
        }
      </Slider>
    )
  }
}