import React from 'react'
import { View, Image } from 'react-native'

const Logo = () => {
    return(
        <Image source={require('../../assets/icon/logo.png')} style={{width: 190, height: 68}}/>
    )
}

export default Logo