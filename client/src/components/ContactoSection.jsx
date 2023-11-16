import React, {useEffect, useState} from 'react'
import mapLocation from "../assets/mapLocation.png"
import { Link } from 'react-router-dom'
import Arrow from "../assets/Arrow.png"
const Contacto = () => {
  

  return (
     <section data-test="contactSection" className="w-full  md:h-[100%] flex sm:flex-row flex-col justify-center items-center sm:py-20 py-10">
        <div><h2 className='font-bold text-2xl sm:mb-64 md:text-3xl '>¡Contáctanos!</h2></div>
        <div><img src={Arrow} alt='Flecha' title="Flecha" loading='lazy' className='w-20 h-10 mb-40 mr-10 ml-10 sm:block hidden'/></div>
        <div className='h-full'>
        <Link id="btn-contact" title='Contacto' to='/contacto'>
        <img src={mapLocation} alt='Mapa de ubicación de la clínica' title='Clinic ubicación Mapa' className='border border-secondary w-full h-full sm:h-[25rem] bg-cover bg-center'/>
        <span className="sr-only">Click para ir a la página de contacto</span>
        </Link></div>

    </section>
  )
}

export default Contacto