import React, { createContext, useContext, useState } from 'react'
import * as API from './API'

const APIProviderContext = createContext({})

const APIProvider = props => {
    const [state, setState] = useState({
        user: undefined,
        authToken: undefined,
        error: undefined,
        loading: false,
        restaurants: [],
        foods: []
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
            updateState({loading: true})
            const restaurants = await API.getRestaurants()
            updateState({restaurants: restaurants, loading: false})
        } catch(err){
            updateState({error: err.response.data, loading: false})
        }
    }

    const getFoodsByRestaurant = async (restaurantId) => {
        try {
            updateState({loading: true})
            const foods = await API.getFoodByRestaurant(restaurantId)
            updateState({foods: foods, loading: false})
        } catch(err) {
            updateState({error: err.response.data, loading: false})
        }
    }

    return (
        <APIProviderContext.Provider value={{
            ...state,
            createUser,
            logout,
            getRestaurants,
            getFoodsByRestaurant
        }} {...props} />
    )
}

APIProvider.Consumer = APIProviderContext.Consumer

export default APIProvider

export const useAPI = () => useContext(APIProviderContext)