import React from 'react'
import { image10, image11, swiggle } from '../assets'
import { services } from '../constants'
import ServiceCard from './ServiceCard'

const OurServices = () => {
  return (
    <div className=' desktop:w-full mt-[1000px] w-full mobile:w-full tablet:w-full'>
       <h1 className=' relative  flex desktop:left-[1%]  mobile:left-[31.5%] tablet:left-[75px]  text-center justify-center'>Our</h1>
      <img className='relative w-[110px] flex h-3 desktop:left-[3%]  mobile:left-[20%]  tablet:left-[52px]  ml-[45%]' src={swiggle} alt="swiggle" />
      <h1 className=' desktop:left-[1%] relative flex justify-center  mobile:left-[32%] tablet:left-[75px]'>Services</h1>
    <div className='mt-[80em] w-full h-screen mobile:w-full  mobile:right-10'>
      <ServiceCard className=""  />
    </div>
    </div>
  )
}

export default OurServices