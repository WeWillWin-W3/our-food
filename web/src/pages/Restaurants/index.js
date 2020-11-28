import React, { useState, useEffect } from 'react'

import { NavbarComponent as Navbar } from './components/Navbar'
import { FoodFigureComponent as FoodFigure } from './components/FoodFigure'
import { RestaurantCard } from './components/RestaurantCard'

import { Container, Title, SubTitle } from './styled'

import { getRestaurants } from '../../providers/APIProvider/API'

export const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        onComponentDidMount()
    })

    const onComponentDidMount = async () => {
        const restaurants = await getRestaurants()
        setRestaurants(restaurants)
    }

    return (
        <>
            <Navbar />
            <Container>
                <FoodFigure />
                <FoodFigure />
                <FoodFigure />
                <FoodFigure />
                <FoodFigure />
            </Container>
            <Title>Melhores Restaurantes</Title>
            <SubTitle>Lista dos melhores restaurantes</SubTitle>
            <Container>
                {
                    restaurants.map(restaurant =>
                        <RestaurantCard key={restaurant.id}/>
                    )
                }
            </Container>
        </>
    )
}
