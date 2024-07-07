import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { Video } from 'expo-av';
import Colors from '../../Utils/Colors';
import * as WebBrowser from 'expo-web-browser';
import { useOAuth } from '@clerk/clerk-expo';
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';
import * as Linking from 'expo-linking';
import { supabase } from '../../Utils/SupabaseConfig';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/', { scheme: 'myapp' })
      });

      console.log('OAuth flow result:', { createdSessionId, signIn, signUp });

      if (createdSessionId && setActive) {
        console.log('Setting active session:', createdSessionId);
        await setActive({ session: createdSessionId });
        console.log('Session set successfully');

        if(signUp?.emailAddress)
        {
          
          const { data, error } = await supabase
          .from('Users')
          .insert([
            { name: signUp?.firstName, 
              email: signUp?.emailAddress },
          ])
          .select()

          if(data)
          {
            console.log(data)
          }
        
        }

      } else if (signIn) {
        console.log('SignIn steps required');
        Alert.alert('Sign In', 'Additional steps are required to complete sign in.');


      } else if (signUp) {
        console.log('SignUp steps required');
        Alert.alert('Sign Up', 'Additional steps are required to complete sign up.');
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  }, [startOAuthFlow]);

  return (
    <View style={{ flex: 1 }}>
      <Video
        style={styles.video}
        source={{
          uri: 'https://cdn.pixabay.com/video/2024/05/25/213616_large.mp4'
        }}
        shouldPlay
        resizeMode="cover"
        isLooping={true}
      />
      
      <View style={{
        display: 'flex',
        alignItems: 'center',
        paddingTop: 200,
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: Colors.BACKGROUND_TRASNP
      }}>
        <Text
          style={{
            fontFamily: 'Outfit-Bold',
            color: Colors.WHITE,
            fontSize: 35,
          }}
        >
          Shi Kaku
        </Text>
        <Text
          style={{
            fontFamily: 'Outfit-Regular',
            color: Colors.WHITE,
            fontSize: 17,
            textAlign: 'center',
            marginTop: 15
          }}
        >
          Zone into your Abyss{'\n'}Conquer your Addictions
        </Text>

        <TouchableOpacity 
          onPress={onPress}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            flexDirection: 'row',
            backgroundColor: Colors.WHITE,
            padding: 10,
            paddingHorizontal: 55,
            borderRadius: 99,
            position: 'absolute',
            bottom: 150
          }}>
          <Image source={require('./../../../assets/images/google.png')}
            style={{
              width: 30,
              height: 30
            }}
          />
          <Text style={{
            fontFamily: 'Outfit-Regular'
          }}>Sign In with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    height: '100%',
    width: 1000,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
