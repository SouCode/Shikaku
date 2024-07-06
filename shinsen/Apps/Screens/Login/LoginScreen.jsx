import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Video, ResizeMode } from 'expo-av';
import Colors from '../../Utils/Colors';


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
      <View style={{
        display:'flex',
        alignItems:'center',
        paddingTop:200,
        flex:1,
        paddingHorizontal:20,
        backgroundColor:Colors.BACKGROUND_TRASNP
      }}>
        <Text
        style={{
            fontFamily:'Outfit-Bold',
            color:Colors.WHITE,
            fontSize:35,
        }}
        >Shi Kaku</Text>
        <Text
        style={{
            fontFamily:'Outfit-Regular',
            color:Colors.WHITE,
            fontSize:17,
            textAlign:'center',
            marginTop:15
        }}
        >Zone into your Abyss{'\n'}Conquer your Addictions</Text>
      </View>
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