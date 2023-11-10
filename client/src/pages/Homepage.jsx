import React from 'react'

import Hero from '../components/Hero'
import styles from '../styles'
import AboutUsSection from '../components/AboutUsSection'
import ServicesSection from '../components/ServicesSection'
import FAQ from '../components/FAQ'
import Contacts from '../components/ContactoSection'

function Homepage() {


  return (
    <div className=" w-full overflow-hidden ">
      <div className={` ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>

          <Hero />
        </div>
      </div>

      <div className={` ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <AboutUsSection />
          <ServicesSection/>
          <FAQ />
          <Contacts />
        </div>
      </div>
    </div>
  )
}

export default Homepage