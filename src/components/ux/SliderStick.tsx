'use client'

import { Component } from "react"
import Image from "next/image";
import Slider from "react-slick"
import "material-symbols"

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

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  
  return (
    <span className={`${className}`} style={{...style}} onClick={onClick}>
      chevron_left
    </span>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  
  return (
    <span className={`${className}`} style={{...style}} onClick={onClick}>
      chevron_right
    </span>
  );
}

export default class MultipleItems extends Component {
  render() {
    const settings = {
      className: "m-auto max-w-7xl",
      infinite: true,
      slidesToShow: 10,
      slidesToScroll: 3,
      initialSlide: 0,
      autoplay: true,
      speed: 500,
      cssEase: "linear",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 10,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 920,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
    }
    
    return (
      <Slider {...settings}>
        {
          selectionsContent.map((content, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={content.image}
                alt={content.description}
              />
              <h5 className="text-2xl">{content.msg}</h5>
            </div>
          ))
        }
      </Slider>
    );
  }
}