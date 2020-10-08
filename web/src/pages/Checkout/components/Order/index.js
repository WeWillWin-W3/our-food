import React from 'react'

import { 
    Box, Div, DivColumn, Text, TextMain, Option,
    TextPrice, FoodOptions, TextTitle 
} from './styled'

export const Order = () => (
    <Box>
        <Text>Seu pedido em</Text>
        <TextTitle>Nome do restaurante</TextTitle>
        <hr />
        <DivColumn>
            <TextMain>Nome da comida</TextMain>
            <TextPrice>R$ 00,00</TextPrice>
        </DivColumn>
        <FoodOptions>
            <Option danger>Remover</Option>
            <Option>Editar</Option>     
        </FoodOptions>
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