import React, { Fragment } from 'react'
import { Text, TextInput, View, Image } from 'react-native'

const MyInputText = ({label, placeholder, imgIconLeft, labelImgIconLeft, keyboardType, onChangeText, value, imgIconRight, labelImgIconRight, password}) => {
    
    return(
        <Fragment>
            <Text style={{fontSize: 18, fontWeight: '700', marginVertical: 7, color: '#3b3b3b'}}>{label}</Text>
            <View style={{position: 'relative'}}>
                <TextInput secureTextEntry={password ? true : false} value={value} onChangeText={onChangeText} keyboardType={ keyboardType ? keyboardType : 'default'} style={{borderWidth: .6, borderColor: '#b3b3b3', borderRadius: 4, height: 42, marginBottom: 10, paddingRight: imgIconRight ?  38 : 8 , paddingLeft: imgIconLeft ?  66 : 8 }} placeholder={placeholder}/>
                
                {imgIconLeft ? 
                    <View style={{position: 'absolute', top: 11, marginHorizontal: 8, flexDirection: 'row'}}>
                        <Image style={{ width: 22, height: 18, borderRadius: 2, marginRight: 6}} source={imgIconLeft}/>
                        <Text style={{fontWeight: '700', fontSize: 16, color: '#3b3b3b'}}>{labelImgIconLeft}</Text>
                    </View>
                : null
                }

                {imgIconRight ? 
                    <View style={{position: 'absolute', top: 11, right: 0, marginHorizontal: 8, flexDirection: 'row'}}>
                        <Image style={{ width: 22, height: 18, borderRadius: 2, marginLeft: 6}} source={imgIconRight}/>
                        <Text style={{fontWeight: '700', fontSize: 16, color: '#3b3b3b'}}>{labelImgIconRight}</Text>
                    </View>
                : null
                }

                
            </View>
        </Fragment>
    )
}

export default MyInputText