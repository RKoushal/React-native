import React from 'react';
import { Image , StyleSheet, View} from 'react-native';
import colors from '../app/config/colors';

function ViewImageScreen(props) {
    return (
    <View style={styles.container}>
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
       <Image 
       resizeMode="contain" 
       style={styles.image}
       source={require("../app/assets/chair.jpg")}/>
       </View>
    );
}

const styles = StyleSheet.create({
    deleteIcon:{
     width:50,
     height:50,
     position:"absolute",
     top:30,
     right:40,
     backgroundColor:colors.secondary,
    },
    closeIcon:{
     width:50,
     height:50,
     position:"absolute",
     top:30,
     left:50,
     backgroundColor:colors.primary,
    },
    container:{
      backgroundColor:colors.black,
      flex:1
    },
    image:{
        width:"100%",
        height:"100%"
    }
})

export default ViewImageScreen;