import React from 'react'
import { image10, image11 } from '../assets'

const Qoute = () => {
  return (
    <div className=' mobile:w-[460px] object-cover absoulte grid grid-cols-2 gap-0 w-fit mt-[130px] mobile:mt-[-50px] h-screen  justify-center items-center content-center'>
      <div className=' shadow-lg mobile:mr-[50%] mobile:w-[100%] object-cover relative  align-middle justify-center w-[80%] h-[250px] ml-[30%] mobile:ml-[0%]  rounded-[15%] bg-primary'>
        <p className='  mobile:text-[10px] bg p-2 m-2 mt-5 leading-6  text-[25px] justify-center text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat molestiae reiciendis unde repellat nisi enim asperiores fugiat natus. Quo aut aspernatur fuga explicabo natus possimus esse obcaecati harum, quibusdam incidunt?</p>
      </div>
      <img className=' shadow-lg mobile:w-[100%] object-cover relative  w-[50%] h-[200px] mr-[190px] rounded-[10%]' src={image10} alt=''></img>
      <img className='shadow-lg object-cover relative w-[60%] mobile:w-[100%] mobile:h-fit  mobile:mt-[-10px] h-fit ml-[40%] mobile:ml-[0px] rounded-[5%]' src={image11} alt=''></img>
      <img className='shadow-lg  object-cover relative w-[60%] h-[200px] mobile:w-[100%] mobile:mt-[-27px] mt-[-55px] mr-[190px] rounded-[10%]' src={image10} alt=''></img>
    </div>
  
  )
}

export default Qoute