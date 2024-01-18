"use client"

export function ScrollToTopButton() {
  let scroll = true

  function handleClick() {
    const element = document.getElementById("home")
    element?.scrollIntoView({behavior: "smooth"})
  }

  return (
    <button onClick={handleClick} className={`${!scroll ? "hidden" : "block"} fixed bottom-5 right-7 z-90 flex items-center bg-white text-sm text-blackBlue px-2 py-1 rounded-2xl font-medium`}>
      SCROLL TO TOP
      <span className="material-symbols-outlined text-md rounded-3xl py-2 px-2 ml-1 text-white bg-primary hover:bg-blackBlue/50">arrow_upward</span>
    </button>
  )
}