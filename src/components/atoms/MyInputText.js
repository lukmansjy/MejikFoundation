import React, { Fragment } from 'react'
import { Text, TextInput, View, Image } from 'react-native'

const MyInputText = ({label, placeholder, imgIcon, labelImgIcon, keyboardType}) => {
    return(
        <Fragment>
            <Text style={{fontSize: 18, fontWeight: '700', marginVertical: 7, color: '#3b3b3b'}}>{label}</Text>
            <View style={{position: 'relative'}}>
                <TextInput keyboardType={ keyboardType ? keyboardType : 'default'} style={{borderWidth: .6, borderColor: '#b3b3b3', borderRadius: 4, height: 42, marginBottom: 10, paddingRight: 8, paddingLeft: imgIcon ?  66 : 8 }} placeholder={placeholder}/>
                
                {imgIcon ? 
                    <View style={{position: 'absolute', top: 11, marginHorizontal: 8, flexDirection: 'row'}}>
                        <Image style={{ width: 22, height: 18, borderRadius: 2, marginRight: 6}} source={imgIcon}/>
                        <Text style={{fontWeight: '700', fontSize: 16, color: '#3b3b3b'}}>{labelImgIcon}</Text>
                    </View>
                : null
                }
                
            </View>
        </Fragment>
    )
}

export default MyInputText