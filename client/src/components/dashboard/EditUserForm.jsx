import React from 'react'
import axios from 'axios';
const token = localStorage.getItem('jwt');
const EditUserForm = (props) => {

  function close() {
    props.handleClose(); // Close the form when the button is clicked
  }
  function handleSubmit(event){
    event.preventDefault();
  
    const user = {
      id: event.target.elements.id.value,
      name: event.target.elements.name.value,
      apellido: event.target.elements.apellido.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
      telefono: event.target.elements.telefono.value
    };

  const axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_APP_API_URL,
      timeout: 1000,
       headers: { Authorization: `Bearer ${token}` } // Include the token in the Authorization header
    });
    
    axiosInstance.post('/edituser', user)
      .then(response => {
        close()
        window.location.reload(); // reload the page
      })
      .catch(error => {
        console.error('Error:', error);
  
      });
  }
  
  return (
    <form  onSubmit={handleSubmit} className={`flex flex-col gap-7 lg:py-10 py-2 px-4 text-lg sm:w-full  lg:w-96 xl:w-96 rounded-full p-${props.padding}`}>
    <div className='mb-4'>
    <h1 className='font-bold text-2xl text-center w-full'>Editar Usuario</h1>
    <hr className='w-full mt-2  border-gray-400 '></hr>
    </div>
    <input defaultValue={props.selectedUser.id} id="id"  className='hidden'></input>
    <label htmlFor="name" className="sr-only">Usuario nombre</label>
    <input defaultValue={props.selectedUser.first_name} id="name"  className='rounded-md border border-black p-1 px-4 w-full' type='text' placeholder='Nombre*' required></input>
    <label  htmlFor="apellido" className="sr-only" >Usuario apellido</label>
    <input  defaultValue={props.selectedUser.last_name} id="apellido" className='rounded-md border border-black p-1 px-4 w-full' type='text' placeholder='Apellido*' required></input>
    <label  htmlFor="email" className="sr-only">Usuario correo</label>
    <input defaultValue={props.selectedUser.email}id="email" className='rounded-md border border-black p-1 px-4 w-full' type='email' placeholder='Correo*' required></input>
    <label htmlFor="password" className="sr-only">Nueva Contraseña</label>
    <input  id="password" className='rounded-md border border-black p-1 px-4 w-full' type='password' placeholder='Nueva contraseña*'  minLength="5"></input>
    <label htmlFor="telefono" className="sr-only">Usuario Télefono</label>
    <input defaultValue={props.selectedUser.phone_number} id="telefono" className='rounded-md border border-black p-1 px-4 w-full' type='tel' placeholder='Télefono*' required></input>
    <button className='max-w-[70%] ml-auto rounded-lg border border-secondary p-1 px-4 hover:bg-secondary hover:text-white text-lg' type='submit'>Actualizar usuario</button>
  </form>
  )
}

export default EditUserForm
