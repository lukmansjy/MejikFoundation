import React from 'react'
import { View, Text } from 'react-native'
import MyButton from '../../components/atoms/MyButton'
import Header from '../../components/molecules/Header'
import MyInputText from '../../components/atoms/MyInputText'

const Register = () => {
    return(
        <View>

            <Header/>

            <View style={{marginHorizontal: 20}}>
                <Text style={{fontSize: 28, fontWeight: '700', marginVertical: 6, color: '#3b3b3b'}}>Registration</Text>
                <Text style={{fontSize: 16, marginTop: 6, marginBottom: 26, color: '#505050'}}>Please complate your details bellow to registes</Text>

                <MyInputText label="Full Name" placeholder="e.g Lukman Sanjaya"/>

                <MyInputText label="Email" placeholder="e.g lukman.rocks@live.com"/>

                <MyInputText label="Phone Number" placeholder="e.g 82226455525" imgIcon={require('../../assets/icon/id-flag.png')} labelImgIcon="+62" keyboardType='numeric'/>

                <MyButton style={{backgroundColor: "#cd4559", color: 'white', marginTop: 20}} title="Continue"/>

            </View>

        </View>
    )
}

export default Register