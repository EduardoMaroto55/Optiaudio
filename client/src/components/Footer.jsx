import React from 'react'
import Logo from '../assets/logo.png'
import { horario, navLinks} from "../constants/index"
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { AiFillPhone } from 'react-icons/ai'
import { FaLocationDot } from 'react-icons/fa6'
import { HiOutlineMail } from 'react-icons/hi'
const Footer = () => {

  const [openHours, setOpenHours] = React.useState(horario);
  const [navLinksState, setNavLinksState] = React.useState(navLinks);

  const openTime = openHours.map(time => (
      <li key={time.id} >{time.description}</li>
  ))

  const navElements = navLinksState.map(nav => (  
      <li key={nav.id} className='hover:text-secondary'><a id={`footerNav-${nav.id}`} href={nav.link}>{nav.title}</a></li>
  ))




  return (
    <section data-test="footerSection">
      <div className=" w-full overflow-hidden h-full sm:h-full flex-col  bg-[#343A40]">
        <div className='flex justify-between items-center max-w-5xl m-auto py-2'>
          <a id="btn-logoInicio" href='/inicio'><img src={Logo} alt='logo Optiaudio' className='w-48 '/></a>
          <div className='flex gap-5'>
            <a  id="instagramNav" href='https://www.instagram.com/optiaudiocr/' className='rounded-full p-2 bg-white hover:bg-secondary'><BsInstagram size={20} /></a>
            <a id="facebookNav" href='https://www.facebook.com/optiaudiocr' className='rounded-full p-2 bg-white  hover:bg-secondary'><BsFacebook size={20} /></a>
          </div>

        </div>
        <hr className="h-px border-0 dark:bg-gray-800 mb-4" />
        <div className="flex-[1.5] w-full flex flex-row flex-wrap mt-10 gap-10 md:mt-0 md:gap-32 justify-center lg:text-base text-white">
          <div>
            <h4 className='text-lg md:text-xl font-bold mb-2'>Horario</h4>
            <ul className={`w-full text-left flex md:gap-5 flex-col text-white/70 mb-2`}>
              {openTime}
            </ul>
          </div>
          <div >
            <h4 className='text-lg  md:text-xl font-bold mb-2'>Enlaces de interes</h4>
            <ul className={`w-full text-left flex flex-col md:gap-5  text-white/70 mb-2`}>
            {navElements}
            </ul>
          </div>
          <div className='w-fit'>
            <h4 className='text-lg  md:text-xl font-bold mb-2'>Contactos</h4>
            <ul className={`w-full text-left flex flex-col md:gap-5  text-white/70 mb-2`}>        
              <li className='flex '><FaLocationDot size={26} className='text-black mr-2'/>40101 Heredia, Heredia<br></br> Province, Costa Rica</li>
              <li className='flex'><BsWhatsapp size={26} className='text-black mr-2'/>+506 8833 4513</li>
              <li className='flex'><AiFillPhone size={26} className='text-black mr-2'/>+506 2265 3147</li>
              <li className='flex'><HiOutlineMail size={26} className='text-black mr-2'/>optiaudio@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-secondary w-full h-10 flex justify-end items-center'>
        <p className='text-white mr-10'>
          Copyright © 2023
        </p>
      </div>
    </section>
  )
}

export default Footer