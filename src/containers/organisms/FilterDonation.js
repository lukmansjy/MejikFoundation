import React from 'react'
import Label from '../../components/atoms/Label'
import { ScrollView } from 'react-native-gesture-handler'

const FilterDonation = () => {
    return(
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Label title="All"/>
            <Label title="Pati Jompo" active/>
            <Label title="Pati Asuhan"/>
            <Label title="Yatim Piatu"/>
            <Label title="Janda"/>
        </ScrollView>
    )
}

export default FilterDonation