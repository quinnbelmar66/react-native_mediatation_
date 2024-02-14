// Modal screen setup

import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import ResourceDisplay from '@/components/ResourceDisplay';
import { ExternalLink } from '@/components/ExternalLink';
import React from 'react';
import Colors from '@/constants/Colors';
import ResourcesDisplay from '@/components/ResourceDisplay';

export default function Breathing_TechniquesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Breathing techniques</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ResourceDisplay path="app/resource_categories/breathing_techniques.tsx" />

      <View style={styles.helpContainer}>
        <ExternalLink
          style={styles.helpLink}
          href="https://event.us.artofliving.org/us-en/online-course-2/?utm_source=organic&utm_medium=home&utm_content=allcourses&course_id=811569">
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here for the SKY Breathing/Happiness Program
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
