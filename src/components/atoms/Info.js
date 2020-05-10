import React, { Fragment } from 'react'
import { Text } from 'react-native'

const Info = ({title, info, center, titleFontSize}) => {
    return(
        <Fragment>
            <Text style={{fontSize: titleFontSize ? titleFontSize : 28, fontWeight: '700', marginVertical: 6, color: '#3b3b3b', textAlign: center ? 'center' : 'left'}}>{title}</Text>
            <Text style={{fontSize: 16, marginTop: 6, marginBottom: 26, color: '#505050', textAlign: center ? 'center' : 'left'}}>{info}</Text>
        </Fragment>
    )
}

export default Info