import React, { useState, useRef } from "react"
import angleBlue from "../assets/angleBlue.png"
const Accordion = (props) => {
  const [isOpened, setOpened] = useState(props.isOpen)
  const [height, setHeight] = useState("0px")
  const contentElement = useRef(null)

  const HandleOpening = () => {
    setOpened(!isOpened)
    setHeight(!isOpened ? `${contentElement.current.scrollHeight}px` : "0px")
  }

  return (
    <button onClick={HandleOpening} className={`border h-auto w-full bg-white border-stone-950 md:mb-3`}>
    <div className={" py-2 px-2 flex justify-between align-middle items-center"}>
      <h4 className="font-semibold text-xs text-[#212529] text-left md:text-base">¿{props.title}?</h4>
      <span className={`float-right transform h-auto w-5 ${isOpened ?
        'rotate-180' : 'rotate-0'} transition-transform duration-300`}>
        <img src={angleBlue}/>
      </span>
    </div>
    <div
      ref={contentElement}
      style={{ height: height }}
      className=" overflow-hidden text-left transition-all duration-200"
    >
      <p className="px-3 pb-2 text-xs text-left text-[#212529] sm:text-sm ">{props.data}</p>
    </div>
  </button>
  )
}

export default Accordion