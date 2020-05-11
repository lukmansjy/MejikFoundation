import React from 'react'
import Label from '../../components/atoms/Label'
import { ScrollView } from 'react-native-gesture-handler'

const LabelDonation = () => {
    return(
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Label title="Rp10.000"/>
            <Label title="Rp50.000" active/>
            <Label title="Rp100.000"/>
            <Label title="Rp200.000"/>
            <Label title="Rp300.000"/>
            <Label title="Rp500.000"/>
            <Label title="Rp1.000.000"/>
        </ScrollView>
    )
}

export default LabelDonation