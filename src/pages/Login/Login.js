import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './Login.style'
import { Formik } from 'formik'
import Input from '../../components/Input'
import Button from '../../components/Button'
import usePost from '../../hooks/usePost'
import Config from 'react-native-config'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Login = ({ navigation }) => {
    const { data, loading, error, post } = usePost()
    const handleLogin = (values) => {
        AsyncStorage.setItem('@user', JSON.stringify(values))
    }
    if (error) {
        console.log(error)
    }
    var user = {
        username: 'donero',
        password: 'ewedon'
    }
    // AsyncStorage.setItem('@user', JSON.stringify(user))
    AsyncStorage.getItem('@user').then(us => {
        console.log(us)
    })
    if (data) {
        if (data.status !== 'Error') navigation.navigate('Products')
        else alert('Kullanıcı bulunamadı')
        console.log(data)
    }
    // donero
    // ewedon
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.image} source={require('../../assets/logo.png')} />
            </View>
            <Formik
                initialValues={{ username: "", password: "", }}
                onSubmit={handleLogin} >
                {({ handleBlur, handleChange, handleSubmit, values }) =>
                (<View style={styles.bodyContainer}>
                    <Input placeholder='Kullanıcı Adı' value={values.username}
                        onChange={handleChange('username')} iconName='account' />
                    <Input placeholder='Şifre' value={values.password}
                        onChange={handleChange('password')} iconName='lock' type={true} />
                    <Button text='Giriş Yap' onPress={handleSubmit} loading={loading} />
                </View>)}
            </Formik>
        </View>
    )
}

export default Login