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
                <div className="flex flex-col md:ml-20 mx-10 mt-10">
                    <h1 className="font-bold text-6xl text-left mb5">Hello,</h1>
                    <h1 className="font-bold text-6xl text-left mb5">I am Dhamith Kumara</h1>
                    <p className="text-left font-normal mb-5 flex-wrap mt-5">
                    I am following four years degree program in ICT(Hons). I have knowledge of OOP concepts and C, C++, C#, PHP, Dart, React JS as well as certified my knowledge experience with Graphic Design, Python, HTML, MS office Package, MySQL. I have ability to write clean and well documented code and excellent in complex problem-solving critical thinking skills, communication skills as well. I am currently working as Web Developer.

                    </p>

                    <a
                        href="#"
                        className="font-semibold text-white md:mt-2 mt-3 pt-5  bg-pink-500 rounded-md w-60 h-16 text-lg hover:bg-pink-600">
                        See My Portfolio !
                    </a>
                </div>
            </div>
        </div>
    );
}

export default homepage