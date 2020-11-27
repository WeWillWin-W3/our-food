import React, { createContext, useContext, useState } from 'react'
import * as API from './API'

const APIProviderContext = createContext({})

const APIProvider = props => {
    const [state, setState] = useState({
        user: undefined,
        error: undefined,
        loading: false
    })
    const updateState = (nextState) => setState({ ...state, ...nextState })

    const createUser = async (userData) => {
        updateState({ error: undefined, loading: true })

        try {
            const user = await API.createUser(userData)
            updateState({ user: user, loading: false })
        } catch (err) {
            updateState({ error: err.response.data, loading: false })
        }
    }

    return (
        <APIProviderContext.Provider value={{
            ...state,
            createUser,
        }} {...props} />
    )
}

APIProvider.Consumer = APIProviderContext.Consumer

export default APIProvider

export const useAPI = () => useContext(APIProviderContext)