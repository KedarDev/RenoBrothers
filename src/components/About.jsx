import React from 'react'
import Qoute from './Qoute'
import { swiggle, theRenoText, FreeEstButton } from '../assets'

const About = () => {
  return (
    <div className='w-full h-screen grid relative'>
      <Qoute />
      <h1 className='flex pl-10'>About Us</h1>
      <img className='w-[110px] flex h-3 ml-9' src={swiggle} alt="swiggle" />
      <div className='w-full h-fit grid mt-10'>
      <img className="desktop:w-[800px] desktop:ml-[30%] w-full flex px-8 " src={theRenoText} alt="" />
      <p className=' desktop:text-[50px] desktop:leading-[50px] w-full px-2 grid leading-8 h-fit  py-8 text-[25px] text-center text-pretty font-semibold'>
      The essence of interior design will always be about people and how they live. It is about the realities of what 
      makes an attractive, civilized, meaningful environment and not about fashion or what’s in or what’s out. Almost all
      of us dream of owning a cozy and beautiful house since our childhood. Not only that we also imagine decorating our
      dream mansion with vivid colours and designs. We, JapJas Renovation Inc are well aware of this dream of yours and 
      also know the dilemma faced by most of you while opting for the appropriate interior designer and constructor. 
      While it comes to constructing a property.
      </p>
      <button className='flex justify-center '>
        <img src={FreeEstButton} alt="estbutton" />
      </button>
      </div>
    </div>
  )
}

export default About