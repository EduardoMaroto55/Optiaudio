import React from 'react'
import Hero from '../components/Hero'
import AboutUsSection from '../components/AboutUsSection'
import ServicesSection from '../components/ServicesSection'
import FAQ from '../components/FAQ'
import Contacts from '../components/ContactoSection'
import { Helmet } from 'react-helmet-async';

function Homepage() {
  return (
    <div className=" w-full overflow-hidden ">
       <Helmet>
        <title>Optiaudio | Optometría y Audiología | Heredia, Costa Rica</title>
        <meta name="description" content="Bienvenido a Optiaudio. Ofrecemos servicios médicos en optometría y audiología. Navega por nuestro sitio para descubrir más sobre nosotros y lo que podemos hacer por ti." />
        <link rel="canonical" href="http://localhost:5173/inicio" />
        <meta property="og:title" content="Optiaudio | Optometría y Audiología | Heredia, Costa Rica" />
        <meta property="og:description" content="Bienvenido a Optiaudio. Ofrecemos servicios médicos en optometría y audiología. Navega por nuestro sitio para descubrir más sobre nosotros y lo que podemos hacer por ti." />
        <meta property="og:url" content="http://localhost:5173/inicio" />
        <meta property="og:image" content="http://localhost:5173/public/favicon.io" /> {/* Replace with the URL of the image you want to display when this page is shared */}
        <meta property="og:type" content="website" />
       </Helmet>
        <Hero />
        <AboutUsSection />
        <ServicesSection/>
        <FAQ />
        <Contacts />
    </div>
  )
}

export default Homepage