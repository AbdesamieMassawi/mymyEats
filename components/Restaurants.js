import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'




export const localRestaurants = [{
    name: "Capitale de poulet-Fes 🐓",
    image_url:
        "https://www.sunset.com/wp-content/uploads/VERSE-Interior_Credit_-Wonho-Frank-Lee-1200x600.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1544,
    rating: 4.8,
}, {
    name: "Capitale de poisson-Fes 🐟",
    image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNBeL0NMs0tgfzGzBuJoEW1OVVij6irIFQg&usqp=CAU",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.5,
},
{
    name: "Sushi For EveryOne-Fes 🍣",
    image_url:
        "https://media-cdn.tripadvisor.com/media/photo-s/18/10/ac/5b/des-petits-sushiiiiis.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1144,
    rating: 4.0,
}];


export default function Restaurants({navigation, ...props}) {
    return (
        <>
            {props.restaurantData.map((restaurant, index) => (
                <TouchableOpacity activeOpacity={1}
                 key={index} onPress={()=> navigation.navigate('RestaurantDetails' , {
                    name: restaurant.name,
                    image: restaurant.image_url,
                    price: restaurant.price,
                    reviews: restaurant.review_count,
                    rating: restaurant.rating,
                    categories: restaurant.categories,
                  }) }>
                <View>

                    <RestaurantImage imageUri={restaurant.image_url} />
                    <RestaurantInfo restaurantName={restaurant.name}
                        restaurantPrice={restaurant.price}
                        restaurantRating={restaurant.rating}
                        restaurantReviews={restaurant.reviews} />
                </View>
                </TouchableOpacity>
            ))}
        </>

    )
}


const RestaurantImage = ({ imageUri }) => (
    <View style={{ flexDirection: 'row' }} >
        <Image source={{ uri:imageUri }}
            style={{ height: 250, width: 385, margin: 4, borderRadius: 100 }} />
        <TouchableOpacity style={{ position: 'absolute', marginLeft: 310, marginTop: 15 }}>
            <MaterialCommunityIcons name='heart-outline'
                size={25}
                color='#B0C4DE'
            />
        </TouchableOpacity>

    </View>
);

const RestaurantInfo = ({ restaurantName, restaurantPrice, restaurantReviews, restaurantRating }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
        <View>
            <Text style={{
                fontSize: 20,
                fontWeight: '900',
                color: '#FFE4E1',
                marginLeft: 10,
            }} >{restaurantName}</Text>
            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                <Text style={{ color: '#FFE4E1' }} >{restaurantPrice}</Text>
                <Text style={{ color: '#FFE4E1' }} > Delivery Fee •</Text>
                <Text>{restaurantReviews}</Text>
            </View>
            <Text style={{ marginLeft: 10, color: '#FFE4E1' }} >30-45 • mim </Text>
        </View>
        <View style={{
            backgroundColor: '#F0FFFF',
            borderRadius: 20, height: 25,
            width: 25, marginRight:10, marginTop:6 ,
            alignItems: 'center', justifyContent: 'center'
        }} >
            <Text>{restaurantRating}</Text>
        </View>
    </View>
);


