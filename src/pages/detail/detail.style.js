import { StyleSheet, Dimensions } from 'react-native'


export const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#2c313c',
 },
 image:{
  height:Dimensions.get('window').height/3,
  width:Dimensions.get('window').width,
  padding:10,
  resizeMode:'contain',
  backgroundColor:'white'
 },
 title:{
  fontSize:25,
  color:'white',
  margin:5,
  marginBottom:15,
 },
 price:{
  margin:20,
  fontWeight:'bold',
  color:'white',
  textAlign:'right'
 },
 desc:{
  fontStyle:'italic',
  fontSize:18,
  letterSpacing:0.5,
  color:'white'
 }
})