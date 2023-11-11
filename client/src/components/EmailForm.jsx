import React, { useState } from 'react'
import axios from 'axios'




function EmailForm(props) {

  const [errors, setErrors] = useState({});
  function validateInput(data) {
    const errors = {};

    if (!data.name) {
      errors.name = "Name is required";
    }

    if (!data.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email address is invalid";
    }

    if (!data.phone) {
      errors.phone = "Phone number is required";
    } else if (data.phone.length > 15) {
      errors.phone = "Phone number should not be longer than 15 characters";
    }
    if (!data.message) {
      errors.message = "Message is required";
    }

    return errors;
  }

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
    try {
      const response = await axios.post('http://localhost:3000/send-email', formData);    
      setEmailSent(true);
  
    
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  return (
    <div> 
      {true ? (
        <div className='flex flex-col justify-center'>
      <p>Correo enviado!</p>
      <button className='w-[50%] m-auto rounded-xl bg-slate-800 text-white ' onClick={() => props.handleClose()}>ok</button>
        </div>
  
    ) : (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-3  py-2 px-4 text-lg sm:w-full  lg:w-96 xl:w-96 rounded-full p-${props.padding}`}>
      <h1 className='font-bold text-2xl mb-5 w-full'>Haz una pregunta</h1>
      <label htmlFor="name" className="sr-only">Tu nombre</label>
      <input id="name" onBlur={handleChange} className='rounded-lg border border-black p-2 px-4 w-full' type='text' placeholder='Tu nombre*' required></input>
      <label htmlFor="email" className="sr-only">Tu Correo</label>
      <input id="email" onBlur={handleChange} className='rounded-lg border border-black p-2 px-4 w-full' type='email' placeholder='Tu Correo*' required></input>
      <label htmlFor="phone" className="sr-only">Tu Teléfono</label>
      <input id="phone" onBlur={handleChange} className='rounded-lg border border-black p-2 px-4 w-full' type='tel' placeholder='Tu Teléfono*' required></input>
      <label htmlFor="message" className="sr-only">Tu mensaje</label>
      <textarea id="message" onBlur={handleChange} className='rounded-lg border border-black p-2 px-4 w-full' type='textBox ' placeholder='Tu mensaje*' required></textarea>
      <button className='max-w-[70%] h-auto ml-auto rounded-full border border-secondary p-2 px-4 hover:bg-secondary hover:text-white text-lg' type='submit'>Envíar pregunta</button>
    </form>)}
  </div>
  )
}

export default EmailForm