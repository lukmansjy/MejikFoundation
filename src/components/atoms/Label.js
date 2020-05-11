import React from 'react'
import { View, Text } from 'react-native'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'

const Label = ({title, active, noBorder}) => {
    return(
        <TouchableOpacity style={{justifyContent: 'flex-start', flexDirection: 'row', margin: 2}}>
            <Text style={{color: active ? '#cd4559' : '#3b3b3b', fontSize: 16, fontWeight: '700', borderWidth: noBorder ? 0 : .8, borderColor: active ? '#cd4559' : '#3b3b3b', paddingVertical: 4, paddingHorizontal: 10, borderRadius: 15}}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Label