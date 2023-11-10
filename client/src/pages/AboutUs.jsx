import React from 'react'
import tring from '../assets/triangulo.png'
import polka from '../assets/polka.png'
import doctor from '../assets/doctor2.jpg'
import doctorTree from '../assets/doctorTree.jpg'
import styles from '../styles'

function AboutUs() {
  const backgroundImageStyle = {
    backgroundImage: `url("../../bush.png")`
};
  return (
    <>
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <section className={`h-full w-full py-10 md:py-20 ${styles.paddingXUs} relative`}>
            <div className='flex flex-row-reverse'>
              <img src={polka} alt='polka patter' className='object-contain md:block hidden absolute top-1/2 right-36 transform z-0 -translate-y-1/2' />
              <div className='lg:max-w-[60%] w-full md:mr-auto z-10'>
                <h1 className='text-black font-bold text-3xl '>Sobre Nosotros</h1>
                <p className='md:mt-8 mt-3 text-sm md:text-base w-full text-darkColor'>En nuestra clínica, no solo nos preocupamos por la corrección de la visión y la audición, sino que también nos esforzamos por comprender las necesidades únicas de cada individuo. Nuestro equipo de expertos en optometría y audiología está altamente calificado y comprometido a brindar soluciones a medida que mejoren la vida de nuestros pacientes.
                  Contamos con tecnología de vanguardia que nos permite realizar diagnósticos precisos y ofrecer opciones de tratamiento de última generación. Estamos dedicados a mantenernos a la vanguardia de la innovación en óptica y audiología para garantizar que nuestros pacientes reciban la mejor atención posible.
                  <br /><br />En nuestra clínica, valoramos la confianza que nuestros pacientes depositan en nosotros y estamos comprometidos a superar sus expectativas en cada visita. La salud visual y auditiva es un activo invaluable, y estamos aquí para protegerlo y mejorarlo.
                  Si busca atención profesional, personalizada y de calidad en óptica y audiología, confíe en nosotros. En cada consulta, nos esforzamos por mantener los más altos estándares de excelencia en el cuidado de la visión y la audición.</p>
              </div>
              <img alt='triangulo azul' src={tring} className='absolute top-1/2 left-0 z-0 transform  -translate-y-1/2' />
            </div>
          </section>

          <section className=' bg-[#EFF8FF] w-full md:py-20'>
            <div className={`${styles.paddingXUs}  m-auto w-full lg:flex py-5 `}>
              <div className='xl:max-w-[50%] md:max-w-[45%]'>
                <h1 className='font-bold text-darkColor'>Nuestro Proposito</h1>
                <h2 className='font-bold text-lg mt-5'>Misión</h2>
                <p>Es un centro de servicios de óptica y audiología , con el propósito de atender a la familia costarricense con servicios y productos de alta calidad.</p>
                <h2 className='font-bold text-lg mt-5'>Visión</h2>
                <p>Ofrecer servicios evaluaciones auditivas y visuales con equipos de alta gama , dando un servicio profesional y líder en nuestro país.</p>
                <h2 className='font-bold text-lg mt-5'>Valores</h2>
                <p>Nuestra clínica se basa en valores como excelencia, profesionalismo, calidad, personalización, ética, innovación, accesibilidad, empatía, educación y responsabilidad social para brindar atención integral en optometría y audiología a nuestros pacientes.</p>
              </div>
              <img src={doctor} alt='doctor' className='ml-4 w-full  h-full object-cover relative ' />
            </div>
          </section>

          <section className='text-center max-w-[80%]  md:max-w-[60%] m-auto py-5 md:py-20'>
            <h1 className='font-bold text-2xl text-darkColor'>Nuestra Historia</h1>
            <p className='mt-4 text-darkColor'>En medio de una crisis financiera mundial. Se da la oportunidad de tener un pequeño alquiler por horas de un consultorio en los inicios del centro médico San Joaquín, en San Joaquín de flores en Heredia, cuando solo contaba con 3 especialidades médicas.
              En el año 2010, se inicia equipando con cabina sonoamortiguada.<br/><br/> En el año 2011 se inicia con equipamiento de impedanciometría (instrumento de medición de las funciones del oído medio y hi-pro). Así continuo el servicio de audiología por varios años.
              En el  año 2013, se inicia en los primeros pasos de dar apoyo como optometrista del servicio de oftalmología y se realiza la compra del equipo básico de oftalmología (sillón reclinable de oftalmología, autorefractómetro, foróptero , lampara de hendidura  ( aparato que revisa la parte frontal del ojo ), caja de pruebas  ( lentes sueltos que prueban la receta de anteojos y lensometro. (instrumento medidor de anteojos)
              <br/><br/>Actualmente en 2023 se dan los primeros pasos para dar un servicio integral de óptica, audiología y oftalmología, todo en una sintonía ,para dar soporte a dos especialistas de oftalmología y dos especialistas en otorrinolaringología en la actualidad.
            </p>
          </section>

          <section className="w-full h-full px-5 py-20 " style={backgroundImageStyle}>
            <div className='md:w-[60%] sm:h-96 h-full bg-white m-auto sm:flex sm:flex-row-reverse p-10 rounded-2xl shadow-2xl shadow-black'>
              <div className='mx-auto sm:w-[50%]'>
              <h1 className='font-bold text-2xl text-center '>Doctora Natalia Valenciano</h1>
              <h4>Especialidad: Oftalmología, Otología </h4>
              <h4>Años de experiencia: 10</h4>
              </div>
              <img src={doctorTree} className='rounded-2xl sm:w-[40%] w-full mr-10'/>
            </div>
            
          </section>
        </div>
      </div>
    </>
  )
}

export default AboutUs