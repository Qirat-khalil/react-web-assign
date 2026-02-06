// import React, { Children } from 'react'

// const Button = (props) => {
//   return (
//     <div className= {`px-8 text-center w-35 py-2 mt-5 ${props.className}`}>
//         {props.name}
//         {/* {Children} */}
//     </div>
//   )
// }

// export default Button



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
