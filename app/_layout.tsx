
import { Stack } from 'expo-router';
import "../global.css";
import { useEffect } from 'react';




export default function RootLayout() {


  

  return (
   
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
     
  );
}
