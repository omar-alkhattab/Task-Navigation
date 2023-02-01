import 'react-native-gesture-handler';

import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import {
    HomeScreen,
    ProfileScreen,
    Cart,
    Splash,
    Details
} from "../screens"
import DrawerContent from './DrawerContent';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </Stack.Navigator>
    )
}

const MyDrawer = () => {
    return (
        <Drawer.Navigator
        initialRouteName='Home'
        drawerContent={props => <DrawerContent {...props} />}
        screenOptions={{
                headerShown:false
            }}
        >
            <Drawer.Screen name="Home" component={TabNav} />
        </Drawer.Navigator>
    )
}

const TabNav = () => {
    return (
        <Tab.Navigator
            initialRouteName='App'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 2,
                    left: 10,
                    right: 10,
                    elevation: 0,
                    backgroundColor: '#FFF',
                    borderRadius: 15,
                    height: 70,
                    ...style.shadow
                }
            }}
        >
            <Tab.Screen name="App" component={App}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[style.viewTab, { top: focused ? -5 : 0 }]}>
                            <Ionicons
                                name="home"
                                size={25}
                                color={focused ? '#F94A29' : 'black'}
                            />
                            <Text style={{ color: focused ? '#F94A29' : 'black', fontSize: 12 }}>Home</Text>
                        </View>
                    )
                }}
            />

            <Tab.Screen name="ProfileScreen" component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[style.viewTab, { top: focused ? -5 : 0 }]}>
                            <FontAwesome
                                name="user"
                                size={25}
                                color={focused ? '#F94A29' : 'black'}
                            />
                            <Text style={{ color: focused ? '#F94A29' : 'black', fontSize: 12 }}>Profile</Text>
                        </View>
                    )
                }}
            />

            <Tab.Screen name="Cart" component={Cart}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[style.viewTab, { top: focused ? -5 : 0 }]}>
                            <Ionicons
                                name="cart"
                                size={25}
                                color={focused ? '#F94A29' : 'black'}
                            />
                            <Text style={{ color: focused ? '#F94A29' : 'black', fontSize: 12 }}>Cart</Text>
                        </View>
                    )
                }}
            />

        </Tab.Navigator>
    )
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="MyDrawer" component={MyDrawer} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation

const style = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    viewTab: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})