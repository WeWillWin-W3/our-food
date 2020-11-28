import React, { useState, useEffect } from 'react'

import { NavbarComponent as Navbar } from './components/Navbar'
import { FoodFigureComponent as FoodFigure } from './components/FoodFigure'
import { RestaurantCard } from './components/RestaurantCard'

import { Container, Title, SubTitle } from './styled'

import { useAPI } from '../../providers/APIProvider';


export const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([])
    const api = useAPI()

    useEffect(() => {
        loadRestaurants()
    }, [api.restaurants])

    useEffect(() => {
        if (api.error) {
            alert(`Deu ruim man: ${api.error}`)
        }
    }, [api.error])

    const loadRestaurants = async () => {
        await api.getRestaurants()
        setRestaurants(api.restaurants)
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
                        <RestaurantCard key={restaurant.id} />
                    )
                }
            </Container>
        </>
    )
}
