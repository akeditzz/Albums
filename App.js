import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from './src/component/Header'
import AlbumList from './src/component/AlbumList'

const App = () => {
  return <View style={{flex:1}}>
    <Header title="Albums!" />
    <AlbumList />
  </View>
}

export default App