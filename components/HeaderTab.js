import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';




export default function HeaderTab() {
    return (
        <View style={styles.headerContainer} >
            <LeftHeaderButton />
            <Text style={styles.headerText}>Delicious Food Only !</Text>
            <RightHeaderButton />
        </View>
    );
}


const RightHeaderButton = () => (
    <View >
        <TouchableOpacity>
            <Ionicons name='person-circle' size={39} color='#ffc0cb' />
        </TouchableOpacity>
    </View>
);


const LeftHeaderButton = () => (
    <View>
        <TouchableOpacity>
            <Ionicons name='close' size={39} color='#ffc0cb' />
        </TouchableOpacity>
    </View>
);


const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
    },
    rightHeaderButton: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'green',
    },
    leftHeaderButton: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'red'
    },
    headerText: {
        marginTop: 1,
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold', 
        justifyContent: 'center',
        alignItems: 'center',
    },

});