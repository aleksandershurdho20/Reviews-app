import React,{useState} from 'react';
import Home from './screens/Home'
import * as Font  from 'expo-font'
import {appLoading, AppLoading} from 'expo'
export default function App() {
  const getFonts = () => Font.loadAsync({
      'OpenSans-Regular':require('./fonts/OpenSans-Regular.ttf'),
      'OpenSans-Bold':require('./fonts/OpenSans-Bold.ttf')
    })
    const[fontsLoaded,setFontsLoaded]=useState(false)
    if(fontsLoaded){
      return (
    
        <Home/>
      );
    }
    else{
      return(
        <AppLoading
        startAsync={getFonts}
        onFinish={()=>setFontsLoaded(true)}
      />
      )
    }

}


