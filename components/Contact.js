import React from 'react'
import {Element} from 'react-scroll'

function Contact() {
  return (
    <Element id='contact' name='contact'>
        <div >
            <div className='w-full my-20 h-auto flex flex-col justify-center items-center'>
                <h1 className='text-black text-6xl font-bold text-center'>
                    Contact
                </h1>
                <div className="flex justify-center text-center md:w-1/2 w-full my-5">
                    <input type="text" 
                    name="email-address" 
                    id="email-address" 
                    autoComplete="email" 
                    placeholder='your@email.com' 
                    className="mt-5 pb-1 w-full pl-8 rounded-tl-lg rounded-bl-lg text-black text-xl border-2 border-pink-400 h-10"/>
                    <button className="mt-5 text-xl w-36 h-10 bg-black text-white rounded-tr-lg rounded-br-lg hover:bg-pink-400">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </Element>
  )
}

export default Contact