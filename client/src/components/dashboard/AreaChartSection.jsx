import React from 'react'
import { AreaChart, Card, Title } from "@tremor/react";

  

const AreaChartSection = ({data}) => {
  if (!data[0] || !data[0].rows[0].metricValues) {
    return <h1>Loading...</h1>;
}
const ChartdataArray = data
  .filter(item => item !== null)
  .flatMap(item => item.rows.map(row => {
    const dateStr = row.dimensionValues[0].value; // '20231110'
    const formattedDate = new Date(dateStr.slice(0, 4), dateStr.slice(4, 6) - 1, dateStr.slice(6, 8))
      .toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); // 'Apr 22'
    return {
      date: formattedDate,
      "Usuarios totales": Number(row.metricValues[0].value),
      "Usuarios activos": Number(row.metricValues[0].value),
    };
  }));
    return (
        <Card className='mt-4'>
            <Title>Usuarios por día </Title>
            <AreaChart
                className="h-72 mt-4"
                data={ChartdataArray}
                index="date"
                categories={["Usuarios totales", "Usuarios activos"]}
                colors={["indigo", "cyan"]}
           
            />
        </Card>
    )
}

export default AreaChartSection