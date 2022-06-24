import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons';


export default function BelowHeaderTab() {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between',
        marginBottom:0 }}>
            <View>
                <Text style={styles.deliverNow}>Deliver Now To :</Text>
                <AdressButton/>
            </View>
           <View>
            <DeliveryButton/>
            </View>


        </View>
    )
};


const AdressButton = ()=>(
                    <TouchableOpacity style={styles.addressButton}>
                        <Text style={{fontWeight:'600',
                                      fontSize:22,
                                      color:'black',

                    }} >Adress</Text>
                        <Ionicons name='chevron-down' size={25} color='black' 
                        style={{marginLeft:3}} />
                        </TouchableOpacity>
                   
                
) ;


const DeliveryButton = ()=> (
                <TouchableOpacity style={styles.deliveryButton} >
                    <Text style={{fontSize:16, fontWeight:'700'}} >Delivery</Text>
                    <Ionicons name='chevron-down' size={25} color='#0000CC'
                    style={{marginLeft:5}} />
                </TouchableOpacity>

        
);

const styles = StyleSheet.create({
    deliverNow: {
        fontSize: 16,
        fontWeight:'500',
        marginLeft: 15,
        color: 'white',
        fontWeight:'400',
    },
    addressButton:{
        flexDirection:'row',
        marginLeft: 15,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal: 5,
        paddingLeft:10 ,
        backgroundColor:'#E6E6FA',
        borderRadius:10,

    },
    deliveryButton:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#D5DBDB',
        borderRadius:15,
        paddingHorizontal:25,
        paddingVertical:7,
        margin:5
    
    },
});
