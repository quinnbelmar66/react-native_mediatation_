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
import { SafeAreaView } from 'react-native-safe-area-context';
import Box from "./Box";



export default function ResoursesScreen({ path }: { path: string }) {
  const colorScheme = useColorScheme();

  return (
    <View>
           <View style={styles.helpContainer}>
              <Text style={styles.title}>Meditation resources</Text>
           </View>

          {/*Links to each resource*/}
          <Link href="/resource_categories/breathing_techniques" asChild>
              <Pressable>
                
                <View>
                    <Box style={{ backgroundColor: "#1C0077"}}>Breathing</Box>
                </View>
                </Pressable>
           </Link>

           <Link href="/resource_categories/mindfulness" asChild>
              <Pressable>
                
                <View>
                    <Box style={{ backgroundColor: "#240099"}}>Mindfulness</Box>
                </View>
                </Pressable>
           </Link>

           <Link href="/resource_categories/yoga" asChild>
              <Pressable>
                
                <View>
                    <Box style={{ backgroundColor: "#3D0077"}}>Yoga</Box>
                </View>
                </Pressable>
           </Link>

           
           <Link href="/resource_categories/books" asChild>
              <Pressable>
                
                <View>
                    <Box style={{ backgroundColor: "#6100BB"}}>Books</Box>
                </View>
                </Pressable>
           </Link>



    </View>


          

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },

  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    paddingBottom: 20,
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
    alignItems: 'center',
    marginTop: 15,
    padding: 20,
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
