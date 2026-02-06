import React from 'react'
import Button from './Button'

import tool1 from '../assets/tool1.png'
import tool2 from '../assets/tool2.png'
import tool3 from '../assets/tool3.png'
import tool4 from '../assets/tool4.png'
import tool5 from '../assets/tool5.png'
import tool6 from '../assets/tool6.png'
import Container from './Container'
import { Check } from "lucide-react";

const SecondSec = () => {

    const imgs = [
        { image: tool1 },
        { image: tool2 },
        { image: tool3 },
        { image: tool4 },
        { image: tool5 },
        { image: tool6 },
    ];




    return (
        <>
            <Container>
                <div className=' flex flex-col justify-center items-center mt-8 py-8 mb-15 px-4'>

                    <div className='py-6'>
                        <Button name="Our Customer" className="bg-[#dcfbfd] rounded text-lg text-[#0CBBC7]" />
                    </div>

                    <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center mb-10'>
                        Trusted by <span className='font-bold'>100,000+ customers</span> in 90+ countries
                    </h2>

                    {/* ✅ Responsive logos */}
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  mt-12 mb-10 w-full place-items-center'>
                        {imgs.map((img, index) => (
                            <img key={index} src={img.image} alt="logo" className="w-20 md:w-30 object-contain" />
                        ))}
                    </div>

                    {/* ✅ Responsive stats */}
                    <div className='flex flex-col md:flex-row items-center text-center md:text-left mt-10 gap-5'>

                        <p className='md:text-md  lg:text-lg flex items-center gap-2'>
                            <Check className='text-[#0CBBC7] w-5 h-5' />
                            <span className='text-[#0CBBC7] font-bold md:text-md lg:text-lg'>18281</span>
                            signed up last month
                        </p>

                        <p className='md:text-md  lg:text-lg flex items-center gap-2'>
                            <Check className='text-[#0CBBC7] w-5 h-5' />
                            <span className='text-[#0CBBC7] font-bold  md:text-md lg:text-lg'>GDPR</span> &
                            <span className='text-[#0CBBC7] font-bold  md:text-md lg:text-lg'>CPA</span> ready
                        </p>

                        <p className='md:text-md  lg:text-lg flex items-center gap-2'>
                            <Check className='text-[#0CBBC7] w-5 h-5' />
                            <span className='text-[#0CBBC7] font-bold  md:text-md lg:text-lg'>Leader@G2</span>
                            summer
                        </p>

                    </div>
                </div>

            </Container>
        </>
    )
}

export default SecondSec