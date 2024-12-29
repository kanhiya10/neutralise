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
        name="(logs)"
        options={{
          title: 'logs',
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

<Stack.Screen
        name="doseFrequency"
        options={{
          
          title: 'doseFreq',
          headerShown:false,
         
        }}
      />
      <Stack.Screen
        name="dosageAlarm"
        options={{
          
          title: 'dosageAlarm',
          headerShown:false,
         
        }}
      />
       <Stack.Screen
        name="setAlarmDaily"
        options={{
          
          title: 'dailyAlarm',
          headerShown:false,
         
        }}
      />
       <Stack.Screen
        name="setAlarmCond"
        options={{
          
          title: 'setAlarmCond',
          headerShown:false,
         
        }}
      />
      <Stack.Screen
        name="specificDay"
        options={{
          
          title: 'specificDay',
          headerShown:false,
         
        }}
      />
      <Stack.Screen
        name="intervalDays"
        options={{
          
          title: 'intervalDays',
          headerShown:false,
         
        }}
      />
      {/* <Stack.Screen
        name="cyclicDays"
        options={{
          
          title: 'cyclic',
          headerShown:false,
         
        }}
      /> */}
       <Stack.Screen
        name="refill"
        options={{
          
          title: 'refilling',
          headerShown:false,
         
        }}
      />
      <Stack.Screen
        name="completion"
        options={{
          
          title: 'completion',
          headerShown:false,
         
        }}
      />
      
    </Stack>
   
  );
}



