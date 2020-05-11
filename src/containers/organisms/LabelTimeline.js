import React from 'react'
import Label from '../../components/atoms/Label'
import { ScrollView } from 'react-native-gesture-handler'

const LabelTimeline = () => {
    return(
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Label title="1x" noBorder/>
            <Label title="2x" active/>
            <Label title="3x" noBorder/>
            <Label title="5x" noBorder/>
            <Label title="8x" noBorder/>
            <Label title="10x" noBorder/>
            <Label title="12x" noBorder/>
            <Label title="14x" noBorder/>
            <Label title="20x" noBorder/>
        </ScrollView>
    )
}

export default LabelTimeline