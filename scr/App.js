import 'react-native-gesture-handler';

import React from "react"
import { View, StyleSheet, Text } from 'react-native'
import Navigation from './Navigation'
import { Provider } from 'react-redux';
import store from './Store/store'

const App = () => {
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    )
}

export default App

const style = StyleSheet.create({})