import React, { createContext, useContext, useReducer } from 'react'
import * as API from './API'
import { userRole } from '../../constants'

const { RESTAURANT_OWNER_ROLE } = userRole

const simpleSessionStorageAdapter = (reducer, dispatch) => (action) => {
    const stateDiff = reducer({ bag: [] }, action)

    Object.entries(stateDiff).forEach(([key, value]) => {
        if (value) {
            window.sessionStorage.setItem(key, JSON.stringify(value))
        } else {
            window.sessionStorage.removeItem(key)
        }
    })

    return dispatch(action)
}

const getInitialStateFromSessionStorage = (initialState) =>
    Object.entries(initialState)
        .reduce((state, [key, defaultValue]) => {
            const sessionValue = window.sessionStorage.getItem(key)

            return {
                ...state, [key]: sessionValue ? JSON.parse(sessionValue) : defaultValue
            }
        }, initialState)

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
    const [state, defaultDispatch] = useReducer(APIReducer, getInitialStateFromSessionStorage({
        user: undefined,
        restaurant: undefined,
        authToken: undefined,
        error: undefined,
        loading: false,
        bag: []
    }))

    const dispatch = simpleSessionStorageAdapter(APIReducer, defaultDispatch)

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

    const signIn = async ({ email, password }) => {
        dispatch({ type: 'start-request' })

        try {
            const { token: authToken, user_id: userId } = await API.signIn({ email, password })
            const user = await API.getUserById(userId, authToken)

            const restaurant = user.role === RESTAURANT_OWNER_ROLE ?
                (await API.getRestaurants())
                    .find((restaurant) => restaurant.user_id === user.id) :
                undefined

            dispatch({ type: 'user-logged-in', payload: { user, authToken, restaurant } })
        } catch (error) {
            console.log(error)
            dispatch({ type: 'error', payload: { error: error.response?.data || error.message } })
        }
    }

    const getRestaurantsByName = async (name) =>
        API.getRestaurantsByName(name)

    const getFoodsByName = async (name) =>
        API.getFoodsByName(name)

    const getFoodsByRestaurant = async (restaurantId) =>
        API.getFoodByRestaurant(restaurantId)

    const createFood = async (food, restaurantId, authToken) =>
        API.createFood(food, restaurantId, authToken)

    const deleteFood = async (foodId, restaurantId, authToken) =>
        API.deleteFood(foodId, restaurantId, authToken)

    const getFoodById = async (foodId) =>
        API.getFoodById(foodId)

    const updateFood = async (food, restaurantId, authToken) =>
        API.updateFood(food, restaurantId, authToken)

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
            createFood,
            deleteFood,
            getFoodById,
            updateFood,
            getFoodsCategoriesByRestaurant,
            createRestaurant,
            signIn
        }} {...props} />
    )
}
APIProvider.Consumer = APIProviderContext.Consumer

export default APIProvider
export const useAPI = () => useContext(APIProviderContext)