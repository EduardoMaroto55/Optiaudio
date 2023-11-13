import React from 'react'

const Button = (props) => {

  return (
    <button id={props.id} onClick={props.onClick} className={`${props.tailwindClass} px-4 h-9 border-2 font-bold    hover:bg-secondary hover:text-white`}>{props.text}</button>
  )
}

export default Button