import React, { useEffect } from 'react'

import { NavbarComponent as Navbar } from './components/Navbar'
import { FoodFigureComponent as FoodFigure } from './components/FoodFigure'
import { RestaurantCard } from './components/RestaurantCard'

import { Container, Title, SubTitle } from './styled'

import { useAPI } from '../../providers/APIProvider';

export const Restaurants = () => {
    const api = useAPI()

    useEffect(() => {
        if (api.restaurants.length === 0) {
            api.getRestaurants()
        }
    }, [api.restaurants])

    useEffect(() => {
        if (api.error) {
        }
    }, [api.error])

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
                    api.restaurants.map(restaurant =>
                        <RestaurantCard key={restaurant.id} name={restaurant.name} category={restaurant.category} description={restaurant.description}/>
                    )
                }
            </Container>
        </>
    )
}
