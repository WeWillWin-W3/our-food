import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { NavbarComponent as Navbar } from '../../components/Navbar'
import { FoodCard } from './components/FoodCard'

import { Container, Title } from './styled'

import { useAPI } from '../../providers/APIProvider'

export const RestaurantFoods = () => {
    const history = useHistory()
    const api = useAPI()
    const [foods, setFoods] = useState([])
    const [restaurantSelected, setRestaurantSelected] = useState({})

    const { id: restaurantId } = useParams()

    useEffect(() => {
        (async () => {
            try {
                setRestaurantSelected(await api.getRestaurantById(restaurantId))
                setFoods(await api.getFoodsByRestaurant(restaurantId))
            } catch (err) {
                console.log(err)
            }
        })()
    }, [api, restaurantId])

    const onFoodCardClicked = (food) => () => history.push({
        pathname: '/order',
        state: { food, restaurant: restaurantSelected }
    })

    return (
        <>
            <Navbar />
            <Title>{restaurantSelected?.name}</Title>
            <Container>
                {
                    foods.map(food =>
                        <FoodCard
                            key={food.id}
                            name={food.name}
                            category={food.category}
                            price={food.price}
                            description={food.description}
                            onFoodCardClicked={onFoodCardClicked(food)} />
                    )
                }
            </Container>
        </>
    )
}
