import axios from "axios"

let base64 = require('base-64');

const API_URL = "http://localhost:3000/v1"

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 3000
});

const getJsonFromFetch = async (fetchPromise) => {
    const response = await fetchPromise

    if (!response.ok) {
        throw new Error(response.Error)
    }

    return await response.json()
}

export const getAllFoods = async () =>
    getJsonFromFetch(fetch(`${API_URL}/foods`, {
        method: "GET",
    }))

/**
 * 
 * @param {number} restaurantId 
 */
export const getFoodByRestaurant = async (restaurantId) => {
    const { data } = await axiosInstance.get(`/restaurants/${restaurantId}/foods`)
    return data
}

/**
 * 
 * @param {number} restaurantId 
 */

export const getFoodsCategoriesByRestaurant = async (restaurantId) => {
    const { data } = await axiosInstance.get(`/foods/${restaurantId}`)
    return data
}

/**
 * 
 * @param {number} restaurantId 
 * @param {string} category
 */

export const getFoodByRestaurantAndCategory = async (restaurantId, category) => {
    const { data } = await axiosInstance.get(`/restaurants/${restaurantId}/${category}/foods`)
    return data
}

/**
 * 
 * @param {number} foodId 
 */
export const getFoodById = async (foodId) =>
    getJsonFromFetch(fetch(`${API_URL}/foods/${foodId}`, {
        method: "GET",
    }))

/**
 * 
 * @param {{name: string, description: string, category: string, price: number}} foodData 
 * @param {number} restaurantId 
 * @param {string} authToken 
 */
export const createFood = async (foodData, restaurantId, authToken) =>
    getJsonFromFetch(fetch(`${API_URL}/restaurants/${restaurantId}/foods`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authToken}`
        },
        body: JSON.stringify(foodData)
    }))

/**
 * 
 * @param {{id: number, name?: string, description?: string, category?: string, price?: number}} foodData 
 * @param {number} restaurantId 
 * @param {string} authToken 
 */
export const updateFood = async (foodData, restaurantId, authToken) =>
    getJsonFromFetch(fetch(`${API_URL}/restaurants/${restaurantId}/foods/${foodData.id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authToken}`
        },
        body: JSON.stringify(foodData)
    }))

/**
 * 
 * @param {number} foodId 
 * @param {string} authToken 
 */
export const deleteFood = async (foodId, restaurantId, authToken) =>
    getJsonFromFetch(fetch(`${API_URL}/restaurants/${restaurantId}/foods/${foodId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authToken}`
        }
    }))

export const createUser = async ({ name, email, password, phone, location, role = 1 }) =>
    {
        let {data} = await axiosInstance.post("/users", { name, email, password, phone, location, role })
        return data
    }

export const signIn = async ({ email, password }) =>{
    let data = await getJsonFromFetch(fetch(`${API_URL}/users/authenticate`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Basic ${base64.encode(email + ":" + password)}`
        },
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    }))
    console.log(data)
    return data
}

export const getUserById = async (userId, token) =>
    getJsonFromFetch(fetch(`${API_URL}/users/${userId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }))

export const createRestaurant = async ({ storeName, cnpj, phoneNumber, userId }) =>{
    let data = await getJsonFromFetch(fetch(`${API_URL}/restaurants`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer a9e6c675-4d76-483f-b1bb-9e3d4288fa3e`
        },
        body: JSON.stringify({
            "name": storeName,
            "cnpj": cnpj,
            "phone": phoneNumber,
            "userId": userId
        })
    }))
    console.log(data)
    return data
}

export const getRestaurantById = async (restaurantId) =>
    getJsonFromFetch(fetch(`${API_URL}/restaurants/${restaurantId}`, {
        method: "GET",
    }))

export const orderFood = async (userId, locationId, restaurantId) =>
    getJsonFromFetch(fetch(`${API_URL}/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "user_id": userId,
            "location_id": locationId,
            "restaurant_id": restaurantId
        })
    }))

export const getRestaurants = async () => {
    const { data } = await axiosInstance.get("/restaurants")
    return data
}