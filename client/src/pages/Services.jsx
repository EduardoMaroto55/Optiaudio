import React from 'react';
import { services } from "../constants/index";
import { Link } from 'react-router-dom';

function Services() {
  const renderServices = services.map(service => (
    <div key={service.id} className='sm:flex sm:max-w-4xl max-w-md m-auto mb-10'>
      <img className="sm:max-w-[30%] w-full mr-10" src={service.img} alt={service.title} />
      <div className='flex flex-col justify-between'>
        <h4><span className='font-bold'>{service.title}</span> <p>{service.description}</p></h4>
        <Link to={`/servicio/${service.id}`} className='text-secondary text-lg'>Leer Más</Link>
      </div>
    </div>
  ));

  return (
    <section className='py-10'> 
      <div className='max-w-4xl m-auto mb-10'>
        <h1 className='font-bold text-3xl text-darkColor'>Servicios</h1>
      </div>
      {renderServices}
    </section>
  );
}

export default Services;