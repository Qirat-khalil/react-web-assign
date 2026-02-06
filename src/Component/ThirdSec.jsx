// import React from 'react'
// import Button from './Button'
// import Container from './Container'
// import img from '../assets/second-sec-img.png'

// const ThirdSec = () => {
//     return (
//         <>
//             <Container>
//                 <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-18 justify-center items-center'>
//                     {/* left side */}
//                   {/* <div className=''> */}
//                       <div className=''>
//                         <Button name="Our Promise" className="bg-[#dcfbfd] rounded text-lg  text-[#0CBBC7]" />
//                         <h3 className='mt-8 font-bold text-4xl'>Tool built for people.</h3>
//                         <p className='mt-5 text-lg'>Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom.
//                             <br /> <br />
//                             Circle has 100+ integrations with tools you already use and love.</p>
//                     </div>

//                     {/* right side */}

//                     <div className='w-[400px] h-[400px] flex justify-end bg-amber-700 ms-50 items-end'>
//                         <img src={img} alt="" className='h-full w-full' />
//                     </div>

//                   </div>
//                 {/* </div> */}
//             </Container>
//         </>
//     )
// }

// export default ThirdSec




















import React from 'react'
import Button from './Button'
import Container from './Container'
import img from '../assets/second-sec-img.png'

const ThirdSec = () => {
    return (
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-12 items-center px-4 md:px-8'>
                {/* Left */}
                <div className='text-center'>
                    <Button name="Our Promise" className="bg-[#dcfbfd] rounded text-lg text-[#0CBBC7] " />
                    <h3 className='mt-8 font-bold text-4xl'>Tool built for people.</h3>
                    <p className='mt-5 text-lg'>
                        Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom.
                        <br /><br />
                        Circle has 100+ integrations with tools you already use and love.
                    </p>
                </div>

                {/* Right */}
                <div className='flex md:justify-end md:items-end w-full h-auto mt-8 md:mt-0 justify-center items-center'>
                    <img src={img} alt="tool" className='w-3/4 md:w-full lg:w-[400px] h-auto object-contain' />
                </div>
            </div>
        </Container>
    )
}

export default ThirdSec
