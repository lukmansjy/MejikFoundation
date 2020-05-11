import React from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import HeaderArticle from '../../components/molecules/HeaderArticle'
import ListArticle from '../organisms/ListArticle'
import BottomNavBar from '../../components/molecules/BottomNavBar'

const Article = ({navigation}) => {
    const toPage = page =>{
        navigation.navigate(page)
    }

    return(
        <View style={{flex: 1}}>
            <View>

            </View>
            <HeaderArticle/>
            <ScrollView style={{marginHorizontal: 20}} showsVerticalScrollIndicator={false}>
                <ListArticle/>
            </ScrollView>

            <BottomNavBar toPage={(page)=>toPage(page)}/>
        </View>
    )
}

export default Article