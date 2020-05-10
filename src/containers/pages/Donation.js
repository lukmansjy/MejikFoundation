import React from 'react'
import { Image, Text, View } from 'react-native'
import Header from '../../components/molecules/Header'
import { ScrollView } from 'react-native-gesture-handler'

const Donation = () => {
    return(
        <View>
            <Header border title="Donation" imgLeft={require('../../assets/icon/close.png')} imgRight={require('../../assets/icon/history.png')}/>

            <View style={{marginHorizontal: 20}}>
                <Text style={{fontSize: 20, marginTop: 10, fontWeight: '700', marginVertical: 7, color: '#3b3b3b'}}>Donation Target</Text>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{justifyContent: 'flex-start', flexDirection: 'row', margin: 2}}>
                        <Text style={{color: '#3b3b3b', fontSize: 16, fontWeight: '700', borderWidth: 1, paddingVertical: 4, paddingHorizontal: 10, borderRadius: 15}}>All</Text>
                    </View>
                    <View style={{justifyContent: 'flex-start', flexDirection: 'row', margin: 2}}>
                        <Text style={{color: '#3b3b3b', fontSize: 16, fontWeight: '700', borderWidth: 1, paddingVertical: 4, paddingHorizontal: 10, borderRadius: 15}}>All</Text>
                    </View>
                    <View style={{justifyContent: 'flex-start', flexDirection: 'row', margin: 2}}>
                        <Text style={{color: '#3b3b3b', fontSize: 16, fontWeight: '700', borderWidth: 1, paddingVertical: 4, paddingHorizontal: 10, borderRadius: 15}}>All</Text>
                    </View>
                    <View style={{justifyContent: 'flex-start', flexDirection: 'row', margin: 2}}>
                        <Text style={{color: '#3b3b3b', fontSize: 16, fontWeight: '700', borderWidth: 1, paddingVertical: 4, paddingHorizontal: 10, borderRadius: 15}}>All</Text>
                    </View>
                    <View style={{justifyContent: 'flex-start', flexDirection: 'row', margin: 2}}>
                        <Text style={{color: '#3b3b3b', fontSize: 16, fontWeight: '700', borderWidth: 1, paddingVertical: 4, paddingHorizontal: 10, borderRadius: 15}}>All</Text>
                    </View>
                    <View style={{justifyContent: 'flex-start', flexDirection: 'row', margin: 2}}>
                        <Text style={{color: '#3b3b3b', fontSize: 16, fontWeight: '700', borderWidth: 1, paddingVertical: 4, paddingHorizontal: 10, borderRadius: 15}}>All</Text>
                    </View>
                    <View style={{justifyContent: 'flex-start', flexDirection: 'row', margin: 2}}>
                        <Text style={{color: '#3b3b3b', fontSize: 16, fontWeight: '700', borderWidth: 1, paddingVertical: 4, paddingHorizontal: 10, borderRadius: 15}}>All</Text>
                    </View>
                    <View style={{justifyContent: 'flex-start', flexDirection: 'row', margin: 2}}>
                        <Text style={{color: '#3b3b3b', fontSize: 16, fontWeight: '700', borderWidth: 1, paddingVertical: 4, paddingHorizontal: 10, borderRadius: 15}}>All</Text>
                    </View>
                </ScrollView>

            </View>
        </View>
    )
}

export default Donation