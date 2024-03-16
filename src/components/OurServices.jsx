import React from 'react'
import { image10, image11, swiggle } from '../assets'
import { services } from '../constants'
import ServiceCard from './ServiceCard'

const OurServices = () => {
  return (
    <div className='mt-[1000px]'>
       <h1 className=' relative flex justify-center'>Our</h1>
      <img className='relative w-[110px] flex h-3   ml-[45%]' src={swiggle} alt="swiggle" />
      <h1 className=' relative flex justify-center'>Services</h1>
    <div className='mt-[80em] w-full h-screen'>
      <ServiceCard className=""  />
    </div>
    </div>
  )
}

export default OurServices