import React, { useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native'

const Splash = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
          navigation.navigate('MyDrawer')
        }, 2500);
      }, []);
    

    return(
        <View style={style.container} />
    )
}

export default Splash

const style = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#F94A29'
    }
})