import React from 'react'

import { RestaurantCard } from './components/RestaurantCard'
import { Container, Title, SubTitle } from './styled'

export const Restaurants = () => (
    <>
        <Title>Melhores Restaurantes</Title>
        <SubTitle>Lista dos melhores restaurantes</SubTitle>
        <Container>
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
        </Container>
    </>
)
