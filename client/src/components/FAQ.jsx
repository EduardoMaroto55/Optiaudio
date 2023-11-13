import React from 'react'
import Button from './Button'
import Accordion from './Accordion'
import lobby from "../assets/lobby.jpg"
import { faqData } from '../constants/index'
import ModalDialog from './ModalDialog'
const FAQ = () => {
  const [accordions, setAccordion] = React.useState(faqData)

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });
    setAccordion(updatedAccordions);
  };
  const loadAccordion = accordions.map((accordion) => (
    <Accordion 
      key={accordion.id}
      title={accordion.title}
      data={accordion.data}
      isOpen={accordion.isOpen}
      toggleAccordion={() => toggleAccordion(accordion.key)}
      id={accordion.id}
    />
  ))
  const [open,setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
<section data-test="faqSection" id='faq' className={`max-w-[1920px] m-auto w-full h-full justify-centebg-[#f2eeee] gap-10 sm:flex bg-gray-200 sm:flex-row-reverse `}>
        <div className='md:max-w-[50%] sm:h-[100%] h-full bg-cover bg-center m-auto'>
        <img src={lobby} className='w-full ' />
        </div>
        <div className='sm:px-8 px-3 py-5 md:max-w-[50%] sm:h-auto max-w-2xl md:min-w-xl  '>
          <h1 className='font-bold text-left text-xl text-[#212529] mb-3 mt-3 md:text-3xl md:text-center '>Preguntas Frecuentes</h1>
          <div className={`md:mt-10` }>
            {loadAccordion}
          </div>
          <Button id="btn-openForm" onClick={handleOpen} text="Envía una pregunta" tailwindClass="bg-secondary border-secondary font-bold text-white rounded-full mt-5 md:text-base text-sm mb-auto" />
          <ModalDialog open={open} handleClose={handleClose}/>
        </div>
    </section>

  )
}

export default FAQ