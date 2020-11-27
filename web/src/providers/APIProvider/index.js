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
            updateState({ loading: true })

            try {
                const user = await API.createUser(userData)
                updateState({ user: user, loading: false })

                // TODO: Autenticar o usuário e obter o authToken
            } catch (err) {
                updateState({ error: err.response.data, loading: false })
            }

            return;
        }

        updateState({ error: "O usuário está logado. Faça logout primeiro" })
    }

    return (
        <APIProviderContext.Provider value={{
            ...state,
            createUser,
            logout
        }} {...props} />
    )
}

APIProvider.Consumer = APIProviderContext.Consumer

export default APIProvider

export const useAPI = () => useContext(APIProviderContext)