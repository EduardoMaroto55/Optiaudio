import React from 'react'
import doc1 from "../assets/doctorTree.jpg"
import Button from './Button'
import {Link} from 'react-router-dom'
const AboutUs = () => {
  return (
   <div className='max-w-[1140px] m-auto w-full md:flex py-5 md:py-20'>
        <div className='relative p-4'>
        <h1 className="font-bold text-center text-xl mb-2 md:mb-5 md:text-2xl">Conoce Nuestra Historia y Compromiso</h1>
              <p className='text-sm text-left md:text-base text-gray-700'>
              En nuestra clínica especializada en óptica y audiología, trascendemos las expectativas a través de años de dedicación. 
              Nuestra empresa es el resultado de una visión que combina experiencia y pasión.
              <br/><br/> Nuestra misión es proporcionar a cada paciente atención individualizada, tecnología de vanguardia y soluciones personalizadas. 
              </p>
             <Link to="/sobreNosotros"><Button tailwindClass="bg-white border-secondary text-secondary mt-5 rounded" text="Leer más"/></Link>
        </div>
        <div className='relative p-4'>
            <img src={doc1} className='w-full max-w-3xl h-full object-cover relative '/>
        </div>
   </div>


  )
}

export default AboutUs