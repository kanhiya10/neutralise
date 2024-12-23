import { Tabs } from 'expo-router';
import React,{useEffect} from 'react';
import { View,Text,Image,Animated,TouchableOpacity ,StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; // Import icons
import { useRouter } from 'expo-router';







export default function TabLayout() {

  const router = useRouter();


  

  return (
    <Tabs screenOptions={{headerShown:false}}>
      <Tabs.Screen
        name="(home)"
        options={{ headerShown:false,tabBarStyle:{display:'none'} }}
      />
      <Tabs.Screen
        name="explore"
        options={{ headerShown:false,tabBarStyle:{display:'none'} }}
      />
    </Tabs>
  );
}


