import React from 'react'

import { Box, Div, DivColumn, Line, Text, TextMain, TextPrice, TextRemoveEdit, TextTitle } from './styled'

export const Order = () => (
    <Box>
        <Text>Seu pedido em</Text>
        <TextTitle>Nome do restaurante</TextTitle>
        <Line></Line>
        <DivColumn>
            <Div>
                <TextMain>Nome da comida</TextMain>
            </Div>
            <Div>
                <TextPrice>R$ 00,00</TextPrice>
            </Div>
        </DivColumn>
        <TextRemoveEdit>Editar Remover</TextRemoveEdit>
        <Line></Line>
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