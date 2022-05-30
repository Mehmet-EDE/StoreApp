import { Text,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Button.style'

const Button = ({text,onPress}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button