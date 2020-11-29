import React, { createContext, useContext, useState } from 'react'
import * as API from './API'

const APIProviderContext = createContext({})

const APIProvider = props => {
    const [state, setState] = useState({
        user: undefined,
        authToken: undefined,
        error: undefined,
        loading: false,
        bag: []
    })

    const updateState = (nextState) => setState({ ...state, ...nextState })

    const logout = () => updateState({ user: undefined })

    const createUser = async (userData) => {
        updateState({ error: undefined })

        if (!state.user) {
            try {
                updateState({ loading: true })
                const user = await API.createUser(userData)
                updateState({ user: user, loading: false })

                // TODO: Autenticar o usuário e obter o authToken
            } catch (err) {
                updateState({ error: err.response.data, loading: false })
            }

            return;
        }
    }

    const addFoodToBag = (food, quantity) => updateState({ bag: [...state.bag, { ...food, quantity }] })
    const removeFoodFromBag = (foodId) => updateState({ bag: state.bag.filter(food => food.id !== foodId) })

    const getRestaurants = () => API.getRestaurants()

    const getRestaurantById = (restaurantId) =>
        API.getRestaurantById(restaurantId)

    const getFoodsCategories = async (restaurantId) =>
        API.getFoodsCategoriesByRestaurant(restaurantId)

    const getFoodsByRestaurant = async (restaurantId) =>
        API.getFoodByRestaurant(restaurantId)

    const getRestaurantsByName = async (name) =>
        API.getRestaurantsByName(name)

    const getFoodsByName = async (name) =>
        API.getFoodsByName(name)

    return (
        <APIProviderContext.Provider value={{
            ...state,
            createUser,
            logout,
            getRestaurants,
            getFoodsByRestaurant,
            getRestaurantById,
            getRestaurantsByName,
            getFoodsByName,
            getFoodsCategories,
            addFoodToBag,
            removeFoodFromBag
        }} {...props} />
    )
}

APIProvider.Consumer = APIProviderContext.Consumer

export default APIProvider

export const useAPI = () => useContext(APIProviderContext)