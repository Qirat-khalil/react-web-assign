
import React from 'react'

const Button = ({ name, className }) => {
  return (
    <button
      className={`
        px-8 py-2
        whitespace-nowrap
        hover:scale-105 transition
        inline-block
        ${className}
      `}
    >
      {name}
    </button>
  )
}

export default Button
