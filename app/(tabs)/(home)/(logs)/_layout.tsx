import { Stack } from 'expo-router';
import React from 'react';








export default function StackLayout() {
  return (
   
    <Stack>
      <Stack.Screen
        name="logsInfo"
        options={{
          title: 'LogsInfo',
          headerShown:false,
        
        }}
      />
    
      
    </Stack>
   
  );
}



