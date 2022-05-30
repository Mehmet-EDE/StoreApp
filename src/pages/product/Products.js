import { Text, View, FlatList, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './Products.style'
import Config from 'react-native-config'
import axios from 'axios'
import ProductCard from '../../components/ProductCard'
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'


const Products = ({ navigation }) => {
  const { error, loading, data } = useFetch({ url: Config.API_URL })
  const handleProductSelect = id => {
    navigation.navigate('Detail', { id })
  }
  const renderProducts = ({ item }) => <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  if (error) {
    return (
      <Error />
    )
  }
  return (
    <View style={styles.container}>

      {
        loading ? <Loading /> : <FlatList data={data} renderItem={renderProducts} />
      }

    </View>
  )
}

export default Products