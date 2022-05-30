import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './Login.style'
import Input from '../../components/Input'
import Button from '../../components/Button'


const Login = () => {
 const handlePress = () => {

 }
 return (
  <View style={styles.container}>
   <View style={styles.logoContainer}>
    <Image style={styles.image} source={require('../../assets/logo.png')} />
   </View>
   <View style={styles.bodyContainer}>
    <Input placeholder='Kullanıcı Adı' />
    <Input placeholder='Şifre' />
    <Button text='Giriş Yap' onPress={handlePress} />
   </View>
  </View>
 )
}

export default Login