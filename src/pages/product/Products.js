import { Text, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './Products.style'
import Config from 'react-native-config'
import axios from 'axios'
import ProductCard from '../../components/ProductCard'
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'
import { useDispatch } from 'react-redux'


const Products = ({ navigation }) => {
  const dispatch = useDispatch()
  const { error, loading, data } = useFetch({ url: Config.API_URL || 'https://fakestoreapi.com/products' })
  const handleProductSelect = id => {
    navigation.navigate('Detail', { id })
  }
  const renderProducts = ({ item }) => <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  if (error) {
    console.log('err1', error)
    return (
      <Error />
    )
  }
  if (loading) {
    console.log('2', loading)
  }
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderProducts} />
    </View>
  )
}

export default Products