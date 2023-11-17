import React from 'react'
import { useParams } from 'react-router-dom';
import { services } from "../constants/index"
import { Helmet } from 'react-helmet-async';
function Service() {
  const { servicioId } = useParams();
  const [servicesState,setServicesState] = React.useState(services[(servicioId - 1 )])


  return (
   <section>
  <Helmet>
  <title>{`${servicesState.title} | Optiaudio | Clínica Optometría y Audiología | Heredia, Costa Rica`}</title>
  <meta name="description" content={`Ofrecemos servicios de ${servicesState.title} en nuestra clínica Optiaudio en Heredia. Aquí encontrará información detallada sobre nuestros servicios ${servicesState.title}.`} />
  <link rel="canonical" href={`http://localhost:5173/servicios/${servicioId}`} />
  <meta property="og:title" content={`${servicesState.title} | Optiaudio |Clínica de Optometría y Audiología | Heredia, Costa Rica`} />
  <meta property="og:description" content={`Ofrecemos servicios de ${servicesState.title} en nuestra clínica Optiaudio en Heredia. Aquí encontrará información detallada sobre nuestros servicios de ${servicesState.title}.`} />
  <meta property="og:url" content={`http://localhost:5173/servicios/${servicioId}`} />
  <meta property="og:image" content={`http://localhost:5173/${servicesState.img}`} /> {/* Replace with the URL of your image */}
  <meta property="og:type" content="website" />
</Helmet>
    <div key={servicesState.id}  className='flex flex-col max-w-4xl m-auto mb-10 py-10'>
      <h1 className='font-bold text-3xl text-darkColor'>{servicesState.title}</h1>
       <img className="max-w-[100%] mr-10 mt-10" alt='servicios' src={servicesState.img }/>
       <div>
       <p className='text-darkColor/70'>{servicesState.description}</p>
       </div>
      </div>
    </section>
  )
}

export default Service