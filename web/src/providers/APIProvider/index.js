import React, { createContext, useContext, useState } from 'react'
import * as API from './API'

const APIProviderContext = createContext({})

const APIProvider = props => {
    const [state, setState] = useState({
        user: undefined,
        error: undefined,
        loading: false
    })

    const createUser = async (userData) => {
        try {
            setState({ ...state, error: undefined, loading: true })
            const user = await API.createUser(userData)
            setState({ ...state, user: user, loading: false })
        } catch (err) {
            setState({ ...state, error: err.message })
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