import React from 'react'
import { useParams } from 'react-router-dom';
import { services } from "../constants/index"
function Service() {
  const { servicioId } = useParams();
  const [servicesState,setServicesState] = React.useState(services[(servicioId - 1 )])


  return (
   <section>
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