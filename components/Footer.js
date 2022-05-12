import React from 'react'
import {AiTwotoneHeart} from "react-icons/ai"

function Footer() {
  return (
    <div className='w-full h-16 bg-gray-50 flex justify-center items-center'>
        <h1 className='text-xl text-black mr-2'>
            Made By
        </h1>
        <AiTwotoneHeart className='text-pink-500'/>
        <h1 className='text-xl text-black ml-2'>Created By
            <a href='#' className='cursor-point font-semibold text-pink-400 hover:text-pink-500'>DKOFFICIAL</a>
        </h1>
    </div>
  )
}

export default Footer