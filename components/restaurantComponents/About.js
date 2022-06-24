import React from 'react'
import { View, Text, Image,StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
// import Ionicons from 'react-native-vector-icons/Ionicons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Divider } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';






const styles = StyleSheet.create({
    menuItemStyle: {
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 20,
    },
  
    titleStyle: {
      fontSize: 19,
      fontWeight: "600",
    },
  });


export const foods = [{
    title: "Djaj Mhamar🐓",
    image:
        "https://www.sunset.com/wp-content/uploads/VERSE-Interior_Credit_-Wonho-Frank-Lee-1200x600.jpg",
     description: 'al hrami maymotchi!',
    price: "$20.20",
    
}, 
{
    title: "Lahm Mjamar🐓🐓🐓",
    image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNBeL0NMs0tgfzGzBuJoEW1OVVij6irIFQg&usqp=CAU",
     description: 'banin w bogoss',
    price: "$30.80",
    
},
{
    title: "Hout Machwi🐓🐓🐓🐓🐓🐓",
    image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNBeL0NMs0tgfzGzBuJoEW1OVVij6irIFQg&usqp=CAU",
     description: 'Poisson tres delicieux!',
    price: "$66.80",
    
},
{
    title: "Hout Machwi🐓🐓🐓🐓🐓🐓",
    image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNBeL0NMs0tgfzGzBuJoEW1OVVij6irIFQg&usqp=CAU",
     description: 'Poisson tres delicieux!',
    price: "$66.80",
    
},
{
    title: "Hout Machwi🐓🐓🐓🐓🐓🐓",
    image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNBeL0NMs0tgfzGzBuJoEW1OVVij6irIFQg&usqp=CAU",
     description: 'Poisson tres delicieux!',
    price: "$66.80",
    
}, ];








export default function About({restaurantName}) {


 const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) =>
  dispatch({
    type: "ADD_TO_CART",
    payload: {...item,
       restaurantName:restaurantName,
        checkboxValue:checkboxValue,
       }
  });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        {foods.map((food, index) => (
          <View key={index}>
            <View style={styles.menuItemStyle}>
            
                <BouncyCheckbox
                  iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                  fillColor="green"
                  isChecked={isFoodInCart(food, cartItems)}
                  onPress={(checkboxValue)=> selectItem(food, checkboxValue) }
                 
                 
                />
              <FoodInfo food={food} />
              <FoodImage food={food}  />
            </View>
            <Divider
              width={0.5}
              orientation="vertical"
              style={{ marginHorizontal: 20 }}
            />
          </View>
        ))}
      </ScrollView>
    );
  }
  
  const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
      <Text style={styles.titleStyle}>{props.food.title}</Text>
      <Text>{props.food.description}</Text>
      <Text>{props.food.price}</Text>
    </View>
  );
  
  const FoodImage = ({  ...props }) => (
    <View>
      <Image
        source={{ uri: props.food.image }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 8,
         
        }}
      />
    </View>
  );

























// const FoodImage = ({imageUri})=> (
// <View>
//     <Image source={{uri:imageUri}} style={{height: 100, width: 393,
//      borderRadius:1, marginLeft:50
//          }}  />
         
          
// </View>
// );

// const ItemInfo = ({itemName, itemPrice, itemReviews, itemRating }) => (
//     <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
//     <View>
//         <Text style={{
//             fontSize: 20,
//             fontWeight: '900',
//             color: 'black',
//             marginLeft: 10,
//         }} >{itemName}</Text>
//         <View style={{ flexDirection: 'row', marginLeft: 10 }}>
//             <Text style={{ color: 'black' }} >{itemPrice}</Text>
//             <Text style={{ color: 'black' }} > Delivery Fee •</Text>
//             <Text>{itemReviews}</Text>
//         </View>
//         <Text style={{ marginLeft: 10, color: 'black' }} >30-45 • mim </Text>
//     </View>
//     <View style={{
//         backgroundColor: '#FFB74D',
//         borderRadius: 20, height: 25,
//         width: 25, marginRight:10, marginTop:6 ,
//         alignItems: 'center', justifyContent: 'center'
//     }} >
//         <Text>{itemRating}</Text>
//     </View>
// </View>
// );



  













{/* <ItemInfo itemName={item.name} itemPrice={item.price} 
itemReviews={item.reviews} itemRating={item.rating}  />
<TouchableOpacity style={{ position: 'absolute',color:'red', marginLeft: 350, marginTop: 10 }}>
<Ionicons name='heart-outline' size={25} style={{color:'red'}} />
</TouchableOpacity>
<TouchableOpacity style={{ position: 'absolute',color:'red', marginLeft: 320, marginTop: 10}}>
<Ionicons name='person-add-outline' size={25} style={{color:'red'}} />
</TouchableOpacity>
<TouchableOpacity style={{ position: 'absolute',color:'red', marginLeft: 290, marginTop: 10 }}>
<Ionicons name='share-outline' size={25} style={{color:'red'}} />
</TouchableOpacity> */}