import React from 'react';
import { services } from "../constants/index";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
function Services() {
  const renderServices = services.map(service => (
    <div key={service.id} className='sm:flex sm:max-w-4xl max-w-md m-auto mb-10'>
      <img className="sm:max-w-[30%] w-full mr-10" src={service.img} alt={service.title} />
      <div className='flex flex-col justify-between'>
        <h2><span className='font-bold'>{service.title}</span> <p>{service.description}</p></h2>
        <Link to={`/servicio/${service.id}`} className='text-secondary text-lg'>Leer Más</Link>
      </div>
    </div>
  ));

  return (
    <section className='py-10'> 
       <Helmet>
        <title>Servicios Optometría Audiología | Optiaudio | Heredia, Costa Rica</title>
        <meta name="description" content="Descubra los servicios de optometría y audiología que ofrecemos en nuestra clínica en Heredia." />
        <link rel="canonical" href="http://localhost:5173/servicios" />
        <meta property="og:title" content="Servicios de Optometría y Audiología | Optiaudio | Heredia, Costa Rica" />
        <meta property="og:description" content="Descubra los servicios de optometría y audiología que ofrecemos en nuestra clínica en Heredia." />
        <meta property="og:url" content="http://localhost:5173/servicios" />
        <meta property="og:image" content="http://localhost:5173/path_to_your_logo.png" /> {/* Replace with the URL of your logo */}
        <meta property="og:type" content="website" />
       </Helmet>
      <div className='max-w-4xl m-auto mb-10'>
        <h1 className='font-bold text-3xl text-darkColor'>Servicios</h1>
      </div>
      {renderServices}
    </section>
  );
}

export default Services;