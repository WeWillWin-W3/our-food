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

    useEffect(() => {
        (async () => {
            try {
                const restaurantId = API.restaurant.id
                setFoods(await API.getFoodsByRestaurant(restaurantId))
            } catch (err) {
                console.log(err)
            }
        })()
    }, [API])

    const goToCreateFoodPage = () => {
        history.push('/dashboard/foods/create')
    }

    const onDeleteButtonClicked = ({id, name}) => {
        const shouldIDelete = window.confirm(`Você tem certeza que deseja excluir a comida ${name}?`)
        if (shouldIDelete) {
            deleteFood(id)
        }
    }

    const deleteFood = async (id) => {
        try {
            const restaurantId = API.restaurant.id
            const authToken = API.authToken
            await API.deleteFood(id, restaurantId, authToken)
            await setFoods(await API.getFoodsByRestaurant(restaurantId))
        } catch (err) {
            console.log(err)
        }
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
                                    id={id}
                                    name={name}
                                    category={category}
                                    price={price}
                                    description={description}
                                    onDeleteButtonClicked={onDeleteButtonClicked}/>
                            )
                        })
                    }
                </Container>
        </DashboardTemplate>
    )
}
