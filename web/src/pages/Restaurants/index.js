import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { NavbarComponent as Navbar } from '../../components/Navbar'
import { FoodFigureComponent as FoodFigure } from './components/FoodFigure'
import { RestaurantCard } from './components/RestaurantCard'
import { Container, Title, SubTitle } from './styled'

import { useAPI } from '../../providers/APIProvider'


export const Restaurants = () => {
    const history = useHistory()
    const api = useAPI()

    const [restaurants, setRestaurants] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        (async () => {
            try {
                setRestaurants(await api.getRestaurants())
                setCategories(await api.getFoodsCategories())
            } catch (error) {
                console.log(error)
            }
        })()
    }, [api])

    const onRestaurantCardClicked = (id) => {
        history.push(`/restaurants/${id}/foods`)
    }

    return (
        <>
            <Navbar />
            <Container>
                {categories.map((category, index) => (
                    <FoodFigure key={index} name={category} />
                ))}
            </Container>
            <Title>Melhores Restaurantes</Title>
            <SubTitle>Lista dos melhores restaurantes</SubTitle>
            <Container>
                {
                    restaurants.map(restaurant =>
                        <RestaurantCard
                            key={restaurant.id} name={restaurant.name}
                            id={restaurant.id}
                            category={restaurant.category}
                            description={restaurant.description}
                            onRestaurantCardClicked={onRestaurantCardClicked} />
                    )
                }
            </Container>
        </>
    )
}
