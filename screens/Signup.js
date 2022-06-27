import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Platform,
    TextInput,
    StatusBar,
} from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';





const Signup = ({ navigation }) => {

// State Object
    const [data, setData] = useState({
        email: '',
        password: '',
        confirm_password:'',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry:true
    });

// Email Input Change Fun
    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        }
        else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
            });
        };
    }

// Password Input Handler
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        });
    };

// Confirm Password Handler
    const handleConfirmPasswordChange = (val) => {
      setData({
        ...data,
        confirm_password: val,
      });
    };

// Update secure text entry for password
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    };

// Update secure text entry for confirm password

    const updateConfirmSecureTextEntry = () =>{
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    };

    return (
        // Header 
        <View style={styles.container} >
            <StatusBar backgroundColor='#009387' barStyle='light-content' />
            <View style={styles.header} >
                <Text style={styles.text_header} >Register Now!</Text>
            </View>

{/* Footer */}
            <Animatable.View style={styles.footer}
                animation="fadeInUpBig" >
                <Text style={styles.text_footer} >Email</Text>
                <View style={styles.action} >
                    <FontAwesome name="user-o"
                        color="#05375a"
                        size={20} />
                    <TextInput style={styles.textInput}
                        placeholder="Your Email"
                        autoCapitalize='none'
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ?
                        <Animatable.View
                            animation="bounceIn" >
                            <Feather name="check-circle"
                                color="green"
                                size={20} />
                        </Animatable.View>
                        : null}
                </View>

  {/* Password */}
                <Text style={[styles.text_footer, { marginTop: 15 }]} >Password</Text>
                <View style={styles.action} >
                    <FontAwesome name="lock"
                        color="#05375a"
                        size={20} />

{/* Password Input*/}
                    <TextInput style={styles.textInput}
                        placeholder="Your Password"
                        onChangeText={(val) => handlePasswordChange(val)}
                        secureTextEntry={data.secureTextEntry ? true : false}
                        autoCapitalize='none'
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry} >
                        {data.secureTextEntry ?
                            <Feather name="eye-off"
                                color="grey"
                                size={20} />
                            :
                            <Feather name="eye"
                                color="red"
                                size={20} />}
                    </TouchableOpacity>
                </View>

{/* Confirm Password */}
                <Text style={[styles.text_footer, { marginTop: 15 }]} >Confirm Password</Text>
                <View style={styles.action} >
                    <FontAwesome name="lock"
                        color="#05375a"
                        size={20} />
                    <TextInput style={styles.textInput}
                        placeholder="Confirm Your Password"
                        onChangeText={(val) => handleConfirmPasswordChange(val)}
                        secureTextEntry={data.confirm_secureTextEntry ? true : false}
                        autoCapitalize='none'
                    />
                    <TouchableOpacity onPress={updateConfirmSecureTextEntry} >
                        {data.confirm_secureTextEntry ?
                            <Feather name="eye-off"
                                color="grey"    
                                size={20} />
                            :
                            <Feather name="eye"
                                color="red"
                                size={20} />}
                    </TouchableOpacity>
                </View>

{/* Sign Iu Button */}
                <View style={styles.button} >
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('Signin') }
                    style={styles.signIn}>
                    <LinearGradient
                        colors={['#08d4c4', '#01ab9d']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, { color: '#fff' }]}
                        >Sign Up </Text>
                    </LinearGradient>
                    </TouchableOpacity>
{/* Sign In Button */}
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={[styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15
                        }]} >
                        <Text
                            style={[styles.textSign, { color: '#009387' }]} >Sign In</Text>

                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};
export default Signup;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});