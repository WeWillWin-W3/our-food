import React from 'react'

import { Location } from './components/Location'
import { Order } from './components/Order'
import { Payment } from './components/Payment'
import { Navbar, Main, Title, SubTitle, CheckoutButton, DivLeft, DivRight, Input, InputBox, Box, Div, TextMain, DivColumn, TextPrice, Line, TextRemoveEdit } from './styled'
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
                <Payment />
                <CheckoutButton>Finalizar pedido</CheckoutButton>
            </Div>
            <Div>
                <Order />
            </Div>
        </Main>
    </>
)