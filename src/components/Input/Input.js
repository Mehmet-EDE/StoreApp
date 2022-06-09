import { View, TextInput } from 'react-native'
import React from 'react'
import { styles } from './Input.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Input = ({ placeholder, type, value, onChange, iconName }) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} onChangeText={onChange}
        value={value} style={styles.Input} secureTextEntry={type} />
      <Icon name={iconName} size={35} color='black' />
    </View>
  )
}

export default Input