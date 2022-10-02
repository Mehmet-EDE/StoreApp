import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

const AutProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthLoading, setAuthLoading] = useState(true)
    useEffect(() => {
        AsyncStorage.getItem('@user').then(res => {
            res ?
                setUser(JSON.parse(res)) :
                setUser(null);
            setAuthLoading(false)
        })
    }, [])
    const store = createStore(reducers, { user, isAuthLoading })
    return <Provider store={store}>{children}</Provider>
}
export default AutProvider