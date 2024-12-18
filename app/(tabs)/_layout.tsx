import { Tabs } from 'expo-router';
import React,{useEffect} from 'react';
import { View,Text,Image,Animated,TouchableOpacity ,StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; // Import icons




export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown:false}}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
          
            <Ionicons name="home" size={30} color={'green'} />

          ),
          
          
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, size }) => (
            // Use Ionicons for the Explore icon
            <Ionicons name="paper-plane" size={30} color={'green'} />
          ),

        }}
      />
    </Tabs>
  );
}


