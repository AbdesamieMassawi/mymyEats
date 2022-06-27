import { View, Text, Button, StyleSheet, Image } from 'react-native'
import React from 'react'



const styles = StyleSheet.create({
  ItemOneStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    fontSize: 50,
    fontWeight: '900',
    color: 'red',
  }, 
  ItemTwoStyle:{
    display:'flex',
    margin: 20,
    fontSize: 30,
    fontWeight: '600',
  },
})




const  DealDetails = () =>{
  return (
    <View style={{alignItems:'center'}}>
      <Text style={styles.ItemOneStyle} >Today's Deal is Unbelievable </Text>
      <Image style={{
          width: 350,
          height: 200,
          borderRadius: 50,
          marginTop: 10,
         
        }}
      source={{uri:'https://t3.ftcdn.net/jpg/03/09/85/36/360_F_309853648_yJJrVCYncv1D4raXzSH39WUlrRMLEwv3.jpg'}} />
    <Text style={styles.ItemTwoStyle} >You will have chicken chawarma sandwich with 5DH only + Soda for free.Quantity is limited! </Text>
    <View>
      <Button title="Order Now" color="red" />
      <Button title="Call us Now"></Button>   
       </View>
    
    </View>
  )
}
export default DealDetails