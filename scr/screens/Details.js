import React from "react"
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Details = ({route,navigation}) => {
    
    const Product = route.params.product

    console.log('Product: ' ,Product);

    const Header = () => {
        return (
            <View style={{
                width: '100%',
                height: 55,
                alignItems : 'center',
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
                    }}>Details
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Ionicons
                        name="cart"
                        size={35}
                        color={"#F94A29"}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    const RenderImage = () => {
        return(
            <View style={style.imageView}>
                <Image
                    source={{uri : Product.image}}
                    style={style.image}
                />
            </View>
        )
    }

    const ProductInfo = () => {
        return(
            <View style={{width : '95%', alignSelf : 'center'}}>
                <Text style={style.titleProduct}>{Product.title}</Text>
                <Text style={style.descProduct}>{Product.description}</Text>
            </View>
        )
    }

    const AddToCart = () => {
        return(
            <View style={style.btnView}>
                <TouchableOpacity
                    style={style.btnAdd}
                    onPress={() => console.log('Press Add To Cart')}
                >
                    <Text style={{color:'#FFF' , fontWeight : '700' , fontSize : 16}}>Add To Cart</Text>
                    <Ionicons
                        name="cart-outline"
                        size={35}
                        color={"#FFF"}
                    />
                </TouchableOpacity>
                <Text style={style.price}>${Product.price}</Text>
            </View>
        )
    }
    
    return(
        <View style={{flex : 1 , paddingHorizontal : 10}}>
            <Header />
            <RenderImage />
            <View style={{height : '35%'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ProductInfo />
            </ScrollView>
            <AddToCart />
            </View>
            
        </View>
    )
}

export default Details

const style = StyleSheet.create({
    imageView : {
        width : '95%',
        height : '45%',
        backgroundColor : '#FFF',
        alignSelf : 'center',
        marginVertical : 20,
        borderRadius : 20,
        paddingHorizontal : 20,
        paddingVertical : 50,
        elevation : 4
    },
    image : {
       width : '100%',
       height : '100%',
       borderRadius : 10,
       resizeMode : 'center'
    },
    titleProduct : {
        color : '#000',
        fontWeight : '700',
        fontSize : 22
    },
    descProduct : {
        paddingTop : 5,
        fontSize : 16
    },
    btnView : {
        marginTop : 20,
        width : '95%',
        paddingHorizontal : 10,
        flexDirection : 'row',
        alignItems : 'center',
    },
    btnAdd : {
        width : '50%',
        flexDirection : 'row',
        backgroundColor : '#F94A29',
        height : 55,
        alignItems : 'center',
        justifyContent : 'space-evenly',
        borderRadius : 30,
        paddingHorizontal : 5,
        marginRight : 10
    },
    price : {
        fontSize : 20,
        fontWeight : 'bold',
        color : '#000'
    }
})