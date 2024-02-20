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
      <Text style={styles.title}>Breathing techniques</Text>
      <View style={styles.separator} lightColor=" #eee" darkColor="rgba(255,255,255,0.1)" />
      < Text style = {styles.description}>
        Breathing techniques, also known as pranayama in the context of yoga,
        are systematic methods of controlling your breathing pattern for health relaxation, and mental
        clarity. These techniques can vary greatly in practice, ranging from simple exercises that focus
        on deep and slow breathing to more advanced methods involving specific patterns and rhythms of
        inhalation, retention, and exhalation.        
      </Text>

    
        <TouchableOpacity
          style={styles.helpLink}
          onPress={() => openURL("https://event.us.artofliving.org/us-en/online-course-2/?utm_source=organic&utm_medium=home&utm_content=allcourses&course_id=811569")}
          >
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here for the SKY Breathing/Happiness Program
          </Text>
        </TouchableOpacity>
    
      
        <TouchableOpacity
          style={styles.helpLink}
          onPress={() => openURL("https://event.us.artofliving.org/us-en/sahajsamadhi/?utm_source=organic&utm_medium=home&utm_content=allcourses&course_id=999649")}
          >
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here for the Simple mantra-based natural (Sahaj) meditation
          </Text>
        </TouchableOpacity>
 


      
        <TouchableOpacity
          style={styles.helpLink}
          onPress={() => openURL("https://event.us.artofliving.org/us-en/sahajsamadhi/?utm_source=organic&utm_medium=home&utm_content=allcourses&course_id=999649")}
          >
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here for Healthcare Providers - CME/CE Program.
          </Text>
        </TouchableOpacity>




   
        <TouchableOpacity
          style={styles.helpLink}
          onPress={() => openURL("https://healthygutweb.wordpress.com/2016/07/19/blog-post-title-3/")}
          >
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here for a General Breathing Technique Resource
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
