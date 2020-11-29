import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { NavbarComponent as Navbar } from './components/Navbar'
import { FoodFigureComponent as FoodFigure } from './components/FoodFigure'
import { RestaurantCard } from './components/RestaurantCard'

import { Container, Title, SubTitle } from './styled'

import { useAPI } from '../../providers/APIProvider'

export const Restaurants = () => {
    const history = useHistory()
    const api = useAPI()

    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        (async () => {
            try {
                setRestaurants(await api.getRestaurants())
            }catch(error){
                console.log(error)
            }
        })()
    }, [])

    const onRestaurantCardClicked = (id) => {
        history.push(`/restaurants/${id}/foods`)
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
                        <RestaurantCard 
                            key={restaurant.id} name={restaurant.name}
                            id={restaurant.id}
                            category={restaurant.category}
                            description={restaurant.description}
                            onRestaurantCardClicked={onRestaurantCardClicked}/>
                    )
                }
            </Container>
        </>
    )
}
