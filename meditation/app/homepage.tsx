import { SafeAreaView, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import ResoursesScreen from '@/components/ResourcesScreen';
import React from 'react';

// Makes the screen for tabtwo
export default function HomePage() {
  return (
    <SafeAreaView>
      <ResoursesScreen path="homepage.tsx" />
    </SafeAreaView>
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
