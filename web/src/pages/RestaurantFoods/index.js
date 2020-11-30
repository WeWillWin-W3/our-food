import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { NavbarComponent as Navbar } from './components/Navbar'
import { FoodCard } from './components/FoodCard'

import { Container, Title } from './styled'

import { useAPI } from '../../providers/APIProvider'

export const RestaurantFoods = () => {
    const history = useHistory()
    const api = useAPI()
    const [foods, setFoods] = useState([])
    const [restaurantSelected, setRestaurantSelected] = useState({})
    const [categories, setCategories] = useState([])
    const { id: restaurantId } = useParams()

    useEffect(() => {
        (async () => {
            try {
                setRestaurantSelected(await api.getRestaurantById(restaurantId))
                const localFoods = await api.getFoodsByRestaurant(restaurantId)
                setFoods(localFoods)
                const categoriesMap = localFoods.reduce(
                    (categoriesMap, food) => ({
                        ...categoriesMap,
                        [food.category]: true,
                    }),
                    {}
                )
                setCategories(Object.keys(categoriesMap))
            } catch (err) {
                console.log(err)
            }
        })()
    }, [api, restaurantId])

    const onFoodCardClicked = () => history.push('/order')

    return (
        <>
            <Navbar />
            <Title fontSize={50}>{restaurantSelected?.name}</Title>
            {
                categories.map(category => (
                    <>
                        <Title>{category}</Title>
                        <Container>
                            {
                                foods.filter((food) => food.category === category).map(
                                    food =>
                                        <FoodCard
                                            key={food.id}
                                            name={food.name}
                                            category={food.category}
                                            price={food.price}
                                            description={food.description}
                                            onFoodCardClicked={onFoodCardClicked} />
                                )

                            }
                        </Container>
                    </>
                ))
            }
        </>
    )
}
