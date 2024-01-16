"use client"

import Image from "next/image"
import { Component } from "react"
import Slider from "react-slick"

const sliderCustomService = [
  {
    description: "Image of clock and blocks representing transfers",
    image: require("@images/sections/custom-service/1-transfer-min.svg"),
    msg: "Transfer in under 30 mins to India**"
  },
  {
    description: "Image of eclipse with two sets representing movimentation",
    image: require("@images/sections/custom-service/2-transfer-move.svg"),
    msg: "Transfers on the move"
  },
  {
    description: "Image of glob show assured exchange rates",
    image: require("@images/sections/custom-service/3-exchange-rates.svg"),
    msg: "Assured Exchange Rates"
  },
  {
    description: "Image show circle verified change",
    image: require("@images/sections/custom-service/4-minimal-change.svg"),
    msg: "Minimal Change"
  },
  {
    description: "Image of clock and blocks representing transfers",
    image: require("@images/sections/custom-service/1-transfer-min.svg"),
    msg: "Transfer in under 30 mins to India**"
  },
  {
    description: "Image of eclipse with two sets representing movimentation",
    image: require("@images/sections/custom-service/2-transfer-move.svg"),
    msg: "Transfers on the move"
  },
  {
    description: "Image of glob show assured exchange rates",
    image: require("@images/sections/custom-service/3-exchange-rates.svg"),
    msg: "Assured Exchange Rates"
  },
  {
    description: "Image show circle verified change",
    image: require("@images/sections/custom-service/4-minimal-change.svg"),
    msg: "Minimal Change"
  },
]

export default class CustomService extends Component {
  render() {
    const settings = {
      className: "w-full flex gap-x-1 md:gap-x-3",
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      speed: 450,
      pauseOnHover: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 400,
          settings: {
            className: "center",
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }

    return (
      <Slider {...settings}>
        {sliderCustomService.map((content, index) => (
          <div key={index} className="relative">
            <div className="flex items-center gap-1 lg:gap-3 bg-blackBlue py-1 md:py-3 lg:py-7 rounded-md max-w-[95%]">
              <Image
                src={content.image}
                alt={content.description}
                className="px-1"
              />
              <h3 className="text-white text-sm md:text-base lg:text-xl font-medium inline">{content.msg}</h3>
            </div>
          </div>
        ))}
      </Slider>
    )
  }
}