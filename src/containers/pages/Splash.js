import React from 'react'
import { View, Image } from 'react-native'
import Logo from '../../components/atoms/Logo'

const Splash = () => {
    return(
        <View style={{flex: 1, alignSelf: 'center', alignItems: 'center', justifyContent: 'center'}}>
            <Logo/>
        </View>
    )
}

export default Splash