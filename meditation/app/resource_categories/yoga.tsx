// Modal screen setu

import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TouchableOpacity,Linking, Touchable } from 'react-native';
import { Text, View } from '@/components/Themed';
import { ExternalLink } from '@/components/ExternalLink';
import React from 'react';
import Colors from '@/constants/Colors';

export default function Breathing_TechniquesScreen() {

  const openURL = (url: string) => {
    Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yoga</Text>
      <View style={styles.separator} lightColor=" #eee" darkColor="rgba(255,255,255,0.1)" />
      < Text style = {styles.description}>
        Yoga is a comprehensive practive that combines physical posture,
        breathing techniques, meditation, and ethical precepts. Originating in ancient India,
        it is designed to improve physical health, promote mental clarity, and foster spritual growth. 
        The practice of yoga encompasses a wide range of styles and disciplines, each with its unique focus and techniques
        but all sharing is the common goal of harmonizing the body, mind, and spirit. 
        </Text>

      
        <TouchableOpacity
          style={styles.helpLink}
          onPress={() => openURL("https://www.youtube.com/watch?v=tHkZrASHdKc&list=PL59B7176903ABDBA7")}
          >
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here for the Kurt Johnsen's First Youtube Session.
          </Text>
        </TouchableOpacity>


      
        <TouchableOpacity
          style={styles.helpLink}
          onPress={() => openURL("https://www.youtube.com/watch?v=nsybEY_uSA8")}
          >
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here for the Kurt Johnsen's Second Yoga for Life Session
          </Text>
        </TouchableOpacity>
   


        <TouchableOpacity
          style={styles.helpLink}
          onPress={() => openURL("https://www.youtube.com/watch?v=CZGF0CxxHIU&list=PL_es92EEwzU0xAUkejzyimNP75JXSZ--2")}
          >
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here for the Kurt Johnsen's Third Yoga for Life Session
          </Text>
        </TouchableOpacity>


      
        <TouchableOpacity
          style={styles.helpLink}
          onPress={() => openURL("https://www.youtube.com/watch?v=EwQkfoKxRvo")}
          >
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here for the Simple Isha Meditation
          </Text>
        </TouchableOpacity>
      


      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description:{
    fontSize:13,
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 10,
    paddingHorizontal: 20, 
    backgroundColor: 'orange', 
    borderRadius: 10, 
    marginTop: 10, 
  },
  helpLinkText: {
    color: 'white', 
    textAlign: 'center',
  }
});
