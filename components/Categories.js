import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'



const items = [{
    image: require('../assets/images/tajine.png'),
    text: 'Tajines',
},
{
    image: require('../assets/images/bastila.png'),
    text: 'Bastila',
},
{
    image: require('../assets/images/drinks.png'),
    text: 'Drinks',
},
{
    image: require('../assets/images/fastFood.png'),
    text: 'Fast Food',
},
{
    image: require('../assets/images/halawiyat.png'),
    text: 'Halawiyat',
},
{
    image: require('../assets/images/sandwitchs.png'),
    text: 'Sandwitchs',
},
{
    image: require('../assets/images/tacos.png'),
    text: 'Tacos',
},
];

export default function Categories() {
    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal >
            {items.map((item, index) => (
                <View key={index} style={{
                    justifyContent: 'center', alignItems: 'center', marginVertical:10}} >
                    <Image source={item.image}
                        style={{
                            width: 100, height: 80, 
                            borderRadius: 100, marginLeft: 5,}} />
                    <Text style={{
                        fontSize: 20, fontWeight: '400', color: '#FFE4E1',
                         justifyContent:'center', alignItems:'center'
                    }} >{item.text} </Text>
                </View>
            ))}
        </ScrollView>
    )
};


