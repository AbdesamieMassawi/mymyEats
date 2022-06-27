import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, ScrollView } from 'react-native'
import BelowHeaderTab from '../components/BelowHeaderTab';
import BottomTabs from '../components/BottomTabs';
import Categories from '../components/Categories';
import DealsRestaurant from '../components/DealsRestaurant';
import HeaderTab from '../components/HeaderTab'
import Restaurants, { localRestaurants } from '../components/Restaurants';
import SearchBar from '../components/SearchBar';


const YELP_API_KEY = '';

export default function Home({ navigation }) {
    const [restaurantData, setRestaurantData] = useState(localRestaurants)

    const getRestaurantsFromYelp = () => {
        const yelpUrl = '';
        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };
        return fetch(yelpUrl, apiOptions).then((res) => res.json())
            .then((json) => setRestaurantData(json.businesses));
    };
    useEffect(() => {
        getRestaurantsFromYelp();
    }, []);



    return (
        <SafeAreaView style={{ backgroundColor: '#009387', flex: 1 }} >
            <HeaderTab />
            <SearchBar />
            <ScrollView showsVerticalScrollIndicator={false} >
                <BelowHeaderTab />
                <Categories />
                <Restaurants restaurantData={restaurantData}
                    navigation={navigation} />
                <DealsRestaurant navigation={navigation} />
                <View stylele={{
                    backgroundColor: '#66FFFF',
                    height: 200, width: 200
                }} ></View>

            </ScrollView>
            <BottomTabs />
        </SafeAreaView>
    );
}
