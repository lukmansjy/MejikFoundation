import React from 'react'
import { View } from 'react-native'
import Logo from '../../components/atoms/Logo'
import MyButton from '../../components/atoms/MyButton'
import Header from '../../components/molecules/Header'
import Info from '../../components/atoms/Info'

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

                <Info title="Welcome to Mejik Foundation!" info="Mejik Foundation is a network that facilitates and empowers the voice of mejik communities" center titleFontSize={32}/>

                <View style={{marginTop: 28}}>
                    <MyButton onPress={()=>toPage('Login')} style={{backgroundColor: "#cd4559", color: 'white'}} title="Login"/>
                    <MyButton onPress={()=>toPage('Register')} style={{backgroundColor: "white", color: '#cd4559', borderColor: '#cd4559'}} title="Register"/>
                </View>
            </View>
        </View>
    )
}

export default Welcome