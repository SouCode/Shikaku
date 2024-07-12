import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import Colors from '../../Utils/Colors'
import * as ImagePicker from 'expo-image-picker';
import * as VideoThumbnails from 'expo-video-thumbnails';

export default function AddScreen() {

  // Used to select video file from phone
  const SelectVideoFile = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      console.log(result.assets[0].uri)
      GenerateVideoThumbnail(result.assets[0].uri)
    }
  };


    //to Generate the Thumbnail
    const GenerateVideoThumbnail = async (videoUri) => {
      try {
        const { uri } = await VideoThumbnails.getThumbnailAsync(
          videoUri,
          {
            time: 15000,//screenshot of the video at timestamp
          }
        );
        console.log('Thumbnail',uri)
      } catch (e) {
        console.warn(e);
      }
    };

   {
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
        fontFamily:'Outfit-Regular',
        textAlign:'center',
        marginTop:13
      }}>Lets upload a short video and start sharing you content with your community</Text>

      <TouchableOpacity
      onPress={SelectVideoFile}
        style={{
          backgroundColor:Colors.BLACK,
          padding:10,
          paddingHorizontal:25,
          borderRadius:99,
          marginTop:20
        }}>
        <Text style={{color:Colors.WHITE,fontFamily:'Outfit-Regular'}}>Select video file</Text>
      </TouchableOpacity>
      </View>
    )
  }
}