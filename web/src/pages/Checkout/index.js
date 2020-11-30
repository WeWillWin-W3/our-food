import React, { useEffect, useState } from 'react'

import { Location } from './components/Location'
import { Payment } from './components/Payment'
import {
    Navbar, Main, Title, SubTitle, Div,
} from './styled'

import {
    Box, DivColumn, Text, TextMain, Option,
    TextPrice, FoodOptions, TextTitle
} from './components/Order/styled'

import { Logo } from '../../components/Logo'
import { Button } from '../../components/Button'

import { useAPI } from '../../providers/APIProvider'

export const Checkout = () => {
    const { bag, removeFoodFromBag } = useAPI()
    const precoTotal = bag
        .reduce((preco, food) => preco + food.price * food.quantity, 0)
        .toFixed(2)

    const api = useAPI()
    const restaurantId = bag[bag.length - 1].restaurant_id
    const [restaurantSelected, setRestaurantSelected] = useState({})

    useEffect(() => {
        api.getRestaurantById(restaurantId)
            .then(setRestaurantSelected)
            .catch(error => console.log(error))
    }, [api, restaurantId])
    
    return (
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
                    <Button style={{ width: '28vw' }}>Finalizar pedido</Button>
                </Div>
                <Div>
                    <Box>
                        <Text>Seu pedido em</Text>
                        <TextTitle>{restaurantSelected?.name}</TextTitle>
                        <hr />
                        {bag.map((food, index) => (
                            <div key={index}>
                                <DivColumn>
                                    <TextMain>{food.name}</TextMain>
                                    <TextPrice>R$ {(food.price * food.quantity).toFixed(2)} ({`${food.quantity} x R$${food.price.toFixed(2)}`})</TextPrice>
                                </DivColumn>
                                <FoodOptions>
                                    <Option danger onClick={() => removeFoodFromBag(food.id)}>Remover</Option>
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
                                <TextPrice>R$ {precoTotal}</TextPrice>
                                <TextPrice>R$ 0.00</TextPrice>
                                <TextPrice>R$ {precoTotal}</TextPrice>
                            </Div>
                        </DivColumn>
                    </Box>
                </Div>
            </Main>
        </>
    )
}