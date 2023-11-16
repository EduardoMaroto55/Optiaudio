import React from 'react'
import { services } from "../constants/index"
import Button from './Button'
import { Link } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const Servicios = () => {
  const blackGradient = {
    background: ' linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)'
  }
  const [imageInfo, setImageInfo] = React.useState(services)
 const animation = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.9 },
      });
    }
  }, [animation, inView]);


  const imageCards = imageInfo.map(card => (
    <div key={card.id} className={`w-full max-w-sm text-left shadow-lg m-2 bg-white flex flex-col  items-center rounded-3xl`}>
      <img src={card.img} alt={`gía|
Conoce Nuestra Historia y Compromiso
En nuestra clínica especializada en óptica y audiología, trascendemos las expectativas a través de años de dedicación. Nuestra empresa es el resultado de una visión que combina experiencia y pasión.

Nuestra misión es proporcionar a cada paciente atención individualizada, tecnología de vanguardia y soluciones personalizadas.

Leer más
Doctora de la clínica
Servicios que ofreceServicio - ${card.title}`} title={`Servicio - ${card.title}`} className="w-full h-[60%] rounded-t-3xl" loading="lazy" />
      <div className="px-4 py-3">
        <h4 className='text-lg font-extrabold text-center mb-2'>{card.title}</h4>
        <p className="text-base mb-2 text-gray-700">{card.description}</p>
      </div>
    </div>
  ),[])

  return (
    <motion.section
    ref={ref}
    data-test="servicesSection"
    style={blackGradient}
    className="max-w-[1920px] m-auto w-full  h-full py-10 "
    initial={{ opacity: 0, y: 50 }}
    animate={animation}
  >
      <h2 className='text-white text-center text-3xl font-extrabold'>Servicios que ofrecemos</h2>
      <h3 className='text-[#5ABEE7] text-center text-sm'>Comprometidos con tu salud y bienestar</h3>
      <div className={`flex flex-col sm:flex-row sm:items-stretch justify-center items-center sm:gap-10  my-5 `}>
        {imageCards}
      </div>
      <div className="flex justify-center mt-4">
      <Link id='btn-services' title='Servicios' to="/servicios"><Button tailwindClass="border-secondary bg-white text-secondary rounded text-lg" text="Ver Todos"/></Link>
      </div>
      </motion.section>

  )
}

export default Servicios