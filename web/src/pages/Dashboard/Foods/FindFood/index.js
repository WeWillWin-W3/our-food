import React, { useState, useEffect } from 'react'
import { useAPI } from '../../../../providers/APIProvider'
import { useHistory } from 'react-router-dom'

import { DashboardTemplate } from '../../components/DashboardTemplate'
import { Container } from './styled'
import { FoodCard } from './components/FoodCard'

export const DashboardFindFood = () => {
    const API = useAPI()
    const history = useHistory()

    const [foods, setFoods] = useState([])
    const [found, setFound] = useState(false)

    useEffect(() => {
        (async () => {
            if (!found) {
                try {
                    const restaurantId = API.restaurant.id
                    setFoods(await API.getFoodsByRestaurant(restaurantId))
                    setFound(true)
                } catch (err) {
                    console.log(err)
                }
            }
        })()
    }, [foods])

    const goToCreateFoodPage = () => {
        history.push('/dashboard/foods/create')
    }

    return (
        <DashboardTemplate
            title="Lista de comidas"
            hasSpecialAction
            specialActionTitle="Cadastrar comida"
            onSpecialActionButtonClicked={goToCreateFoodPage}>
                <Container>
                    {
                        foods.map(food => {
                            const {id, name, category, price, description} = food
                            return (
                                <FoodCard
                                    key={id}
                                    name={name}
                                    category={category}
                                    price={price}
                                    description={description}/>
                            )
                        })
                    }
                </Container>
        </DashboardTemplate>
    )
}
