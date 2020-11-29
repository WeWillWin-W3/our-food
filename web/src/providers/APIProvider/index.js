import React, { createContext, useContext, useState } from 'react'
import * as API from './API'

const APIProviderContext = createContext({})

const APIProvider = props => {
    const [state, setState] = useState({
        user: undefined,
        authToken: undefined,
        error: undefined,
        loading: false
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

    const getRestaurants = async () => {
        try {
            updateState({ loading: true })
            const restaurants = await API.getRestaurants()
            updateState({ restaurants: restaurants, loading: false })
        } catch (err) {
            updateState({ error: err.response.data, loading: false })
        }
    }

    const getRestaurantById = (restaurantId) =>
        API.getRestaurantById(restaurantId)

    const getFoodsCategories = async (restaurantId) =>
        API.getFoodsCategoriesByRestaurant(restaurantId)

    const getFoodsByRestaurant = async (restaurantId) =>
        API.getFoodByRestaurant(restaurantId)

    return (
        <APIProviderContext.Provider value={{
            state,
            createUser,
            logout,
            getRestaurants,
            getFoodsByRestaurant,
            getRestaurantById,
            getFoodsCategories
        }} {...props} />
    )
}

APIProvider.Consumer = APIProviderContext.Consumer

export default APIProvider

export const useAPI = () => useContext(APIProviderContext)