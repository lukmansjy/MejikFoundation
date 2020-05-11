import React from 'react'
import { Text, View, Image } from 'react-native'
import Header from '../../components/molecules/Header'
import FilterDonation from '../organisms/FilterDonation'
import CardUser from '../../components/atoms/CardUser'
import { TextInput, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import LabelDonation from '../organisms/LabelDonation'
import LabelTimeline from '../organisms/LabelTimeline'
import MyButton from '../../components/atoms/MyButton'

const Donation = ({navigation}) => {
    return(
        <View>
            <Header border title="Donation" imgLeft={require('../../assets/icon/close.png')} imgRight={require('../../assets/icon/history.png')}/>

            <ScrollView style={{marginHorizontal: 20}}>
                <Text style={{fontSize: 20, marginTop: 10, fontWeight: '700', marginVertical: 7, color: '#3b3b3b'}}>Donation Target</Text>

                <FilterDonation/>

                <View style={{justifyContent: 'flex-start', flexDirection: 'row'}}>
                    <CardUser/>
                    <CardUser active/>
                    <CardUser/>
                    <CardUser/>
                </View>
                <View style={{justifyContent: 'flex-start', flexDirection: 'row'}}>
                    <CardUser/>
                    <CardUser/>
                    <CardUser/>
                    <TouchableOpacity>
                        <View style={{justifyContent: 'center', alignItems: 'center', width: 80, height: 80}}>
                            <View style={{backgroundColor: '#cd4559', width: 32, height: 32, borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginTop: 16}}>
                                <Image source={require('../../assets/icon/arrow-right.png')} style={{width: 22, height: 22}}/>
                            </View>
                            <Text style={{color: '#cd4559', fontSize: 16, fontWeight: '700', marginTop: 8}}>See All</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <Text style={{fontSize: 20, marginTop: 10, fontWeight: '700', marginVertical: 7, color: '#3b3b3b'}}>Donation Amount</Text>

                <TextInput editable={false} placeholder="e.g. Rp10.000" value="Rp10.000" style={{borderWidth: .6, borderColor: '#b3b3b3', borderRadius: 4, height: 38, marginBottom: 12, paddingHorizontal: 12, backgroundColor: '#ddd', color: '#3b3b3b', fontWeight: '700', fontSize: 16 }}/>
                <LabelDonation/>

                <Text style={{fontSize: 20, marginTop: 10, fontWeight: '700', marginVertical: 7, color: '#3b3b3b'}}>Timeline</Text>
                <LabelTimeline/>

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 16, marginTop: 10, fontWeight: '700', marginVertical: 7, color: '#3b3b3b'}}>Total Donation</Text>
                    <Text style={{fontSize: 16, marginTop: 10, fontWeight: '700', marginVertical: 7, color: '#cd4559'}}>Rp600.000</Text>
                </View>
                <MyButton onPress={()=>navigation.navigate('Transfer')} style={{backgroundColor: '#cd4559', color: 'white', marginTop: 2}} title="DONATE NOW"/>

            </ScrollView>
        </View>
    )
}

export default Donation