import React from 'react'
import {StyleSheet,View,Text} from 'react-native'

export default function Home (){
    return(
        <View styles={styles.container}>
            <Text style={styles.titleText}>Home Page</Text>
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        padding:24,
        
    },
    titleText:{
        fontFamily:'OpenSans-Bold',
        fontSize:18
    }
})