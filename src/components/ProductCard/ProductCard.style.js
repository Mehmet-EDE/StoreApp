import { StyleSheet, Dimensions } from 'react-native';

export const styles=StyleSheet.create({
 container:{
  // flex:1,
  backgroundColor:'#2B2B2B',
  margin:5,
  borderRadius:5,
  padding:7,
  borderColor:'#FF4C29',
  borderWidth:0.2,
  flexWrap:'wrap',
  flexDirection:'row'
 },
 innerContainer:{
  flex:1,
  padding:2,
  justifyContent:'space-between'
 },
 Img:{
  height:100,
  width:100,
  borderRadius:15,
  resizeMode:'contain',
  backgroundColor:'transparent'
 },
 title:{
  fontWeight:'bold',
  marginLeft:15
 },
 price:{
  fontSize:16,
  margin:5,
  textAlign:'right',
  textDecorationLine:'underline',
  fontStyle:'italic'
  
 },
 button:{
  backgroundColor:'#2C394B',
  borderRadius:51,
  color:'lime'
 }
})