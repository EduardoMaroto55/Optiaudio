import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function Login() {
  
  const backgroundImageStyle = {
    backgroundImage: `url("../../bush.png")`
  };  
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('');
  function handleSubmit(event){
    event.preventDefault()
    axios.post('http://localhost:3000/login', {email, password})
    .then(response => {
      console.log(response.data)
      if (response.data.status === 'success') {
        // Redirect to /dashboard
        console.log(response.data.user.id);
        navigate('/dashboard', { state: { userId: response.data.user.id } });
      } else {
        // Handle error
        setErrorMessage(response.data.message);
      }
    })
    .catch(error => {
      console.log(error);
      setErrorMessage('An error occurred.');
    })
  }
  return (
    <section className="w-full min-h-screen px-5  flex items-center justify-center" style={backgroundImageStyle}>
    <div className="bg-white px-10 pb-20 rounded-3xl shadow-md w-full max-w-md sm:w-3/4 lg:w-1/2 xl:w-1/3">
      <h1 className="text-center text-3xl font-bold p-3">Iniciar Sesión</h1>
      <hr style={{borderTop: "1px solid gray ",}} className='mb-14'/>
      {errorMessage && <p className='text-red-500 text-xs'>Error de inicio de sesión. Verifica tus datos e inténtalo de nuevo</p>}
      <form onSubmit={handleSubmit}>
        <input className='w-full mb-7 rounded-lg border  border-black p-2 px-3 ' type='email' placeholder='Ingresa tu correo*' 
        onChange={e => setEmail(e.target.value)}/>
        <input className='w-full mb-4 rounded-lg border border-black p-2 px-3' type='password' placeholder='Ingresa tu contraseña*'
        onChange={e => setPassword(e.target.value)} />
        <button className='mt-40 w-full rounded-xl text-xl bg-secondary p-1 px-3 hover:bg-secondary hover:text-white' type='submit'>Ingresar</button>
      </form>
    </div>
  </section>
  )
}
