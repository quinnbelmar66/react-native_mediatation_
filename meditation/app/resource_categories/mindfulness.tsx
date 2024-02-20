// Modal screen setup

import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TouchableOpacity,Linking } from 'react-native';
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
      <Text style={styles.title}>Mindfulness</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <Text style = {styles.description}>
        Meditation is a practice where an individual uses a technique - such as mindfulness,
        or focusing the mind on a particular object, thought, or activity - to train attention
        and awareness, and achieve a mentally clear and emotionally calm and stable state.
      </Text>


   
      <TouchableOpacity
        style={styles.helpLink}
        onPress={() => openURL("https://apps.apple.com/us/app/yoga-nidra-deep-relaxation/id430531216")}
      >
        <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
          Tap here for Yoga Nidra App - LITE version is free.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.helpLink}
        onPress={() => openURL("https://isha.sadhguru.org/app/")}
      >
        <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
          Tap here for Isha App.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.helpLink}
        onPress={() => openURL("https://apps.apple.com/us/app/shivyog-play/id1501801980")}
      >
        <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
          Tap here for Shiv Yog Play App.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.helpLink}
        onPress={() => openURL("https://apps.apple.com/us/app/calm/id571800810")}
      >
        <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
          Tap here for the Calm, Headspace, Balance App.
        </Text>
      </TouchableOpacity>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

// You can keep the rest of your styles unchanged
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
  description: {
    fontSize : 13 ,
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
  },

});
