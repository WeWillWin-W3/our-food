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
                const { token } = await API.signIn({ email: userData.email, password: userData.password })
                updateState({ authToken: token, user: user, loading: false })
            } catch (err) {
                console.log(err)
                updateState({ error: err.response.data, loading: false })
            }

            return;
        }
    }

    const createRestaurant = async ({ storeName, cnpj, phoneNumber }) => 
    {
        console.log(state)
        API.createRestaurant({ storeName, cnpj, phoneNumber, userId: state.user.id })
    }

    const getRestaurants = async () => API.getRestaurants()

    const getRestaurantById = async (restaurantId) =>
        API.getRestaurantById(restaurantId)

    const getFoodsCategories = async (restaurantId) =>
        API.getFoodsCategoriesByRestaurant(restaurantId)

    const getFoodsByRestaurant = async (restaurantId) => {
        return API.getFoodByRestaurant(restaurantId)
    }

    const signIn = async ({email, password}) => {
        try {
            updateState({ loading: true })
            const {token, user_id} = await API.signIn({email, password})
            const user = await API.getUserById(user_id, token)
            updateState({ authToken: token, user: user, loading: false })
            // TODO: verificar bug de não atualizar estado.
        } catch (err) {
            console.log(err)
            updateState({ error: err.response.data, loading: false })
        }
    }

    return (
        <APIProviderContext.Provider value={{
            state,
            createUser,
            logout,
            getRestaurants,
            getFoodsByRestaurant,
            getRestaurantById,
            getFoodsCategories,
            createRestaurant,
            signIn
        }} {...props} />
    )
}
APIProvider.Consumer = APIProviderContext.Consumer

export default APIProvider
export const useAPI = () => useContext(APIProviderContext)