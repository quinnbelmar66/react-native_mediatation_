//  Creates the bottom tabs

import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Stack, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// Importing icon family
import { AntDesign } from '@expo/vector-icons';


// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

// Wraps the whole app in a stack

const StackLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: '#10101E',
      }, headerTintColor: '#fff', 
      headerTitleStyle: {
        fontWeight: 'bold',
      },

    }}>
      <Stack.Screen name="homepage" options={{ headerTitle: 'Resources', headerShown: true}} />
    </Stack>
  );
};

export default StackLayout;