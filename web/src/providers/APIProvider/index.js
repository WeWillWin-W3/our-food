import React, { createContext, useContext, useReducer } from 'react'
import * as API from './API'

import { userRole } from '../../constants'
const { RESTAURANT_OWNER_ROLE } = userRole

const APIReducer = (state, { type, payload }) => {
    switch (type) {
        case 'start-request':
            return { ...state, error: undefined, loading: true }
        case 'user-created':
        case 'user-logged-in':
            return {
                ...state,
                authToken: payload.authToken,
                user: payload.user,
                restaurant: payload.restaurant,
                loading: false
            }
        case 'user-logout':
            return { ...state, user: undefined, authToken: undefined }
        case 'error':
            return {
                ...state,
                error: payload.error,
                loading: false
            }
        default:
            throw new Error()
    }
}

const APIProviderContext = createContext({})

const APIProvider = props => {
    const [state, dispatch] = useReducer(APIReducer, {
        user: undefined,
        restaurant: undefined,
        authToken: undefined,
        error: undefined,
        loading: false
    })

    const logout = () => dispatch({ type: 'user-logout' })

    const createUser = async (userData) => {
        dispatch({ type: 'start-request' })

        if (!state.user) {
            try {
                const user = await API.createUser(userData)
                const { token: authToken } = await API.signIn({ email: userData.email, password: userData.password })
                dispatch({ type: 'user-created', payload: { authToken, user } })
            } catch (error) {
                console.log(error)
                dispatch({ type: 'error', payload: { error: error.response.data } })
            }
        }
    }

    const createRestaurant = async ({ storeName, cnpj, phoneNumber, location }) =>
        API.createRestaurant({ storeName, cnpj, phoneNumber, location, userId: state.user.id, token: state.authToken })

    const getRestaurants = async () => API.getRestaurants()

    const getRestaurantById = async (restaurantId) =>
        API.getRestaurantById(restaurantId)

    const getFoodsCategoriesByRestaurant = async (restaurantId) =>
        API.getFoodsCategoriesByRestaurant(restaurantId)

    const getFoodsCategories = async () =>
        API.getFoodsCategories()

    const getFoodsByRestaurant = async (restaurantId) => {
        return API.getFoodByRestaurant(restaurantId)
    }

    const signIn = async ({ email, password }) => {
        dispatch({ type: 'start-request' })

        try {
            const { token: authToken, user_id: userId } = await API.signIn({ email, password })
            const user = await API.getUserById(userId, authToken)
            let restaurant = undefined
            if (user.role === RESTAURANT_OWNER_ROLE) {
                // TODO: criar rota para buscar restaurante do usuário
                const restaurantsFromApi = await API.getRestaurants()
                for (const restaurantFromApi of restaurantsFromApi) {
                    if (restaurantFromApi.user_id === user.id) {
                        restaurant = restaurantFromApi
                        break
                    }
                }
            }
            dispatch({ type: 'user-logged-in', payload: { user, authToken, restaurant } })
        } catch (error) {
            console.log(error)
            dispatch({ type: 'error', payload: { error: error.message } })
        }
    }

    const createFood = async (food, restaurantId, authToken) =>
        API.createFood(food, restaurantId, authToken)

    const deleteFood = async (foodId, restaurantId, authToken) =>
        API.deleteFood(foodId, restaurantId, authToken)

    return (
        <APIProviderContext.Provider value={{
            ...state,
            createUser,
            logout,
            getRestaurants,
            getFoodsByRestaurant,
            getRestaurantById,
            getFoodsCategories,
            createFood,
            deleteFood,
            getFoodsCategoriesByRestaurant,
            createRestaurant,
            signIn
        }} {...props} />
    )
}
APIProvider.Consumer = APIProviderContext.Consumer

export default APIProvider
export const useAPI = () => useContext(APIProviderContext)