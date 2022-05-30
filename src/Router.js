import {Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Products from './pages/product'
import detail from './pages/detail'
import Login from './pages/Login/Login'


const Stack =createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const TabStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Products' component={Products} />
      <Tab.Screen name='Detail' component={detail} />
    </Tab.Navigator>
  )
}
const Router = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
        <Stack.Screen name='Products' component={Products}
        options={{
          title:'Tikkan',
          headerStyle:{
            backgroundColor:'#ff7043',
          },
          headerTitleAlign:'center',
          headerTitleStyle:{color:'#000'}
        }} />
        <Stack.Screen name='Detail' component={detail}
        options={{
          title:'Detay',
          headerStyle:{
            backgroundColor:'#ff7043',
          },
          headerTitleAlign:'center',
          headerTitleStyle:{color:'#000'}
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router