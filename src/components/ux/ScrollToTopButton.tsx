"use client"

import { useEffect } from "react"

export function ScrollToTopButton() {
  let styleBtn = "fixed bottom-5 right-7 z-90 flex items-center bg-white text-sm text-blackBlue px-2 py-1 rounded-2xl font-medium"

  function eventScroll() {
    window.addEventListener("scroll", () => {
      let scroll = window.scrollY > (window.innerHeight + 20)
      let elementBtn = scroll === true ? `block ${styleBtn}` : `hidden ${styleBtn}`
      document.getElementById("sttb")?.setAttribute("class", elementBtn)
    })
  }

  useEffect(() => {
    eventScroll()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleClick() {
    const element = document.getElementById("home")
    element?.scrollIntoView({behavior: "smooth"})
  }

  return (
    <button onClick={handleClick} id="sttb">
      SCROLL TO TOP
      <span className="material-symbols-outlined text-md rounded-3xl py-2 px-2 ml-1 text-white bg-primary hover:bg-blackBlue/50">arrow_upward</span>
    </button>
  )
}