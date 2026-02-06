
import React from 'react'
import Container from './Container'
import Button from './Button'
import image from '../assets/hero-img.png'
import bgimage from '../assets/bg-img.png'

const HeroSec = () => {
  return (
    
    <div className='bg-[#EFFEFF] bg-cover bg-center bg-no-repeat ' style={{ backgroundImage: `url(${bgimage})`}}>
    <Container>
    

      <div className="w-full mx-auto text-center " >

        {/* Text area */}
        <div className="flex flex-col items-center gap-6">

          <h1 className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-bold
            leading-tight
            mt-10
          ">
            A powerful online engagement  tool <br /> that’s intuitive and simple to use.
          </h1>

          <p className="
            text-gray-600
            max-w-2xl
            text-base
            sm:text-lg
          ">
            With stellar one-click reports and unmatched support, see how Circle will make a difference in your business.
          </p>

          <Button
            name="Get Started"
            className="font-bold text-white mb-8 bg-[#0CBBC7] px-8 py-3 text-lg  hover:scale-105 transition"
          />

        </div>

        {/* Image */}
        <img
          src={image}
          alt="hero"
          className="
            
            w-full
         max-w-7xl
            mx-auto
          "
        />

      </div>
    </Container>
  </div>
  )
}

export default HeroSec
