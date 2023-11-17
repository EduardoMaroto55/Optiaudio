import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export async function validateLogin(email, password) {
  try {
    const response = await axiosInstance.post('/login', { email, password });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export default function Login() {
  //style for the background image
  const backgroundImageStyle = {
    backgroundImage: `url("../../images/bush.png")`
  };  

  //states
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('');

  //function to handle the submit

  
  async function handleSubmit(event) {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!email || !password) {
      setErrorMessage('Por favor ingrese correo y contraseña.');
      return;
    }
    if (!emailRegex.test(email)) {
      setErrorMessage('Por favor ingrese un correo válido.');
      return;
    }
    try {
      const response = await validateLogin(email, password);
      if (response.data.status === 'success') {
        console.log(response);
        navigate('/dashboard', { state: { userId: response.data.user.id } });
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      setErrorMessage('Un error ha ocurrido. Por favor inténtalo de nuevo.');
    }
  }
  return (
    <section className="w-full min-h-screen px-6  flex items-center justify-center " style={backgroundImageStyle}>
    <div className="bg-white px-10 pb-20 rounded-3xl shadow-2xl shadow-black w-full max-w-md sm:w-3/4 lg:w-1/2 xl:w-1/3">
      <h1 className="text-center text-3xl font-bold p-3">Iniciar Sesión</h1>
      <hr style={{borderTop: "1px solid gray ",}} className='mb-14'/>
     
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="sr-only">Tu correo</label>
        <input id="email" className={` w-full  rounded-md border ${errorMessage ? 'border-red-500' : 'border-black/60'} p-3 px-4`}  type='email' placeholder='Ingresa tu correo' 
        onChange={e => setEmail(e.target.value)}/>
         {errorMessage && <p className='text-red-500 text-sm mt-2'>{errorMessage}</p>}
        <label htmlFor="email" className="sr-only">Tu correo</label>
        <input id="password" className='w-full mb-4 mt-6 rounded-md border border-black/60 p-3 px-4' type='password' placeholder='Ingresa tu contraseña'
        onChange={e => setPassword(e.target.value)} />
        <button className='mt-40 w-full rounded-md text-xl bg-secondary py-2 px-3 hover:bg-secondary hover:text-white' type='submit'>Ingresar</button>
      </form>
    </div>
  </section>
  )
}
