import React from 'react'
import {StyleSheet,View,Text} from 'react-native'
import {Global}  from './styles/Global'

export default function Home (){
    return(
        <View styles={Global.container}>
            <Text style={Global.titleText}>Home Page</Text>
        </View>
    )
}

