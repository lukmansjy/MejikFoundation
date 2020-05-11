import React from 'react'
import { View, StatusBar } from 'react-native'
import Logo from '../../components/atoms/Logo'

const Splash = () => {
    return(
        <View style={{flex: 1, alignSelf: 'center', alignItems: 'center', justifyContent: 'center'}}>
            <StatusBar backgroundColor="#F2F2F2" barStyle="dark-content"/>
            <Logo/>
        </View>
    )
}

export default Splash