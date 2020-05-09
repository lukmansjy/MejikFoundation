import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const MyButton = ({style, title}) => {
    return(
        <TouchableOpacity style={{
            backgroundColor: style.backgroundColor,
            paddingVertical: 11,
            borderRadius: 4,
            alignItems: 'center',
            marginVertical: 10,
            borderWidth: style.borderColor ? 1 : 0,
            borderColor: style.borderColor ? style.borderColor : 'white'
        }}>
            <Text style={{color: style.color, fontWeight: '700', fontSize: 16, letterSpacing: .2}}>{title}</Text>
        </TouchableOpacity>
    )
}


export default MyButton