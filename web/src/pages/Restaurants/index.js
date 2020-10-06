import React from 'react'

import { NavbarComponent as Navbar } from './components/Navbar'
import { FoodFigureComponent as FoodFigure } from './components/FoodFigure'
import { RestaurantCard } from './components/RestaurantCard'

import { Container, Title, SubTitle } from './styled'

export const Restaurants = () => (
    <>
        <Navbar />
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
