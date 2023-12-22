import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Category = ({strCategoryThumb, strCategory}) => {
  return (
    <View style={{margin: 10, alignItems: 'center'}}>
      <Image style={{width: 150, height: 150, borderRadius: 10}} source={{
        uri: strCategoryThumb
      }} />
      <Text style={{fontSize: 20, fontWeight: '800'}}>{strCategory}</Text>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({})