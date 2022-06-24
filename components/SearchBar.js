import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function SearchBar() {
    return (
        <View   style={{ marginBottom:5, flexDirection: "row" }}>
           <GooglePlacesAutocomplete 
           query={{key:'AIzaSyDR_p4rkGXuf7hXKEyUqfjbHNXWR9NWPRQ'}}
           placeholder='Search' 
           styles= {{
            textInput: {
                backgroundColor: "#FFB6C1",
                borderRadius: 20,
                fontWeight: "700",
                color:'black'
                },
       
              textInputContainer: {
                marginLeft: 10,
                marginRight:10,
                backgroundColor: "#FFB6C1",
                borderRadius: 50,
                flexDirection: "row",
                alignItems: "center",
              }, }}

            renderRightButton= {()=>( 
              <View style={{marginRight:10}} >
                <Ionicons name='options' size={25} color='red'/>
              </View>
            )}  
          renderLeftButton={() => (
            <View style={{ marginLeft: 10, flexDirection:'row' }}>
              <Ionicons name='search' size={25} color='red' style={{marginRight:10,}} />
              <Divider orientation='vertical' width={1}  />
              
            </View>
          )}

             
             />
        </View>
    )
};
