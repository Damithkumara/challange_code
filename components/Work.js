import React from 'react'
import {Element} from "react-scroll";
import Image from "next/image";
import One from "../public/images/1.jpeg"
import Two from "../public/images/2.jpg"
import Third from "../public/images/3.jpg"
import Fourth from "../public/images/4.jpg"
import Five from "../public/images/5.jpg"
import Six from "../public/images/6.jpg"

function Work() {
  return (
    <Element id='work' name="work">
        <div className='w-full my-20 h-auto flex flex-col justify-center items-center'>
            <h2 className='text-black text-6xl font-bold text-center'>
                All Creative Works
            </h2>
            <div className='md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10 '>
                <div className='rounden w-80 h-60 shadow-xl relative'>
                    <Image src={One} alt="one" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer"/>
                </div>
                <div className='rounden w-80 h-60 shadow-xl relative'>
                    <Image src={Two} alt="two" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer"/>
                </div>
                <div className='rounden w-80 h-60 shadow-xl relative'>
                    <Image src={Third} alt="third" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer"/>
                </div>

            </div>

            <div className='md:flex sm:flex-col md:flex-row justify-center items-start md:gap-10 sm:pb-10 mt-10 '>
                <div className='rounden w-80 h-60 shadow-xl relative'>
                    <Image src={Fourth} alt="fourth" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer"/>
                </div>
                <div className='rounden w-80 h-60 shadow-xl relative'>
                    <Image src={Five} alt="five" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer"/>
                </div>
                <div className='rounden w-80 h-60 shadow-xl relative'>
                    <Image src={Six} alt="six" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer"/>
                </div>

            </div>
        </div>

        
    </Element>
  )
}

export default Work