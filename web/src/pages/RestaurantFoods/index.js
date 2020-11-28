import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";

import { NavbarComponent as Navbar } from './components/Navbar'
import { FoodCard } from './components/FoodCard'

import { Container, Title, SubTitle } from './styled'

import { useAPI } from '../../providers/APIProvider'

export const RestaurantFoods = () => {
    const api = useAPI()

    let { id: restaurantId } = useParams();

    useEffect(() => {
        if (api.foods.length === 0) {
            api.getFoodsByRestaurant(restaurantId)
        }
    }, [api.foods])

    return (
        <>
            <Navbar />
            <Title>Pizzaria Matei Onça</Title>
            <SubTitle>Lista dos melhores restaurantes</SubTitle>
            <Container>
                {
                    api.foods.map(food => 
                        <FoodCard 
                            key={food.id}
                            name={food.name}
                            category={food.category}
                            price={food.price} />
                    )
                }
            </Container>
        </>
    )
}
