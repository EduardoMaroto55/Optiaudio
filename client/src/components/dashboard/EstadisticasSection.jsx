import React from 'react'
import CardItem from './CardItem'
import AreaChartSection from './AreaChartSection'
import DonutSection from './DonutSection'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
const Estadisticas = () => {

  const [analyticsData, setAnalyticsData] = useState(null);
useEffect(() => {
  const fetchAnalyticsData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/analytics');
      console.log(response.data);
      setAnalyticsData(response.data);
    } catch (error) {
      console.error('Failed to fetch analytics data:', error);
    }
  };

  fetchAnalyticsData();
}, []);


  return (
    <div className='grid md:grid-cols-3 grid-cols-1 w-full mt-5 xl:mt-28'>
    <div className='col-span-2'>
      <div className='w-full flex flex-col justify-between p-2'>
        <div className='flex flex-col lg:flex-row gap-2 w-full'>
        {analyticsData && analyticsData.metricsData && (
            <>
              <CardItem data={analyticsData.metricsData} id={0} title="Usuarios activos totales"/>
              <CardItem data={analyticsData.metricsData} id={1} title="Nuevos usuarios totales"/>
              <CardItem data={analyticsData.metricsData} id={2} title="Tasa de participación total"/>
            </>
          )}
        </div>
        <div className='flex-auto w-full xl:mt-10'>
        {analyticsData && analyticsData.totalUsersData && (
        <AreaChartSection data={analyticsData.totalUsersData} />
        )}
        </div>
      </div>
    </div>
    <div className='w-full p-2'>
    {analyticsData && analyticsData.metricsData && (
        <DonutSection data={analyticsData.metricsData} />
        )}
    </div>
  </div>
  )
}

export default Estadisticas