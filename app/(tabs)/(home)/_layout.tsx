import { Stack } from 'expo-router';
import React from 'react';








export default function StackLayout() {
  return (
   
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown:false,
        
        }}
      />
  
      <Stack.Screen
        name="dosageReminder"
        options={{
          
          title: 'dosageRem',
          headerShown:false,
         
        }}
      />
      
    </Stack>
   
  );
}



