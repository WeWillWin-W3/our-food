import React from 'react'

import { NavbarComponent as Navbar } from './components/Navbar'
import { FoodCard } from './components/FoodCard'

import { Container, Title, SubTitle } from './styled'

export const RestaurantFoods = () => {
    return (
        <>
            <Navbar />
            <Title>Pizzaria Matei Onça</Title>
            <SubTitle>Lista dos melhores restaurantes</SubTitle>
            <Container>
                <FoodCard />
            </Container>
        </>
    )
}
