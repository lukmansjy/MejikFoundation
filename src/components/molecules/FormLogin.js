import React, { Fragment, useState } from 'react'
import Info from '../atoms/Info'
import MyInputText from '../../components/atoms/MyInputText'
import MyButton from '../atoms/MyButton'

const FormLogin = ({title, info, placeholder, buttonTitle, onPress, clearState, imgIconRight, password}) => {
    const [state, setState] = useState({
        text: '',
        clear: false
    })
    
    const handleText = (text) =>{
        setState({
            ...state,
            text: text
        })
    }

    if(clearState && !state.clear){
        setState({
            ...state,
            text: '',
            clear: true
        })
    }

    return(
        <Fragment>
            <Info title={title} info={info}/>
            <MyInputText password={password} imgIconRight={imgIconRight} label={title} placeholder={placeholder} onChangeText={(text)=>handleText(text)} value={state.text}/>
            <MyButton onPress={(text = state.text)=>{onPress(text)}} style={{backgroundColor: "#cd4559", color: 'white', marginTop: 18}} title={buttonTitle}/>
        </Fragment>
    )
}

export default FormLogin

