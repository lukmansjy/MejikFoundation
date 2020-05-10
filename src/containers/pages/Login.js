import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Header from '../../components/molecules/Header'
import FormLogin from '../../components/molecules/FormLogin'

const Login = ({navigation}) => {
    const [state, setState]= useState({
        email: null,
        passord: null
    })

    const handleInputEmail = (email) => {
        setState({
            ...state,
            email: email
        })
    }

    const handleInputPassword = (pass) => {
        setState({
            ...state,
            passord: pass
        })
        navigation.navigate('Donation')
    }

    return(
        <View>

            <Header/>

            <View style={{marginHorizontal: 20}}>

                <View style={{backgroundColor: '#d7d9dc', height: 200, width: 200, borderRadius: 100, borderColor: '#eaebed', borderWidth: 44, marginTop: 14, marginBottom: 28}}></View>

                {!state.email ? 
                    <FormLogin
                        title="Email"
                        info="Please enter your registered email to login in to application"
                        placeholder="e.g lukman.rocks@live.com"
                        buttonTitle="Next"
                        onPress={(email)=>handleInputEmail(email)}
                    />
                :   <FormLogin
                        title="Password"
                        info="Please enter your password to can login to application"
                        placeholder="e.g lukman.rocks@live.com"
                        buttonTitle="Contonue"
                        onPress={(pass)=>handleInputPassword(pass)}
                        imgIconRight={require('../../assets/icon/eye.png')}
                        clearState={true}
                        password={true}
                    />
                }

            </View>

        </View>
    )
}

export default Login