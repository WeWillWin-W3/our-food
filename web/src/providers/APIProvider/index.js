import React, { createContext, useContext } from 'react'

const APIProviderContext = createContext({})

const APIProvider = () => {
    return (
        <APIProviderContext.Provider value={{}} />
    )
}

APIProvider.Consumer = APIProviderContext.Consumer

export default APIProvider

export const useAPI = () => useContext(APIProviderContext)