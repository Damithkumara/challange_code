import React from 'react'
import Element from 'react-scroll/modules/components/Element';
import Htmlprbar from '../components/progressbar/Htmlprbar';
import Cssprbar from '../components/progressbar/Cssprbar';
import Phppgrbar from '../components/progressbar/Phppgrbar';
import Csharpprbar from '../components/progressbar/Csharpprbar';
import Sqlprbar from '../components/progressbar/Sqlprbar';
import Sasspgbar from '../components/progressbar/Sasspgbar';
import Cppprbar from '../components/progressbar/Cppprbar';
import Javaprbar from '../components/progressbar/Javaprbar';
import Jsprbar from '../components/progressbar/Jsprbar';
import Pythonpgbar from '../components/progressbar/Pythonpgbar';
import Reactprbar from '../components/progressbar/Reactprbar';
import Nextpgbar from '../components/progressbar/Nextpgbar';
import Nodeprbar from '../components/progressbar/Nodeprbar'

function Services() {
  return (
      <Element id="service" name="service" style={{marginBottom:"40px"}}>
           
        <div className='w-full my-40 h-auto flex flex-col justify-center items-center mb-5 mt-10'>
            <h1 className='text-black text-6xl font-bold text-center'>
                My Expertise
            </h1>
        </div>
        <div >
             <h2 style={{marginRight:"100px" , marginLeft:"100px", fontWeight:"bold"}}>HTML5</h2>
             <Htmlprbar/>
        </div>

        <div >
             <h2 style={{marginRight:"100px" , marginLeft:"100px", fontWeight:"bold"}}>CSS3</h2>
             <Cssprbar/>
        </div>

        <div >
             <h2 style={{marginRight:"100px" , marginLeft:"100px", fontWeight:"bold"}}>PHP</h2>
             <Phppgrbar/>
        </div>

        <div >
             <h2 style={{marginRight:"100px" , marginLeft:"100px", fontWeight:"bold"}}>C#</h2>
             <Csharpprbar/>
        </div>

        <div >
             <h2 style={{marginRight:"100px" , marginLeft:"100px", fontWeight:"bold"}}>SQL</h2>
             <Sqlprbar/>
        </div>

        <div >
             <h2 style={{marginRight:"100px" , marginLeft:"100px", fontWeight:"bold"}}>SaSS</h2>
             <Sasspgbar/>
        </div>

        <div >
             <h2 style={{marginRight:"100px" , marginLeft:"100px", fontWeight:"bold"}}>C++</h2>
             <Cppprbar/>
        </div>

        <div >
             <h2 style={{marginRight:"100px" , marginLeft:"100px", fontWeight:"bold"}}>Java</h2>
             <Javaprbar/>
        </div>

        <div >
             <h2 style={{marginRight:"100px" , marginLeft:"100px", fontWeight:"bold"}}>JavaScript</h2>
             <Jsprbar/>
        </div>

        <div >
             <h2 style={{marginRight:"100px" , marginLeft:"100px", fontWeight:"bold"}}>Python</h2>
             <Pythonpgbar/>
        </div>
        <div >
             <h2 style={{marginRight:"100px" , marginLeft:"100px", fontWeight:"bold"}}>React JS</h2>
             <Reactprbar/>
        </div>
        <div >
             <h2 style={{marginRight:"100px" , marginLeft:"100px", fontWeight:"bold"}}>Next JS</h2>
             <Nextpgbar/>
        </div>
        <div >
             <h2 style={{marginRight:"100px" , marginLeft:"100px", fontWeight:"bold"}}>Node JS</h2>
             <Nodeprbar/>
        </div>

    </Element>
  )
}

export default Services