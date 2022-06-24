import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function BottomTabs() {
    return (
        <View style={{
            backgroundColor: '#FFB6C1',
            flexDirection: 'row',
            justifyContent: 'space-between', alignItems: 'center', padding: 8
        }} >

            <Icon iconName='home' textIcon='Home' />
            <Icon iconName='fast-food' textIcon='Favorite' />
            <Icon iconName='cube' textIcon='Grocery' />
            <Icon iconName='star' textIcon='Special' />


        </View>
    )
}


const Icon = ({ iconName, textIcon }) => (
    <TouchableOpacity>
        <View>
        <Ionicons  name={iconName} size={30} style={{color:'#D2691E',
         alignSelf: 'center'}} /> 
           
            <Text style={{ fontWeight: '700', color: '#D2691E' }} >{textIcon}</Text>
        </View>
    </TouchableOpacity>
);
