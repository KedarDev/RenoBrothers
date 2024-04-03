import React from 'react'
import { image10, image11 } from '../assets'

const Qoute = () => {
  return (
    <div className=' desktop:w-full  tablet:w-[1200px]  laptop:h-screen tablet:place-content-center tablet:place-items-center tablet:h-screen mobile:w-[498px] mobile:p-2 mobile:ml-1 object-cover absoulte grid grid-cols-2 gap-0 w-fit tablet:pr-[100px] mt-[130px] mobile:mt-[-50px] h-screen  justify-center items-center content-center'>
      <div className=' desktop:h-[400px] desktop:w-[600px] laptop:w-full  tablet:w-full shadow-lg mobile:mr-[50%] mobile:w-[100%] object-cover relative  align-middle justify-center w-[80%] h-[250px] ml-[30%] mobile:ml-[0%]  rounded-[15%] bg-primary'>
        <p className=' desktop:text-[40px]  tablet:w-full   mobile:text-[10px] bg p-2 m-2 mt-5 leading-6 desktop:leading-[40px]  text-[25px] justify-center text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat molestiae reiciendis unde repellat nisi enim asperiores fugiat natus. Quo aut aspernatur fuga explicabo natus possimus esse obcaecati harum, quibusdam incidunt?</p>
      </div>
      <img className=' desktop:h-[400px] desktop:w-[500px] tablet:w-full  shadow-lg mobile:w-[100%] object-cover relative  w-[50%] h-[200px] desktop:ml-[-432px] tablet:ml-[290px] mr-[190px] desktop:mr-0 rounded-[10%]' src={image10} alt=''></img>
      <img className=' desktop:w-[500px] desktop:mt-[-35px] shadow-lg object-cover relative w-[60%] tablet:w-full mobile:w-[100%] mobile:h-fit  mobile:mt-[-10px] h-fit tablet:ml-[30%] ml-[40%] mobile:ml-[0px] rounded-[5%]' src={image11} alt=''></img>
      <img className='  desktop:h-[400px] desktop:w-[500px] shadow-lg  object-cover relative w-[60%] h-fit tablet:w-full mobile:w-[100%] mobile:mt-[-27px] mt-[-55px] desktop:mr-[1290px] desktop:mt-[-5px]  mr-[190px] rounded-[10%] tablet:ml-[84%]' src={image10} alt=''></img>
    </div>
  
  )
}

export default Qoute