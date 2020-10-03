import React from 'react'

import FoodFigure from './components/FoodFigure'
import RestaurantCard from './components/RestaurantCard'

import { Container, Title, SubTitle } from './styled'

export const Restaurants = () => (
    <>
        <Container>
            <FoodFigure />
            <FoodFigure />
            <FoodFigure />
            <FoodFigure />
            <FoodFigure />
            <FoodFigure />
            <FoodFigure />
        </Container>
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
