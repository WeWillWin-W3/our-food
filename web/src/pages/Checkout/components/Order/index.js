import React from 'react'

import {
    Box, Div, DivColumn, Text, TextMain, Option,
    TextPrice, FoodOptions, TextTitle
} from './styled'

export const Order = ({ bag = [] }) => (
    <Box>
        <Text>Seu pedido em</Text>
        <TextTitle>Nome do restaurante</TextTitle>
        <hr />
        {bag.map((food, index) => (
            <div key={index}>
                <DivColumn>
                    <TextMain>{food.name}</TextMain>
                    <TextPrice>R$ {(food.price * food.quantity).toFixed(2)} ({food.quantity})</TextPrice>
                </DivColumn>
                <FoodOptions>
                    <Option danger>Remover</Option>
                    <Option>Editar</Option>
                </FoodOptions>
            </div>
        ))}

        <hr />
        <DivColumn>
            <Div>
                <TextMain>Subtotal</TextMain>
                <TextMain>Taxa de entrega</TextMain>
                <TextMain>Total</TextMain>
            </Div>
            <Div>
                <TextPrice>R$ 00,00</TextPrice>
                <TextPrice>R$ 00,00</TextPrice>
                <TextPrice>R$ 00,00</TextPrice>
            </Div>
        </DivColumn>
    </Box>
)