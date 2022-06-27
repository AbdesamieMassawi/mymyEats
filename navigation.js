import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from './screens/Home';
import RestaurantDetails from './screens/RestaurantDetails';
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from './redux/store';
import DealDetails from "./screens/DealDetails";
import SplashScreen from "./screens/SplashScreen";
import Signup from "./screens/Signup";
import Signin from "./screens/Signin";


const store = configureStore();

export default function RootNavigation(){
const Stack = createStackNavigator();
const screenOptions = {
    headerShown:false,
};
return ( 
<ReduxProvider store={store} >
<NavigationContainer>
    <Stack.Navigator initialRouteName='SplashScreen' screenOptions={screenOptions} >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='RestaurantDetails' component={RestaurantDetails} />
        <Stack.Screen name='IdCode' component={DealDetails} />
        <Stack.Screen name='SplashScreen' component={SplashScreen} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Signin' component={Signin} />



    </Stack.Navigator>
</NavigationContainer> 
</ReduxProvider>
);

};