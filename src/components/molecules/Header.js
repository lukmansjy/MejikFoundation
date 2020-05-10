import React from 'react'
import { View, Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Header = ({imgLeft, imgRight, title, border}) => {
    if(!imgLeft){
        imgLeft = require('../../assets/icon/back.png')
    }
    return(
        <View style={{position: 'relative', borderBottomWidth: border ? 0.5 : 0, borderBottomColor: '#cdcdcd'}}>
            <Text style={{textAlign: 'center', position: 'absolute', width: '100%', fontSize: 20, fontWeight: '700', color: '#3b3b3b', top: 11}}>{title}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 13, paddingHorizontal: 14}}>
                <TouchableOpacity>
                    <Image source={imgLeft} style={{width: 24, height: 24}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    {imgRight ? <Image source={imgRight} style={{width: 26, height: 26}}/> : null}
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

