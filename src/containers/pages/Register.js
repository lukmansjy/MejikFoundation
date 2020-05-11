import React from 'react'
import { View } from 'react-native'
import MyButton from '../../components/atoms/MyButton'
import Header from '../../components/molecules/Header'
import MyInputText from '../../components/atoms/MyInputText'
import Info from '../../components/atoms/Info'

const Register = ({navigation}) => {
    return(
        <View>

            <Header/>

            <View style={{marginHorizontal: 20}}>
                <Info title="Registration" info="Please complate your details bellow to registes"/>

                <MyInputText label="Full Name" placeholder="e.g Lukman Sanjaya"/>

                <MyInputText label="Email" placeholder="e.g lukman.rocks@live.com"/>

                <MyInputText label="Phone Number" placeholder="e.g 82226455525" imgIconLeft={require('../../assets/icon/id-flag.png')} labelImgIconLeft="+62" keyboardType='numeric'/>

                <MyButton onPress={()=>navigation.navigate('Donation')} style={{backgroundColor: "#cd4559", color: 'white', marginTop: 20}} title="Continue"/>

            </View>

        </View>
    )
}

export default Register