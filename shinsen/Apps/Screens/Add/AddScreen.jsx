import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import Colors from '../../Utils/Colors'

export default class AddScreen extends Component {
  render() {
    return (
      <View style={{
        padding:20,
        alignItems:'center',
        display:'flex',
        justifyContent:'center',
        flex:1
      }}>
        <Image source={require('./../../../assets/images/video-folder-icon.png')}         
        style={{
          width:140,
          height:140
        }}
      />
      <Text style={{
        fontFamily:'Outfit-Bold',
        fontSize:20,
        marginTop:20
      }}>Start Uploading Short Videos</Text>
      <Text style={{
        textAlign:'center',
        marginTop:13
      }}>Lets upload a short video and start sharing you content with your community</Text>

      <TouchableOpacity
        style={{
          backgroundColor:Colors.BLACK,
          padding:10,
          paddingHorizontal:25,
          borderRadius:99,
          marginTop:20
        }}>
        <Text style={{color:Colors.WHITE}}>Select video file</Text>
      </TouchableOpacity>
      </View>
    )
  }
}