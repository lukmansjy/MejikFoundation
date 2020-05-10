import React from 'react'
import { View, Text } from 'react-native'
import Logo from '../../components/atoms/Logo'
import MyButton from '../../components/atoms/MyButton'
import Header from '../../components/molecules/Header'

const Welcome = ({ navigation }) => {

    const toPage = (page) => {
        navigation.navigate(page)
    }

    return(
        <View>

            <Header/>

            <View style={{marginHorizontal: 20}}>

                <View style={{alignSelf: 'center', alignItems: 'center', marginVertical: 48}}>
                    <Logo/>
                </View>

                <View>
                    <Text style={{fontSize: 32, fontWeight: '700', textAlign: 'center', marginVertical: 6, color: '#3b3b3b'}}>Welcome to Mejik Foundation!</Text>
                    <Text style={{fontSize: 16, textAlign: 'center', marginVertical: 6, color: '#505050'}}>Mejik Foundation is a network that facilitates and empowers the voice of mejik communities</Text>
                </View>

                <View style={{marginTop: 48}}>
                    <MyButton style={{backgroundColor: "#cd4559", color: 'white'}} title="Login"/>
                    <MyButton onPress={()=>toPage('Register')} style={{backgroundColor: "white", color: '#cd4559', borderColor: '#cd4559'}} title="Register"/>
                </View>
            </View>
        </View>
    )
}

export default Welcome