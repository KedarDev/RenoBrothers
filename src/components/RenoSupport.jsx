import React from 'react'
import { RenoAssisstent } from '../assets';
import Chatbot from "../../src/components/Chatbot";

const RenoSupport = () => {
  return (
  <div className='w-full justify-end'>
    <img className="fixed bottom-0 right-0 w-[80px] h-[80px]" src={RenoAssisstent} alt="" />

    <Chatbot />
  </div>
  )
}

export default RenoSupport