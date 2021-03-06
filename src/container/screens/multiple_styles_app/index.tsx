import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import HeaderApp from '../../component/Header'
import sizes from '../../../res/sizes'
import images from '../../../res/images';
import colors from '../../../res/colors';
import TextViewBase from '../../../components/TextViewBase';
import AppContainer, { ScreenName } from '../base/AppContainer';
import NavigationService from '../base/NavigationService';
import { StylesApp } from '../../../common/Constant';
import ItemListApp from '../../component/ItemListApp';
const DataMultiple = [
  {
    id: '0',
    title: 'React Native Skia',
    type: '',
    screenName: 'CHARTWITHRNSKIA'
  },
  {
    id: '1',
    title: 'React Native Color',
    type: '',
    screenName: ''
  },
  {
    id: '2',
    title: 'React Native Color',
    type: '',
    screenName: ''
  },
  {
    id: '3',
    title: 'React Native Color',
    type: '',
    screenName: ''
  },
]
const SwitchScreen = (data: any) => {
  switch (data?.screenName) {
    case 'CHARTWITHRNSKIA':
      NavigationService.navigate(ScreenName.CHARTWITHRNSKIA, data)
      break;
    default:
      break;
  }
}


const MultipleStylesApp = (props: any) => {
  const navigation = useNavigation();
  return (
    <View style={StylesApp.container}>
      <HeaderApp style={{ backgroundColor: '#FF4500d9' }} title={'Multiple Styles App'} />
      <FlatList
        data={DataMultiple}
        renderItem={({ item }) => <ItemListApp props={item} onPress={() => { SwitchScreen(item) }} />}
        keyExtractor={item => item.id}
        style={{ flex: 1, marginTop: sizes._statusbar_height + sizes._header_height, width: sizes._screen_width }}
      />
    </View>
  )
}

export default MultipleStylesApp

const styles = StyleSheet.create({


})