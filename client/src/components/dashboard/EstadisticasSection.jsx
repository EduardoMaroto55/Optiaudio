import React from 'react'
import CardItems from './cardItem'
import AreaChartSection from './AreaChartSection'
import DonutSection from './DonutSection'

const Estadisticas = () => {
  return (
    <div className='grid md:grid-cols-3 grid-cols-1 w-full mt-5 xl:mt-28'>
    <div className='col-span-2'>
      <div className='w-full flex flex-col justify-between p-2'>
        <div className='flex flex-col lg:flex-row gap-2 w-full'>
          <CardItems />
          <CardItems />
          <CardItems />
        </div>
        <div className='flex-auto w-full xl:mt-10'>
          <AreaChartSection />
        </div>
      </div>
    </div>
    <div className='w-full p-2'>
      <DonutSection/>
    </div>
  </div>
  )
}

export default Estadisticas