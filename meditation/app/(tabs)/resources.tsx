import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import ResoursesScreen from '@/components/ResourcesScreen';
import React from 'react';

// Makes the screen for tabtwo
export default function Resources() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meditation resources</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ResoursesScreen path="app/(tabs)/resources.tsx" />
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
});
