import React from 'react'
import tring from '../assets/triangulo.png'
import polka from '../assets/polka.png'
import doctor from '../assets/docBob.png'
import doctorTree from '../assets/doctorTree.jpg'
import styles from '../styles'
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

function AboutUs() {
  const backgroundImageStyle = {
    backgroundImage: `url("../../images/bush.png")`
  };
  return (
    <>
      <Helmet>
        <title>Sobre Nosotros - Optiaudio - Clínica Optometría y Audiología</title>
        <meta name="description" content="Aprenda más sobre Optiaudio, nuestra clínica de optometría y audiología en Heredia. Descubra nuestra misión, valores y compromiso con la salud visual y auditiva." />
        <link rel="canonical" href="http://localhost:5173/sobreNosotros" />
        <meta property="og:title" content="Sobre Nosotros - Optiaudio - Clínica de Optometría y Audiología en Heredia" />
        <meta property="og:description" content="Aprenda más sobre Optiaudio, nuestra clínica de optometría y audiología en Heredia. Descubra nuestra misión, valores y compromiso con la salud visual y auditiva." />
        <meta property="og:url" content="http://localhost:5173/sobre-nosotros" />
        <meta property="og:image" content="http://localhost:5173/path_to_your_logo.png" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <section className={`h-full w-full py-10 my-32      ${styles.paddingXUs} relative`}>
            <div className='flex flex-row-reverse '>
              <img src={polka} title="polka patter" alt='polka patter'  className=' z-[-2] object-contain md:block hidden absolute top-1/2 right-36 transform  -translate-y-1/2'  />
              <div className='lg:max-w-[60%] w-full md:mr-auto z-10'>
                <h1 className='text-black font-bold text-3xl mb-10'>Quienes Somos</h1>
                <p className='md:mt-8 text-sm md:text-base max-w-xl w-full text-darkColor '>En esta clínica, no solo nos preocupamos por la corrección de la visión y la audición, sino que también nos esforzamos por comprender las <strong>necesidades</strong> únicas de cada <strong>individuo</strong>.
      
                  Si busca atención profesional, personalizada y de calidad en óptica y audiología, confíe en nosotros. En cada consulta, nos esforzamos por mantener los más altos estándares de excelencia en el cuidado de la visión y la audición.</p>
              </div>
              <img
                alt='triangulo azul'
                title='triangulo azul'
                src={tring}
                className='absolute  h-full top-8 z-[-1] hidden sm:block right-64  transform rotate-180'
              />
            </div>
          </section>

          <section className=' bg-secondary/60 w-full md:py-8'>
            <div className={`${styles.paddingXUs}  m-auto w-full lg:flex lg:flex-row-reverse py-5 items-center `}>
            <motion.div
                className='xl:max-w-[50%] md:max-w-[45%]'
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.7 }} 
              >
                <h2 className='font-bold text-darkColor'>Nuestro Proposito</h2>
                <h3 className='font-bold text-xl mt-5'>Misión</h3>
                <p>Es un centro de servicios de óptica y audiología , con el propósito de atender a la familia costarricense con servicios y productos de alta calidad.</p>
                <h3 className='font-bold text-xl mt-5'>Visión</h3>
                <p>Ofrecer servicios evaluaciones auditivas y visuales con equipos de alta gama , dando un servicio profesional y líder en nuestro país.</p>
                <h3 className='font-bold text-xl mt-5'>Valores</h3>
                <p>Excelencia, calidad, personalización, ética, accesibilidad y empatía para brindar atención integral en optometría y audiología a nuestros pacientes.</p>
              </motion.div>
            <motion.img
                src={doctor}
                alt='doctor'
                title='doctor'
                className='mx-auto w-full h-full max-w-[500px] xl:max-w-[500px] object-cover relative '
                initial={{ opacity: 0, y: 50 }} // Initial state of the animation
                animate={{ opacity: 1, y: 0 }} // Final state of the animation
                transition={{ duration: 0.7 }} // Controls the duration of the animation
              />


          
            </div>
          </section>

          <section className='text-center max-w-[80%]  md:max-w-[60%] m-auto py-5 md:py-28'>
            <h2 className='font-bold text-2xl text-darkColor'>Nuestra Historia</h2>
            <p className='mt-4 text-darkColor'>En medio de una crisis financiera mundial. Se da la oportunidad de tener un pequeño alquiler por horas de un consultorio en los inicios del centro médico San Joaquín, en San Joaquín de flores en Heredia, cuando solo contaba con 3 especialidades médicas.
              En el año 2010, se inicia equipando con cabina sonoamortiguada.<br /><br /> En el año 2011 se inicia con equipamiento de impedanciometría. Así continuo el servicio de audiología por varios años.
              En el  año 2013, se inicia en los primeros pasos de dar apoyo como optometrista del servicio de oftalmología y se realiza la compra del equipo básico de oftalmología
              <br /><br />Actualmente en 2023 se dan los primeros pasos para dar un servicio integral de óptica, audiología y oftalmología, todo en una sintonía ,para dar soporte a dos especialistas de oftalmología y dos especialistas en otorrinolaringología en la actualidad.
            </p>
          </section>

          <section className="w-full h-full px-5 py-20 " style={backgroundImageStyle}>
            <div className='md:w-[60%] sm:h-96 h-full bg-white m-auto sm:flex sm:flex-row-reverse p-10 rounded-2xl shadow-2xl shadow-black'>
              <div className='mx-auto sm:w-[50%]'>
                <h2 className='font-bold text-2xl text-center '>Doctora Natalia Valenciano</h2>
                <h3>Especialidad: Oftalmología, Otología </h3>
                <h3>Años de experiencia: 10</h3>
              </div>
              <img src={doctorTree} className='rounded-2xl sm:w-[45%] w-full' loading='lazy' alt='Doctora de la clínica' title='Doctora de la clínica' />
            </div>

          </section>
        </div>
      </div>
    </>
  )
}

export default AboutUs