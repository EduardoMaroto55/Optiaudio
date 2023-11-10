import React from 'react'

function EmailForm(props) {
  return (
    <form className={`flex flex-col gap-3 lg:py-10 py-2 px-4 text-lg sm:w-full  lg:w-96 xl:w-96 rounded-full p-${props.padding}`}>
      <h1 className='font-bold text-2xl mb-5 w-full'>Haz una pregunta</h1>
      <label htmlFor="name" className="sr-only">Tu nombre</label>
      <input id="name" className='rounded-lg border border-black p-2 px-4 w-full' type='text' placeholder='Tu nombre*'></input>
      <label htmlFor="email" className="sr-only">Tu Correo</label>
      <input id="email" className='rounded-lg border border-black p-2 px-4 w-full' type='email' placeholder='Tu Correo*'></input>
      <label htmlFor="phone" className="sr-only">Tu Teléfono</label>
      <input id="phone" className='rounded-lg border border-black p-2 px-4 w-full' type='tel' placeholder='Tu Teléfono*'></input>
      <label htmlFor="message" className="sr-only">Tu mensaje</label>
      <textarea id="message" className='rounded-lg border border-black p-2 px-4 w-full' type='textBox ' placeholder='Tu mensaje*'></textarea>
      <button className='max-w-[70%] ml-auto rounded-full border border-secondary p-2 px-4 hover:bg-secondary hover:text-white text-lg' type='submit'>Envíar pregunta</button>
    </form>
  )
}

export default EmailForm