import React from 'react'
import { Card, DonutChart, Title,Divider  } from "@tremor/react";

const cities = [
    {
      name: "New York",
      sales: 9800,
    },
    {
      name: "London",
      sales: 4567,
    },
    {
      name: "Hong Kong",
      sales: 3908,
    },
    {
      name: "San Francisco",
      sales: 2400,
    },
    {
      name: "Singapore",
      sales: 1908,
    },
    {
      name: "Zurich",
      sales: 1398,
    },
  ];
  const valueFormatter = (number) => {
    if (isNaN(number)) {
        console.error(`Non-numeric value received: ${number}`);
        return number;
      }
      return `$ ${new Intl.NumberFormat("us").format(number).toString()}`;
  }

const DonutSection = () => {
  return (
    <Card className="max-w-full max-auto" >
     <Title>Fuentes de otras páginas </Title>
     <Divider/>
      <DonutChart
      variant='pie'
     className="mt-6"
     data={cities}
     category="sales"
     index="name"
     valueFormatter={valueFormatter}
     colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}/>
    </Card>
  );
};

export default DonutSection