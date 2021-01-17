import React from 'react';
import { ImageBackground, StyleSheet , View, Image,Text} from 'react-native';


import colors from "../app/config/colors";

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../app/assets/background.jpg')}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../app/assets/logo-red.png")}/>
            <Text> Sell What You Don't Need</Text>
        </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems: "center"
    },
    loginButton:{
        width:"100%",
        height:70,
        backgroundColor:colors.primary,
    },
    registerButton:{
        width:"100%",
        height:70,
        backgroundColor:colors.secondary,
       
    },
    logo:{
        width:100,
        height:100,
    },
    logoContainer:{
        top:70,
        position:"absolute",
        alignItems: "center"

    }
})

export default WelcomeScreen;