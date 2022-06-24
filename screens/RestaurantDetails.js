import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import About from '../components/restaurantComponents/About'
import HeaderAbout from '../components/restaurantComponents/HeaderAbout'
import ViewCart from '../components/restaurantComponents/ViewCart'

export default function RestaurantDetails({navigation, route}) {
    return (
        <SafeAreaView>
        <View style={{backgroundColor:'#66FFFF'}} >
            <ScrollView showsVerticalScrollIndicator={false}>
            <HeaderAbout route={route}/>
            <About  restaurantName ={route.params.name}/>
            </ScrollView>
            <ViewCart navigation={navigation}  restaurantName ={route.params.name} />
        </View>
        </SafeAreaView>
    )
}
