import { Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import styles from './Button.style'

const Button = ({ text, onPress, loading }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {
        loading ? <ActivityIndicator size={'large'} color='white' /> : <Text>{text}</Text>
      }
    </TouchableOpacity>
  )
}

export default Button