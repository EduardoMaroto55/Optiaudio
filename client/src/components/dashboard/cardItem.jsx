import React from 'react'
import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";

const cardItem = () => {
    return (
        <Card className="w-xs" decoration="top" decorationColor="indigo">
            <Flex justifyContent='between' alignItems='center'>
            <Text>Visitantes únicos</Text>      
                <BadgeDelta deltaType="moderateIncrease">12.4%</BadgeDelta>             
            </Flex>
            <Metric>$ 34,743</Metric>
        </Card>
    )
}

export default cardItem