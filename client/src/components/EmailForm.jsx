import React, { useState } from 'react'
import axios from 'axios'

function EmailForm(props) {

  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const [emailSent, setEmailSent] = useState(false);

   async function handleSubmit(event) {
    event.preventDefault();
    const emailRegex = /^[^\s@áéíóú]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.email || !formData.name || !formData.phone || !formData.message ) {
      setErrorMessage('Por favor ingrese todos los datos.');
      return;
    }
    else if (!emailRegex.test(formData.email)) {
      setErrorMessage('Por favor ingrese un correo válido.');
      return;
    }
    else if (!(formData.phone.toString().length < 14)) {
      setErrorMessage('Por favor ingrese un número de teléfono válido.');
      return;
    }
    try {
      const response = await axiosInstance.post('/send-email', formData);
      setEmailSent(true);
    
    } catch (error) {
      setErrorMessage(error.response.data.message); 
    }
  }

  return (
    <div> 
      {errorMessage ? (
    <div className='flex flex-col justify-center text-lg'>
      <h2>Error: {errorMessage}</h2>
      <button id="btn-errorOk" className='w-[50%] m-auto rounded-xl bg-slate-900 mt-3 text-white ' onClick={() => { setErrorMessage(''); props.isModal ? setEmailSent(false) : props.handleClose(); }}>ok</button>
    </div>
  ) : emailSent ? (
    <div className='flex flex-col justify-center text-lg'>
      <h2>Tu correo fue enviado!</h2>
      <button id="btn-emailOk" className='w-[50%] m-auto rounded-xl bg-slate-900 mt-3 text-white ' onClick={() => props.isModal ?  setEmailSent(false) : props.handleClose() }>ok</button>
    </div>
  ) :(
    <form onSubmit={handleSubmit} className={`flex flex-col gap-3  py-2 px-4 text-lg sm:w-full  lg:w-96 xl:w-96 rounded-full p-${props.padding}`}>
      <h2 className='font-bold text-xl mb-2 w-full'>Haz una pregunta</h2>
      {errorMessage && <p className='text-orange-600 text-base '>{errorMessage}</p>}
      <label htmlFor="name" className="sr-only">Tu nombre</label>
      <input id="name" onBlur={handleChange} className={`rounded-lg border ${errorMessage ? 'border-orange-500' : 'border-black/60'} p-2 px-4 w-full`} type='text' placeholder='Tu nombre*' required></input>
      <label htmlFor="email" className="sr-only">Tu correo</label>
      <input id="email" onBlur={handleChange} className='rounded-lg border border-black p-2 px-4 w-full' type='email' placeholder='Tu correo*' required></input>
      <label htmlFor="phone" className="sr-only">Tu teléfono</label>
      <input id="phone" onBlur={handleChange} className='rounded-lg border border-black p-2 px-4 w-full' type='tel' placeholder='Tu teléfono*' required></input>
      <label htmlFor="message" className="sr-only">Tu mensaje</label>
      <textarea maxLength={500} id="message" onBlur={handleChange} className='rounded-lg border border-black p-2 px-4 w-full' type='textBox ' placeholder='Tu mensaje*' required></textarea>
      <button id="btn-sendEmail" className='max-w-[70%] h-auto ml-auto rounded-full border border-secondary p-2 px-4 hover:bg-secondary hover:text-white text-lg' type='submit'>Envíar pregunta</button>
    </form>)}
  </div>
  )
}

export default EmailForm