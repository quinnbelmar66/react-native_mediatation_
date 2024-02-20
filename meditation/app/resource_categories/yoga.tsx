// Modal screen setu

import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import ResourceDisplay from '@/components/ResourceDisplay';
import { ExternalLink } from '@/components/ExternalLink';
import React from 'react';
import Colors from '@/constants/Colors';

export default function Breathing_TechniquesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yoga</Text>
      <View style={styles.separator} lightColor=" #eee" darkColor="rgba(255,255,255,0.1)" />
      

      <View style={styles.helpContainer}>
        <ExternalLink
          style={styles.helpLink}
          href="https://www.youtube.com/watch?v=tHkZrASHdKc&list=PL59B7176903ABDBA7">
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here for the Kurt Johnsen's First Youtube Session.
          </Text>
        </ExternalLink>
      </View>

      <View style={styles.helpContainer}>
        <ExternalLink
          style={styles.helpLink}
          href="https://www.youtube.com/watch?v=nsybEY_uSA8">
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here for the Kurt Johnsen's Second Yoga for Life Session
          </Text>
        </ExternalLink>
      </View>

      <View style={styles.helpContainer}>
        <ExternalLink
          style={styles.helpLink}
          href="https://www.youtube.com/watch?v=CZGF0CxxHIU&list=PL_es92EEwzU0xAUkejzyimNP75JXSZ--2">
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here for the Kurt Johnsen's Third Yoga for Life Session
          </Text>
        </ExternalLink>
      </View>

      <View style={styles.helpContainer}>
        <ExternalLink
          style={styles.helpLink}
          href="https://www.youtube.com/watch?v=EwQkfoKxRvo">
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here for the Simple Isha Meditation
          </Text>
        </ExternalLink>
      </View>


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
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
