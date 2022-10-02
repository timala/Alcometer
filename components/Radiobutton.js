import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useState } from 'react'
import StyleSheet from '../Styles'

export default function Radiobutton({options, onPress}) {
  // State variable for value of the radiobutton
  const [value, setValue] = useState(1);
 
  const handlePress = (selected) => {
    setValue(selected);
    onPress(selected);
  }

  return (
    <>
    {
      options.map((item) => (
        <View key={item.value} style={StyleSheet.buttonContainer}>
          <Text style={StyleSheet.label}>{item.label}</Text>
          <Pressable style={StyleSheet.circle} onPress={() => handlePress(item.value)}>
            {value === item.value && <View style={StyleSheet.checkedCircle}/> }
          </Pressable>
        </View>
      ))
    }
    </>
  )  
}