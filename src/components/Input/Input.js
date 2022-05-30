import { View, TextInput } from 'react-native'
import React from 'react'
import { styles } from './Input.style'

const Input = ({ placeholder, type, onChange }) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} onChangeText={onChange} />
    </View>
  )
}

export default Input