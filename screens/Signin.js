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





const Signin = ({ navigation }) => {


    const [data, setData] = useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
    });

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

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        });
    };

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    };



    return (
        <View style={styles.container} >
            <StatusBar backgroundColor='#009387' barStyle='light-content' />
            <View style={styles.header} >
                <Text style={styles.text_header} >Welcome !</Text>
            </View>

{/* //Footer begins here */}
            <Animatable.View style={styles.footer}
                animation="fadeInUpBig" >

{/* Email block     */}
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

{/* Password block */}
                <Text style={[styles.text_footer, { marginTop: 15 }]} >Password</Text>
                <View style={styles.action} >
                    <FontAwesome name="lock"
                        color="#05375a"
                        size={20} />
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

{/* SignIn Button block */}
                <View style={styles.button} >
                <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        style={[styles.signIn, {
                           
                            borderWidth: 1,
                            marginTop: 5
                        }]} >
                    <LinearGradient
                        colors={['red', 'blue']}
                        style={styles.signIn}
                    >
                        
                        <Text
                            style={[styles.textSign, { color: 'yellow' }]} 
                            >Sign In</Text>
                    </LinearGradient>

                    </TouchableOpacity>

{/* SignUp Button block */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Signup')}
                        style={[styles.signIn, {
                           
                            borderWidth: 1,
                            marginTop: 15
                        }]} >
                    <LinearGradient
                        colors={['pink', 'green']}
                        style={styles.signIn}
                    >
                        
                        <Text
                            style={[styles.textSign, { color: 'yellow' }]} 
                            >Sign Up</Text>
                    </LinearGradient>

                    </TouchableOpacity>

{/* Guest Login Button */}
<TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        style={[styles.signIn, {
                           
                            borderWidth: 1,
                            marginTop: 50
                        }]} >
                   
                        
                        <Text
                            style={[styles.textSign, { color: '#009387' }]} 
                            >Enter as Guest</Text>

                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};
export default Signin;



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
        marginTop: 15
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