import React from 'react'
import { Card, DonutChart, Title,Divider  } from "@tremor/react";

const DonutSection = ({data}) => {
     if (!data || !data.rows[0].metricValues) {
        return <h1>Loading...</h1>;
    }
        const cityData = data.rows.map(row => {
      return {
        cities: row.dimensionValues[0].value,
        activeUsers: Number(row.metricValues[0].value),
      };
    });

  return (
    <Card className="max-w-full max-auto" >
     <Title>Usuarios activos por ciudad</Title>
     <Divider/>
      <DonutChart
      variant='pie'
     className="mt-6"
     data={cityData}
     category="activeUsers"
     index="cities"
     colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}/>
    </Card>
  );
};

export default DonutSection
