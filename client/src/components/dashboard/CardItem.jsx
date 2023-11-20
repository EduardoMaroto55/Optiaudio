import React from 'react'
import {  Card, Flex, Metric, Text } from "@tremor/react";

const CardItem = ({data,title,id}) => {
     if (!data || !data.rows[0].metricValues) {
        return <h1>Loading...</h1>;
    }

    const totalMetrics = data.rows.reduce((sum, row) => sum + Number(row.metricValues[id].value), 0);
    let displayMetrics;
    if (id === 2) {
      displayMetrics = `${(totalMetrics / data.rows.length) * 100}%`;
    } else {
      displayMetrics = totalMetrics;
    }
    return (
        <Card className="w-xs" decoration="top" decorationColor="indigo">
            <Flex justifyContent='between' alignItems='center'>
            <Text>{title}</Text>                     
            </Flex>
            <Metric>{displayMetrics}</Metric>
        </Card>
    )
}

export default CardItem
