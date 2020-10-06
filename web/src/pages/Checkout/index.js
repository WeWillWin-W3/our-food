import React from 'react'

import { Location } from './components/Location'
import { Navbar, Main, Title, SubTitle, CheckoutButton, DivLeft, DivRight, Input, InputBox, Box, Div } from './styled'
import { Logo } from '../../components/Logo'

export const Checkout = () => (
    <>
        <Navbar>
            <Logo />
        </Navbar>
        <Main>
            <Div>
                <Title>Finalizar seu pedido</Title>
                <SubTitle>Endereço</SubTitle>
                <Location />
                <SubTitle>Pague pelo site</SubTitle>
                <Box>
                    <InputBox>
                        <Input placeholder='Número do cartão' />
                    </InputBox>
                    <InputBox>
                        <Input placeholder='Validade' />
                    </InputBox>
                    <InputBox>
                        <Input placeholder='CVV' />
                    </InputBox>
                    <InputBox>
                        <Input placeholder='Nome do titular' />
                    </InputBox>
                    <InputBox>
                        <Input placeholder='CPF/CNPJ do titular' />
                    </InputBox>
                </Box>
                <CheckoutButton>Finalizar pedido</CheckoutButton>
            </Div>

        </Main>
    </>
)