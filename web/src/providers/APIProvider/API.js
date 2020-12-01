import axios from 'axios'

const API_URL = 'http://localhost:3000/v1'

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 3000
})

export const getAllFoods = async () =>
    axiosInstance.get(`/foods`)
        .then(({ data }) => data)

export const getFoodByRestaurant = (restaurantId) =>
    axiosInstance.get(`/restaurants/${restaurantId}/foods`)
        .then(({ data }) => data)

export const getFoodsCategoriesByRestaurant = (restaurantId) =>
    axiosInstance.get(`/foods/${restaurantId}`).then(({ data }) => data)

export const getFoodsCategories = () =>
    axiosInstance.get('/foods/categories').then(({ data }) => data)

export const getFoodByRestaurantAndCategory = (restaurantId, category) =>
    axiosInstance.get(`/restaurants/${restaurantId}/${category}/foods`)
        .then(({ data }) => data)

export const getFoodById = (foodId) =>
    axiosInstance.get(`/foods/${foodId}`)
        .then(({ data }) => data)

export const createFood = (foodData, restaurantId, authToken) =>
    axiosInstance.post(`/restaurants/${restaurantId}/foods`, foodData, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({ data }) => data)

export const updateFood = (foodData, restaurantId, authToken) =>
    axiosInstance.put(`${API_URL}/restaurants/${restaurantId}/foods/${foodData.id}`, foodData, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({ data }) => data)

export const deleteFood = (foodId, restaurantId, authToken) =>
    axiosInstance.delete(`/restaurants/${restaurantId}/foods/${foodId}`, {}, {
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
        .then(({ data }) => data)

export const createUser = ({ name, email, password, phone, location, role = 0 }) =>
    axiosInstance.post("/users", { name, email, password, phone, location, role })
        .then(({ data }) => data)

export const signIn = ({ email: username, password }) =>
    axiosInstance.post('/users/authenticate', {}, {
        auth: {
            username, password
        }
    })
        .then(({ data }) => data)

export const getUserById = (userId, token) =>
    axiosInstance.get(`/users/${userId}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
        .then(({ data }) => data)

export const createRestaurant = async ({
    storeName: name, cnpj, phoneNumber: phone, location,
    description, category, userId, token
}) =>
    axiosInstance.post(`/restaurants`, {
        name, cnpj, phone, userId, location, description, category
    }, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
        .then(({ data }) => data)

export const getRestaurantById = (restaurantId) =>
    axiosInstance.get(`/restaurants/${restaurantId}`)
        .then(({ data }) => data)

export const orderFood = (userId, locationId, restaurantId, token) =>
    axiosInstance.post('/orders', {
        "user_id": userId,
        "location_id": locationId,
        "restaurant_id": restaurantId
    }, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
        .then(({ data }) => data)

export const getRestaurants = () =>
    axiosInstance.get("/restaurants")
        .then(({ data }) => data)

export const getRestaurantsByName = (name) =>
    axiosInstance.get(`/restaurants?name=${name}`)
        .then(({ data }) => data)

export const getFoodsByName = (name) =>
    axiosInstance.get(`/foods?name=${name}`)
        .then(({ data }) => data)