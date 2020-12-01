import React, { createContext, useContext, useReducer } from 'react'
import * as API from './API'

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
                loading: false
            }
        case 'user-logout':
            return { ...state, user: undefined, authToken: undefined }
        case 'bag-add-food':
            return { ...state, bag: [...state.bag, payload.food] }
        case 'bag-rm-food':
            return { ...state, bag: state.bag.filter(food => food.id !== payload.foodId) }
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
        authToken: undefined,
        error: undefined,
        loading: false,
        bag: []
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
                dispatch({ type: 'error', payload: { error: error.response?.data || error.message } })
            }
        }
    }

    const addFoodToBag = (food, quantity) => dispatch({ type: 'bag-add-food', payload: { food: { ...food, quantity } } })
    const removeFoodFromBag = (foodId) => dispatch({ type: 'bag-rm-food', payload: { foodId } })

    const getRestaurants = () => API.getRestaurants()

    const createRestaurant = async ({ storeName, cnpj, phoneNumber, location, description, category }) =>
        API.createRestaurant({ storeName, cnpj, phoneNumber, location, description, category, userId: state.user.id, token: state.authToken })

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
            dispatch({ type: 'user-logged-in', payload: { user, authToken } })
        } catch (error) {
            console.log(error)
            dispatch({ type: 'error', payload: { error: error.response?.data || error.message } })
        }
    }

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
            removeFoodFromBag,
            getFoodsCategoriesByRestaurant,
            createRestaurant,
            signIn
        }} {...props} />
    )
}

APIProvider.Consumer = APIProviderContext.Consumer

export default APIProvider
export const useAPI = () => useContext(APIProviderContext)