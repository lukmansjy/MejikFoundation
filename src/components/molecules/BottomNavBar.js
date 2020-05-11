import React from 'react'
import { Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const BottomNavBar = ({toPage}) => {
    return(
        <View style={{ position: 'relative', borderTopWidth: .6, backgroundColor: '#fdfdfd', borderTopColor: '#ddd'}}>

            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <TouchableOpacity style={{paddingVertical: 4, alignItems: 'center'}}>
                    <View style={{backgroundColor: '#cd4559', padding: 4, borderRadius: 4}}>
                        <Image source={require('../../assets/icon/list.png')} style={{width: 28, height: 28}} />
                    </View>
                    <Text style={{color: '#cd4559'}}>Article</Text>
                </TouchableOpacity>
                <View>
                </View>
                <TouchableOpacity style={{paddingVertical: 4, alignItems: 'center'}}>
                    <Image source={require('../../assets/icon/setting.png')} style={{width: 34, height: 34, opacity: .8}} />
                    <Text style={{color: '#3b3b3b'}}>Setting</Text>
                </TouchableOpacity>
            </View>
            <View style={{position: 'absolute', alignSelf: 'center', top: -28}}>
                <TouchableOpacity onPress={()=>toPage('Welcome')} style={{alignItems: 'center'}}>
                    <View>
                        <View style={{width: 60, height: 60, backgroundColor: '#cd4559', borderRadius: 33, padding: 10, borderWidth: 4, borderColor: '#fdfdfd', justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={require('../../assets/icon/donate.png')} style={{width: 34, height: 34}} />
                        </View>
                    </View>
                    <Text style={{color: '#3b3b3b'}}>Donate</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default BottomNavBar

