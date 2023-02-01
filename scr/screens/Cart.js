import React from "react"
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Cart = ({navigation}) => {

    const Header = () => {
        return (
            <View style={{
                width: '100%',
                height: 55,
                borderBottomWidth: 0.5,
                borderBottomColor: '#CDCDCD',
                alignItems : 'center',
                paddingHorizontal: 15,
                flexDirection : 'row'
            }}
            >
               <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons
                        name="arrow-back"
                        size={35}
                        color={"#F94A29"}
                    />
                </TouchableOpacity>
                <Text style={{
                    width : '80%',
                    textAlign : 'center',
                    fontSize : 18,
                    fontWeight : 'bold',
                    color : '#000'
                    }}>My Cart</Text>
            </View>
        )
    }

    return(
        <View style={{flex : 1}}>
            <Header />
        </View>
    )
}

export default Cart

const style = StyleSheet.create({})