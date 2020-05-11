import React from 'react'
import { View, Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CardArticle = () => {
    return(
        <TouchableOpacity style={{flexDirection: 'row', marginVertical: 4}}>
            <Image source={require('../../assets/icon/person.png')} style={{width: 70, height: 70, borderRadius: 4}}/>
            <View style={{marginLeft: 12}}>
                <Text style={{fontSize: 18, fontWeight: '700', color: '#3b3b3b'}}>Title</Text>
                <Text style={{fontSize: 16, color: '#444'}}>Description</Text>
                <Text style={{fontSize: 14, color: '#cd4559'}}>Read more...</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CardArticle