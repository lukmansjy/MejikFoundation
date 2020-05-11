import React, { Fragment } from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CardUser = ({active}) => {
    return(
        <TouchableOpacity>
            <View style={{marginHorizontal: 4, marginVertical: 4, padding: 4, borderColor: '#cd4559', borderWidth: active ? .9 : 0, borderRadius: 4}}>
                <View style={{position: 'relative'}}>
                    <Image source={require('../../assets/icon/person.png')} style={{width: 72, height: 72, borderRadius: 6}}/>
                    <Text style={{fontSize: 14, fontWeight: '700', textAlign: 'center', color: '#3b3b3b'}}>Nikmatul</Text>
                    <Text style={{fontSize: 13, textAlign: 'center', color: '#505050'}}>Lansia</Text>
                    {active ? 
                    <View style={{position: 'absolute', height: 18, width: 18, backgroundColor: '#cd4559', borderRadius: 11, justifyContent: 'center', alignItems: 'center', top: 4, right: 4}}>
                        <Image source={require('../../assets/icon/done.png')} style={{height: 14, width: 14}}/>
                    </View>
                    : null
                    }
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CardUser

