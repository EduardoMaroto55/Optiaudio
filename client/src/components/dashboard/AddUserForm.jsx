import React from 'react'
import axios from 'axios';
function handleSubmit(event){
  event.preventDefault();

  const user = {
    name: event.target.elements.name.value,
    apellido: event.target.elements.apellido.value,
    email: event.target.elements.email.value,
    password: event.target.elements.password.value,
    telefono: event.target.elements.telefono.value
  };

  axios.post('http://localhost:3000/adduser', user)
    .then(response => {
      
      window.location.reload(); // reload the page
      // handle success
    })
    .catch(error => {
      console.error('Error:', error);
      // handle error
    });
 
}
const AddUserForm = (props) => {
  return (
    <form  onSubmit={handleSubmit} className={`flex flex-col gap-7 lg:py-10 py-2 px-4 text-lg sm:w-full  lg:w-96 xl:w-96 rounded-full p-${props.padding}`}>
    <div className='mb-4'>
    <h1 className='font-bold text-2xl text-center w-full'>Crear Usuario</h1>
    <hr className='w-full mt-2  border-gray-400 '></hr>
    </div>
    <label htmlFor="name" className="sr-only">Usuario nombre</label>
    <input id="name" className='rounded-md border border-black p-1 px-4 w-full' type='text' placeholder='Nombre*' required></input>
    <label htmlFor="apellido" className="sr-only" >Usuario apellido</label>
    <input id="apellido" className='rounded-md border border-black p-1 px-4 w-full' type='text' placeholder='Apellido*' required></input>
    <label htmlFor="email" className="sr-only">Usuario correo</label>
    <input id="email" className='rounded-md border border-black p-1 px-4 w-full' type='email' placeholder='Correo*' required></input>
    <label htmlFor="password" className="sr-only">Usuario Contraseña</label>
    <input id="password" className='rounded-md border border-black p-1 px-4 w-full' type='password' placeholder='Contraseña*' required minLength="5"></input>
    <label htmlFor="telefono" className="sr-only">Usuario Télefono</label>
    <input id="telefono" className='rounded-md border border-black p-1 px-4 w-full' type='tel' placeholder='Télefono*' required></input>
    <button className='max-w-[70%] ml-auto rounded-lg border border-secondary p-1 px-4 hover:bg-secondary hover:text-white text-lg' type='submit'>Crear usuario</button>
  </form>
  )
}

export default AddUserForm