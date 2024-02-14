// Displays the screen for the resource categories

import React from 'react';
import { StyleSheet } from 'react-native';

// Make pressable
import { Link } from 'expo-router';
import { Pressable } from 'react-native';

// Import icon
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

import Colors from '@/constants/Colors';

import { useColorScheme } from '@/components/useColorScheme';
import { AntDesign } from '@expo/vector-icons';



export default function ResoursesScreen({ path }: { path: string }) {
  const colorScheme = useColorScheme();

  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Breathing techniques:
        </Text>

          <Link href="/resource_categories/breathing_techniques" asChild>
              <Pressable>
                {({ pressed }) => (
                  <AntDesign
                    name="file1"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  /> 
                )}
              </Pressable>
          </Link>

        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)">
          <MonoText>Path to the file calling this function: {path}</MonoText>
        </View>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
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
