import axios from "axios"

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
export const getFoodByRestaurant = async (restaurantId) =>
    getJsonFromFetch(fetch(`${API_URL}/restaurants/${restaurantId}/foods`, {
        method: "GET",
    }))

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

export const createUser = async ({ name, email, password, phone, location, role = 0 }) =>
    axiosInstance.post("/users", { name, email, password, phone, location, role })

export const getUserById = async (userId) =>
    getJsonFromFetch(fetch(`${API_URL}/v1/users/${userId}`, {
        method: "GET",
    }))

export const orderFood = async (userId, locationId, restaurantId) =>
    getJsonFromFetch(fetch(`${API_URL}/v1/orders`, {
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