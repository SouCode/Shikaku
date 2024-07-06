import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Video, ResizeMode } from 'expo-av';

export default function LoginScreen() {
  return (
    <View style={{flex:1}}>
      <Video
      style={styles.video}
      source={{
        uri:'https://cdn.pixabay.com/video/2024/05/25/213616_large.mp4'
      }}
      shouldPlay
      resizeMode='cover'
      isLooping={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    video:{
        height:'100%',
        width:1000,
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0
    }
})