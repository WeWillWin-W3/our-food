import React from 'react'

import { Location } from './components/Location'
import { Order } from './components/Order'
import { Payment } from './components/Payment'
import { 
    Navbar, Main, Title, SubTitle, Div,
} from './styled'
import { Logo } from '../../components/Logo'
import { Button } from '../../components/Button'

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
                <Button style={{  width: '28vw' }}>Finalizar pedido</Button>
            </Div>
            <Div>
                <Order />
            </Div>
        </Main>
    </>
)