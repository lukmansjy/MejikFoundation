import React, { useState, Fragment } from 'react'
import { Text, View, Image } from 'react-native'
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler'
import ImagePicker from 'react-native-image-picker'
import Header from '../../components/molecules/Header'
import MyButton from '../../components/atoms/MyButton'

const Transfer = () => {

    const [state, setState] = useState({
        proofTransfer: null
    })
    
    const options = {
        title: 'Select Picture Transfer'
    };

    const chooseImage = () =>{
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response)
            
            if (response.didCancel) {
                console.log('User cancelled image picker')
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error)
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton)
            } else {
                const source = { uri: response.uri }

                setState({
                    proofTransfer: source,
                })
            }
        })
    }

    const clearImage = () => {
        setState({
            proofTransfer: null,
        })
    }
    
    return(
        <View>
            <Header border title="Proof of Transfer"/>

            <ScrollView>
                <View style={{marginHorizontal: 20, alignItems: 'center'}}>
                    <Image source={require('../../assets/icon/bca-logo.png')} style={{width: 170, height: 70}}/>
                    <Text style={{fontSize: 16, color: '#444', marginTop: 10}}>Virtual Account</Text>
                    <Text style={{fontSize: 20, color: '#3b3b3b', fontWeight: '700', marginBottom: 6}}>0012-2341-8361-9381</Text>
                    <Text style={{fontSize: 16, color: '#444', marginTop: 10}}>Name Holder</Text>
                    <Text style={{fontSize: 20, color: '#3b3b3b', fontWeight: '700', marginBottom: 6}}>Mejik Foundation</Text>
                </View>
                <View style={{height: 10, backgroundColor: '#ddd', marginTop: 14, marginBottom: 10}}></View>
                <View style={{marginHorizontal: 20}}>
                    <Text style={{fontSize: 20, fontWeight: '700', marginVertical: 7, color: '#3b3b3b'}}>Bill Summary</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{marginLeft: 36, marginTop: 6}}>
                            <Text style={{fontSize: 18, fontWeight: '700', color: '#3b3b3b'}}>Titiek Handayani</Text>
                            <Text style={{fontSize: 16, color: '#444'}}>Lansia</Text>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 6}}>
                            <Text style={{fontSize: 18, color: '#888', fontWeight: '700', marginRight: 22}}>3x</Text>
                            <Text style={{fontSize: 18, color: '#cd4559', fontWeight: '700'}}>Rp300.000</Text>
                        </View>
                    </View>
                </View>
                <View style={{height: 1, backgroundColor: '#ddd', marginVertical: 16}}></View>
                <View style={{marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 17, fontWeight: '700', color: '#3b3b3b'}}>Total</Text>
                    <Text style={{fontSize: 20, color: '#cd4559', fontWeight: '700'}}>Rp300.000</Text>
                </View>
                <View style={{marginHorizontal: 20,marginVertical: 8 ,borderWidth: 1, borderStyle: 'dashed', borderRadius: 4, borderColor: '#cd4559'}}>
                    <View style={{alignItems: 'center', marginVertical: 8, marginHorizontal: 8}}>
                        {!state.proofTransfer ? 
                            <Fragment>
                                <TouchableOpacity onPress={()=>chooseImage()}>
                                    <Image source={require('../../assets/icon/new-file.png')} style={{width: 80, height: 80, opacity: .6}}/>
                                </TouchableOpacity>
                                <View style={{justifyContent: 'flex-start', flexDirection: 'row', margin: 2, padding: 6}}>
                                    <MyButton onPress={()=>chooseImage()} title="Upload Photo" style={{backgroundColor: '#cd4559', color: 'white', marginTop: 2}}/>
                                </View>
                                <Text style={{fontSize: 16, color: '#666'}}>Drop a file here</Text>
                            </Fragment>
                            :
                            <View style={{width: 168, height: 168, position: 'relative'}}>
                                <Image source={state.proofTransfer} style={{width: 168, height: 168, borderRadius: 4}}/>
                                <View style={{position: 'absolute', right: -6, top: -6}}>
                                <TouchableOpacity onPress={()=>clearImage()} style={{backgroundColor: '#cd4559', width: 26, height: 26, borderRadius: 13, justifyContent: 'center', alignItems: 'center'}}>
                                    <Image source={require('../../assets/icon/close-white.png')} style={{width: 18, height: 18,}}/>
                                </TouchableOpacity>
                                </View>
                            </View>
                        }
                    </View>
                </View>
                <View style={{marginHorizontal: 20}}>
                    <MyButton title="CONFRIMATION" style={{backgroundColor: '#cd4559', color: 'white', marginTop: 8}}/>
                </View>
            </ScrollView>
        </View>
    )
}

export default Transfer