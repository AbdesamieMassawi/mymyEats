import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const localDealRestaurants = [{
    name: "Kebab Shop-Fes🍖🍖",
    image_url:
        "https://tasteofmaroc.com/wp-content/uploads/2017/09/kebab-christine-2.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1944,
    rating: 4.1,
}, 
{
    name: "CousCous-Fes🥘",
    image_url:
        "https://www.thespruceeats.com/thmb/lqWGIMJgOTltLnd74zOXTiIawhM=/2562x2562/smart/filters:no_upscale()/couscous-getty-3890-x-2562-56a645de5f9b58b7d0e0c3b1.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1674,
    rating: 3.8,
},
{
    name: "Shawarma Food-Fes🔥🔥",
    image_url:
        "https://i.pinimg.com/736x/c6/b4/36/c6b4362763fc9a2b8ddcfca96c835cb0.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1544,
    rating: 4.8,
}];



export default function DealsRestaurant({navigation}) {
    return (
        <>
        <Text style={{fontWeight:'bold',color:'#F44336' , fontSize:30, 
        marginLeft:10,
        marginVertical:10
        }} >Today's Deals!</Text>
      <ScrollView horizontal={true}  >
    
        {localDealRestaurants.map((dealRestaurant, index) => (
            <TouchableOpacity key={index} onPress={()=> navigation.navigate('RestaurantDetails') } >
           <View   style={{ flexDirection:'row', marginLeft:5}}>

                <View>
            <DealRestaurantImage dealRestaurantImage={dealRestaurant.image_url} />
            <DealRestaurantInfo  dealRestaurantName={dealRestaurant.name} dealRestaurantPrice={dealRestaurant.price}
            dealRestaurantReviews={dealRestaurant.reviews} dealRestaurantRating={dealRestaurant.rating}
             /> 
             </View>
            </View>
            </TouchableOpacity>
            ))}
</ScrollView>
            </>
    )
};



const DealRestaurantImage = ({dealRestaurantImage})=> (
    <View>
        <Image source={{uri: dealRestaurantImage}} style={{height:170, width:170, borderRadius:20, margin:1}} />
       <View style={{ position: 'absolute', marginLeft: 140, marginTop: 10 }} >
       <Ionicons name='bookmark' size={20} color='white' />
           </View> 
    </View>
);


const DealRestaurantInfo = ({dealRestaurantName, dealRestaurantPrice,
     dealRestaurantReviews, dealRestaurantRating}) => (
    <View  style={{marginLeft:5}}>
        
        <Text style={{fontSize:15, fontWeight:'700', color:'#E53935'}} >{dealRestaurantName}</Text>
        <Text>{dealRestaurantPrice}</Text>
       
        <View style={{flexDirection:'row', justifyContent:'space-between'}} > 
        <Text>{dealRestaurantReviews}</Text>

        <View style={{height:25, width:25, backgroundColor:'#E74C3C', 
        borderRadius:20,
        marginRight:10,
        justifyContent:'center',
        alignItems:'center',
        }}  > 
        <Text style={{color:'yellow',}} >{dealRestaurantRating}</Text>
        </View>
        </View>
        <Text >25-40 •min </Text>

    </View>
);