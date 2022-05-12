import React from 'react'
import Image from 'next/image'
import heroImage from '../public/images/heroimg.jpg'

function homepage() {
  return (
    <div>
      <div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28">
        {/* for heroImage */}
        <div className="w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block">
          <Image
            src={heroImage}
            alt="heroImage"
            layout="fill"
            objectFit="cover"
            className="rounded-full cursor-pointer hidden md:block"
          />
        </div>
        {/* for summery */}
        <div className='flex flex-col md:ml-20 mx-10 mt-10'>
            <h1>
                
            </h1>
        </div>
      </div>
    </div>
  );
}

export default homepage