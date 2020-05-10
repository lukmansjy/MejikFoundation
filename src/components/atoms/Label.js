import React from 'react'
import { View, Text } from 'react-native'

const Label = ({title, info, center, titleFontSize}) => {
    return(
        <View style={{justifyContent: 'flex-start', flexDirection: 'row', margin: 2}}>
            <Text style={{color: '#3b3b3b', fontSize: 16, fontWeight: '700', borderWidth: 1, paddingVertical: 4, paddingHorizontal: 10, borderRadius: 15}}>All</Text>
        </View>
    )
}

export default Label