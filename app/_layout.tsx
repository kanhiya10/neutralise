
import { Stack } from 'expo-router';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "../global.css";
import { useEffect } from 'react';
import {Provider} from 'react-redux';
import {store} from '../redux/store';





export default function RootLayout() {


  

  return (
    <Provider store={store}>
    <GluestackUIProvider mode="light"><Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack></GluestackUIProvider>
      </Provider>
  );
}
