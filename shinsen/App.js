import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import LoginScreen from './Apps/Screens/Login/LoginScreen';
import HomeScreen from './Apps/Screens/Home/HomeScreen';
import TabNavigation from './Apps/Navigations/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Outfit-Regular': require('./assets/fonts/Outfit-Regular.ttf'),
    'Outfit-Medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'Outfit-Bold': require('./assets/fonts/Outfit-Bold.ttf')
  });

  if (!fontsLoaded) {
    return null; // Or a loading indicator
  }

  return (
    <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <View style={styles.container}>
        <SignedIn>
          <NavigationContainer>
                <TabNavigation/>
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <LoginScreen />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
