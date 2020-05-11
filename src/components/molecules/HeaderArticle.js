import React, { Fragment } from 'react'
import { View, Image, Text, StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const HeaderArticle = () => {
    return(
        <Fragment>
            <StatusBar backgroundColor="#F2F2F2" barStyle="dark-content"/>
            <View style={{borderBottomWidth: .5, borderBottomColor: '#cdcdcd', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 13, paddingHorizontal: 14, alignItems: 'center'}}>
                <Text style={{fontSize: 28, fontWeight: '700', color: '#3b3b3b'}}>Article</Text>
                <View>
                    <TouchableOpacity>
                        <Image source={require('../../assets/icon/search.png')} style={{width: 25, height: 25}}/>
                    </TouchableOpacity>
                </View>
            </View>
        </Fragment>
    )
}

export default HeaderArticle

