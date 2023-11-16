import React from 'react'
import doc1 from "../assets/doctorTree.jpg"
import Button from './Button'
import {Link} from 'react-router-dom'
import { motion,useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const AboutUs = () => {
     const animation = useAnimation();
     const [ref, inView] = useInView({
    triggerOnce: true, //
  });
  React.useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [animation, inView]);
  return (
     <motion.section
     ref={ref}
      data-test="aboutUsSection"
      className='max-w-[1140px] m-auto w-full md:flex my-10 md:py-20'
      initial={{ opacity: 0, y: 100 }}
      animate={animation}
      transition={{ duration: 0.8 }}
    >
        <div className='relative p-4'>
        <h2 className="font-bold text-center text-xl mb-2 md:mb-5 md:text-2xl">Conoce Nuestra Historia y Compromiso</h2>
              <p className='text-sm text-left md:text-base text-gray-700'>
              En nuestra clínica especializada en óptica y audiología, trascendemos las expectativas a través de años de dedicación. 
              Nuestra empresa es el resultado de una visión que combina experiencia y pasión.
              <br/><br/> Nuestra misión es proporcionar a cada paciente atención individualizada, tecnología de vanguardia y soluciones personalizadas. 
              </p>
             <Link id='btn-aboutUs' to="/sobreNosotros"><Button tailwindClass="bg-white border-secondary text-secondary mt-5 rounded" text="Leer más"/></Link>
        </div>
        <div className='relative p-4'>
            <img src={doc1} className='w-full max-w-3xl h-full object-cover relative' loading='lazy' alt='Doctora de la clínica'  title='Doctora de la clínica'/>
        </div>
        </motion.section>


  )
}

export default AboutUs