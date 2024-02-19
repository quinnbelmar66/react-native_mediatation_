// Modal screen setup

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
      <Text style={styles.title}>Mindfulness</Text>
      <View style={styles.separator} lightColor=" #eee" darkColor="rgba(255,255,255,0.1)" />
      <ResourceDisplay path="app/resource_categories/breathing_techniques.tsx" />

      <View style={styles.helpContainer}>
        <ExternalLink
          style={styles.helpLink}
          href="https://apps.apple.com/us/app/yoga-nidra-deep-relaxation/id430531216">
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here for Yoga Nidra App - LITE version is free.
          </Text>
        </ExternalLink>
      </View>

      <View style={styles.helpContainer}>
        <ExternalLink
          style={styles.helpLink}
          href="https://isha.sadhguru.org/app/">
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here for Isha App.
          </Text>
        </ExternalLink>
      </View>


      <View style={styles.helpContainer}>
        <ExternalLink
          style={styles.helpLink}
          href="https://apps.apple.com/us/app/shivyog-play/id1501801980">
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here for Shiv Yog Play App.
          </Text>
        </ExternalLink>
      </View>

      <View style={styles.helpContainer}>
        <ExternalLink
          style={styles.helpLink}
          href="https://apps.apple.com/us/app/calm/id571800810">
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here for the Calm, Headspace, Balance App.
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
