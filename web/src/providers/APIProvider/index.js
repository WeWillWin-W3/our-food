import React, { createContext, useContext } from 'react'

const APIProviderContext = createContext({})

const APIProvider = props => {
    return (
        <APIProviderContext.Provider value={{}} {...props} />
    )
}

APIProvider.Consumer = APIProviderContext.Consumer

export default APIProvider

export const useAPI = () => useContext(APIProviderContext)