

// import React, { useState } from 'react'
// import image from '../assets/logo-circle.png'
// import { Link, Menu, X } from 'lucide-react'
// import Container from './Container'
// import Button from './Button'

// const Header = () => {
//     const [toggle, setToggle] = useState(false)

//     return (
//        <Container>
//          <header className=" relative mb-8 p-3">

//             {/* ===== TOP BAR ===== */}
//             <div className="flex justify-between items-center px-6 md:px-8 py-3">

//                 {/* Logo */}
//                 <img
//                     src={image}
//                     alt="logo"
//                     className="w-25 h-8 md:absolute  md:left-1/2 md:-translate-x-1/2 md:ms-4"
//                 />

//                 {/* Left menu (desktop) */}
//                 <ul className="hidden  md:flex md:gap-4 lg:gap-6 font-semibold">
//                     <li>Feature</li>
//                     <li>Pricing</li>
//                     <li>Resource</li>
//                     <li>Testimonial</li>
//                 </ul>

//                 {/* Right menu (desktop) */}
//                 <div className="hidden md:flex  items-center gap-4 font-semibold">
//                  <ul className='hidden md:flex md:gap-3 lg:gap-6 '>
//                        <li>Company</li>
//                     <li>Contact</li>
//                  </ul>
//                  <Button name="Logout" className='border border-[#3AC8D1] text-lg  text-[#0CBBC7] hover:scale-105 transition'/>
                    
//                 </div>

//                 {/* Mobile menu button */}
//                 <button
//                     onClick={() => setToggle(prev => !prev)}
//                     className="md:hidden"
//                 >
//                     {toggle ? <X size={28} /> : <Menu size={28} />}
//                 </button>

//             </div>

//             {/* ===== MOBILE DROPDOWN ===== */}
//             {toggle && (
//                 <div className="md:hidden bg-gray-300 px-6 py-5 items-center">
//                     <ul className="flex flex-col gap-4 font-semibold items-center">
//                         <li>Feature</li>
//                         <li>Pricing</li>
//                         <li>Resource</li>
//                         <li>Testimonial</li>
//                         <li>Company</li>
//                         <li>Contact</li>
//                         <button className="border-2 px-4 py-2 w-fit border-[#3AC8D1]  text-[#3AC8D1]">
//                             Logout
//                         </button>
//                     </ul>
//                 </div>
//             )}

//         </header>
//        </Container>
//     )
// }

// export default Header

















// import React, { useState } from 'react'
// import image from '../assets/logo-circle.png'
// import { Link, Menu, X } from 'lucide-react'
// import Container from './Container'
// import Button from './Button'

// const Header = () => {
//     const [toggle, setToggle] = useState(false)

//     return (
//        <Container>
//          <div className=" relative flex items-center justify-between md:justify-center px-6 md:px-8 py-3">

//     {/* Left menu (desktop) */}
//     <ul className="hidden md:flex gap-4 lg:gap-10 font-semibold absolute left-8">
//         <li>Feature</li>
//         <li>Pricing</li>
//         <li>Resource</li>
//         <li>Testimonial</li>
//     </ul>

//     {/* Logo */}
//     <img
//         src={image}
//         alt="logo"
//         className=" w-18 h-8 lg:w-28 lg:h-10 mx-auto md:mx-0"
//     />

//     {/* Right menu (desktop) */}
//     <div className="hidden md:flex items-center gap-6 font-semibold absolute right-8">
//         <ul className="flex gap-4">
//             <li>Company</li>
//             <li>Contact</li>
//         </ul>
//         <Button name="Logout" className='border-2 border-[#3AC8D1] text-[#3AC8D1]' />
//     </div>

//     {/* Mobile menu button */}
//     <button
//         onClick={() => setToggle(prev => !prev)}
//         className="md:hidden"
//     >
//         {toggle ? <X size={28} /> : <Menu size={28} />}
//     </button>

//        {/* ===== MOBILE DROPDOWN ===== */}
//             {toggle && (
//                 <div className="md:hidden bg-gray-300 px-6 py-5 items-center">
//                     <ul className="flex flex-col gap-4 font-semibold items-center">
//                         <li>Feature</li>
//                         <li>Pricing</li>
//                         <li>Resource</li>
//                         <li>Testimonial</li>
//                         <li>Company</li>
//                         <li>Contact</li>
//                         <button className="border-2 px-4 py-2 w-fit border-[#3AC8D1]  text-[#3AC8D1]">
//                             Logout
//                         </button>
//                     </ul>
//                 </div>
//             )}

// </div>

//        </Container>
//     )
// }

// export default Header

























import React, { useState } from 'react'
import image from '../assets/logo-circle.png'
import { Link, Menu, X } from 'lucide-react'
import Container from './Container'
import Button from './Button'

const Header = () => {
    const [toggle, setToggle] = useState(false)

    return (
       <Container>
         <header className="relative mb-8 p-3">

            {/* ===== TOP BAR ===== */}
            <div className="flex justify-between items-center px-6 md:px-0 md:-ms-8 lg:ms-0 py-3 relative">

                {/* Logo (centered always) */}
                <img
                    src={image}
                    alt="logo"
                    className="w-24 h-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-20 md:h-8 lg:w-28 lg:h-12"
                />

                {/* Left menu (desktop) */}
                <ul className="hidden md:flex md:gap-3 font-semibold">
                    <li>Feature</li>
                    <li>Pricing</li>
                    <li>Resource</li>
                    <li>Testimonial</li>
                </ul>

                {/* Right menu (desktop) */}
                <div className="hidden md:flex items-center gap-6 font-semibold">
                    <ul className='flex gap-3'>
                        <li>Company</li>
                        <li>Contact</li>
                    </ul>
                    <Button 
                        name="Logout" 
                        className='border border-[#3AC8D1] text-lg text-[#0CBBC7] hover:scale-105 transition'
                    />
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setToggle(prev => !prev)}
                    className="md:hidden z-10"
                >
                    {toggle ? <X size={28} /> : <Menu size={28} />}
                </button>

            </div>

            {/* ===== MOBILE DROPDOWN ===== */}
            {toggle && (
                <div className="md:hidden bg-gray-300 px-6 py-5">
                    <ul className="flex flex-col gap-4 font-semibold items-center">
                        <li>Feature</li>
                        <li>Pricing</li>
                        <li>Resource</li>
                        <li>Testimonial</li>
                        <li>Company</li>
                        <li>Contact</li>
                        <button className="border-2 px-4 py-2 w-fit border-[#3AC8D1] text-[#3AC8D1]">
                            Logout
                        </button>
                    </ul>
                </div>
            )}

        </header>
       </Container>
    )
}

export default Header






























