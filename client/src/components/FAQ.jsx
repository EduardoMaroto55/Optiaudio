import React,{useEffect} from 'react'
import {useLocation } from 'react-router-dom'
import { motion,useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from './Button'
import Accordion from './Accordion'
import lobby from "../assets/lobby.jpg"
import { faqData } from '../constants/index'
import ModalDialog from './ModalDialog'
const FAQ = () => {
  const animation = useAnimation();
  const [ref, inView] = useInView({
  triggerOnce: false, //
});
React.useEffect(() => {
 if (inView) {
   animation.start({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
   });
 }
}, [animation, inView]);

  const { hash } = useLocation();
  useEffect(() => {
    
    // Check if there's a hash in the URL
    if (hash === '') {
      window.scrollTo(0, 0);
    } else {
      // Wait for the page to fully load
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [hash]); // Run the effect when the hash changes

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
    <motion.section
    data-test="faqSection"
    ref={ref}
    id='faq'
    className={`max-w-[1920px] m-auto w-full h-full justify-centebg-[#f2eeee] gap-10 sm:flex bg-gray-100 sm:flex-row-reverse `}
    initial={{ opacity: 0, x: 100 }} // Slide in from the left
    // initial={{ opacity: 0, x: 50 }} // Slide in from the right
    animate={animation}
    transition={{ duration: 0.9 }}
  >
        <div className='md:max-w-[50%] sm:h-[100%] h-full bg-cover bg-center m-auto'>
        <img src={lobby} className='w-full' alt='lobby de la clínica' loading='lazy' title='lobby de la clínica'/>
        </div>
        <div className='sm:px-8 px-3 py-5 md:max-w-[50%] sm:h-auto max-w-2xl md:min-w-xl  '>
          <h2 className='font-bold text-left text-xl text-[#212529] mb-3 mt-3 md:text-3xl md:text-center '>Preguntas Frecuentes</h2>
          <div className={`md:mt-10` }>
            {loadAccordion}
          </div>
          <Button id="btn-openForm" onClick={handleOpen} text="Envía una pregunta" tailwindClass="bg-secondary border-secondary font-bold text-white rounded-full mt-5 md:text-base text-sm mb-auto" />
          <ModalDialog open={open} handleClose={handleClose}/>
        </div>
        </motion.section>

  )
}

export default FAQ