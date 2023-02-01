import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, TextInput, FlatList, Image } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import images from '../images/images'
import { useDispatch, useSelector } from 'react-redux'
// import { getProduct } from '../Redux/Reducers/Product/ProductReducer'

import { getProduct, getProductCallBack } from "../Store/Actions"

const HomeScreen = ({ navigation }) => {
  
    const dispatch = useDispatch()
    
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])

    let cat = [
        {
            id: "1",
            name: "All",
            img: images.Categories.all,
        },
        {
            id: "2",
            name: "men's",
            img: images.Categories.mens,
        },
        {
            id: "3",
            name: "jewelery",
            img: images.Categories.jewelery,
        },
        {
            id: "4",
            name: "electronics",
            img: images.Categories.electronics,
        },
        {
            id: "5",
            name: "women's",
            img: images.Categories.woman,
        },

    ]

    useEffect(() => {
        dispatch(getProductCallBack((res)=> {
            if(res) {
                // console.log('res : ' , res);
                setData(res)
                setIsLoading(false)
            }
        }))
    },[])

    // useEffect(() => {
    //     dispatch(getProduct())
    //     if(isSuccess) {
    //         setData(products)
    //         setIsLoading(loading)
    //     }
        
    // },[])

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
                <TouchableOpacity style={{width : '10%'}} onPress={() => navigation.openDrawer()}>
                    <Entypo
                        name="menu"
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
                    }}>Home</Text>
            </View>
        )
    }

    const Search = () => {
        return (
            <View style={style.searchView}>
                <TextInput
                    placeholder="Search Products"
                    style={style.searchText}
                />
            </View>
        )
    }

    const Categories = () => {
        return (
            <View>
                <View style={{ marginTop: 10, padding: 15 }}>
                    <Text style={{ fontSize: 16, fontWeight: '700', color: '#000' }}>Categories</Text>
                </View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: 10,
                        marginBottom: 20,
                    }}
                    data={cat}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity style={style.containerCat}>
                                <View style={style.BoxCategory}>
                                    <Image source={item.img} style={style.imgCategoties} />
                                </View>
                                <Text numberOfLines={2} style={style.nameCategories}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        )
    }

    const Best_Offer = () => {
        return (
            <View>
                <View style={{ margin: 10, padding: 5 }}>
                    <Text style={{ fontSize: 16, fontWeight: '700', color: '#000' }}>Best Offers</Text>
                </View>

                <FlatList
                    numColumns={2}
                    data={data}
                    contentContainerStyle={{
                        marginHorizontal: 10,
                        alignSelf: 'center',
                    }}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Details' , {product : item})}
                                style={style.BoxBestOffer}
                            >
                                <View style={style.bestOfferView}>
                                    <Image
                                        source={{ uri: item.image }}
                                        style={style.bestOfferImage}
                                    />
                                </View>
                                <View style={{marginBottom : 10}}>
                                    <Text style={style.bestOfferName}>{item.category}</Text>
                                    <Text style={style.bestOfferPrice}>${item.price}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />

            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF'}}>
            {isLoading ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator
                        size={'large'}
                        color={'#F94A29'}
                    />
                </View>
                :
                <View>
                    <Header />
                    <Search />
                    <Categories />
                   <Best_Offer />
                </View>
            }

        </View>
    )
}

export default HomeScreen

const style = StyleSheet.create({
    searchView: {
        backgroundColor: '#E8E8E8',
        marginTop: 25,
        marginHorizontal: 20,
        padding: 5,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchText: {
        width: '95%',
        fontWeight: 'bold',
        letterSpacing: 0.5
    },
    containerCat: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    BoxCategory: {
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 20,
        backgroundColor: '#FFF',
        elevation: 4,
        overflow: 'hidden'
    },
    imgCategoties: {
        width: '100%',
        height: '100%'
    },
    nameCategories: {
        fontWeight: '500',
        color: '#000',
        fontSize: 16,
        width : '90%',
        height : 40,
        textAlign : 'center'
    },
    BoxBestOffer :{
        backgroundColor : '#E8E8E8',
        justifyContent : 'center',
        padding : 10,
        margin : 5,
        borderRadius : 12,
        elevation : 5,
    },
    bestOfferView: {
        overflow: 'hidden',
        width: 175,
        height: 175,
        alignItems: 'center',
        elevation: 5,
        marginBottom: 10,
        borderRadius: 25

    },
    bestOfferImage: {
        width: 175,
        height: 175,
        
    },
    bestOfferName : {
        color : '#000',
        fontSize : 16,
        letterSpacing : 0.5
    },
    bestOfferPrice : {
        color : '#000',
        fontSize : 16,
        fontWeight : 'bold'
    }
})