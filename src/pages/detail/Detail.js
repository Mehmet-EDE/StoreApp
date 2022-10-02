import { Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { styles } from './detail.style'
import useFetch from '../../hooks/useFetch'
import Config from 'react-native-config'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'
const Detail = ({ route }) => {
  const { id } = route.params

  const { error, loading, data } = useFetch({ url: `${Config.API_URL}/${id}` })
  console.log(data)
  if (error) {
    return (
      <Error />
    )
  }
  if (!loading) {
    console.log('1', loading)
    return <Loading />
  }
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: data.image }} />
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.price}>{data.price}₺</Text>
      <Text style={styles.desc}>{data.description}</Text>
    </ScrollView>
  )
}

export default Detail