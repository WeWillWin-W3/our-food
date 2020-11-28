import React, { createContext, useContext, useState } from 'react'
import * as API from './API'

const APIProviderContext = createContext({})

const APIProvider = props => {
    const [state, setState] = useState({
        user: undefined,
        authToken: undefined,
        error: undefined,
        loading: false,
        restaurants: []
    })
    const updateState = (nextState) => setState({ ...state, ...nextState })

    const logout = () => updateState({ user: undefined })

    const getRestaurants = async () => {
        try{
            updateState({ loading: true })
            const {data} = await API.getRestaurants()
            console.log(data)
            updateState({restaurants: data, loading: false})
        }catch(err){
            updateState({error: err.response.data, loading: false})
        }
    }

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

    return (
        <APIProviderContext.Provider value={{
            ...state,
            createUser,
            logout,
            getRestaurants
        }} {...props} />
    )
}

APIProvider.Consumer = APIProviderContext.Consumer

export default APIProvider

export const useAPI = () => useContext(APIProviderContext)