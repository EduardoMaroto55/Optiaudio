import React from 'react'
import { horario } from "../constants/index"
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { AiFillPhone } from 'react-icons/ai'
import { FaLocationDot } from 'react-icons/fa6'
import { HiOutlineMail } from 'react-icons/hi'
import EmailForm from '../components/EmailForm'
const Contact = () => {
  const [openHours, setOpenHours] = React.useState(horario);

  const openTime = openHours.map(time => (
    <li key={time.id} >{time.description}</li>
  ))

  return (
    <>
      <section className='p-20'>
        <h1 className='font-bold text-3xl ml-[20%] mb-10'>Contáctanos</h1>
        <div className="flex-[1.5] w-full flex flex-row flex-wrap mt-10 gap-10 md:mt-0 md:gap-32 justify-center lg:text-base">
          <div>
            <h4 className='text-lg md:text-xl font-bold mb-2'>Horario</h4>
            <ul className={`w-full text-left flex md:gap-2 flex-col  mb-2`}>
              {openTime}
            </ul>
          </div>
          <div className='w-fit'>
            <h4 className='text-lg  md:text-xl font-bold mb-2'>Contactos</h4>
            <ul className={`w-full text-left flex flex-col md:gap-3 mb-2`}>
              <li className='flex '><FaLocationDot size={26} className='text-black mr-3' />40101 Heredia, Heredia<br></br> Province, Costa Rica</li>
              <li className='flex'><BsWhatsapp size={26} className='text-black mr-2' />+506 8833 4513</li>
              <li className='flex'><AiFillPhone size={26} className='text-black mr-2' />+506 2265 3147</li>
              <li className='flex'><HiOutlineMail size={26} className='text-black mr-2' />optiaudio@gmail.com</li>
              <div className='flex gap-5'>
                <a href='https://www.instagram.com/optiaudiocr/'><BsInstagram size={25} /></a>
                <a href='https://www.facebook.com/optiaudiocr' ><BsFacebook size={25} /></a>
              </div>
            </ul>
          </div>
          <div>
              <EmailForm/>
            </div>
            
        </div>
        <iframe className='border border-secondary w-[50%] m-auto  bg-cover bg-center mt-20'src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.1684220522343!2d-84.1656086204594!3d10.002943064582826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fa413fddfee9%3A0x4de7d0383d9757d2!2sC.%20Los%20Pianguas%2C%20Heredia!5e0!3m2!1sen!2scr!4v1699387640321!5m2!1sen!2scr" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </>
  )
}

export default Contact