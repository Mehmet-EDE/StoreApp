import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState, useEffect } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'



export default function authProvider({children})  {
    const [user, setUser] = useState(null)
    const [authLoading, setAuthloading] = useState(true)
    useEffect(() => {
        AsyncStorage.getItem('@user').then((userSession) => {
            console.log(userSession)
            userSession && setUser(JSON.parse(userSession))
            setAuthloading(false)
        })
    }, [])
    const store = createStore(reducers, { user, authLoading })
    return <Provider store={store}>{children}</Provider>
}