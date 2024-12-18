import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import SharedLayout from '@/components/DosageComponents/sharedReminder';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DosageReminder() {

  const { product } = useLocalSearchParams();

  if(product){
    console.log(product)
  }

  return (
    <SharedLayout>

<Text className='text-xl text-left'>{product ? product : 'Product not available'}</Text>
      <View className='h-[90%] w-[90%] border-2 mt-2 rounded-3xl pt-4 pl-4'>
      <Text className='text-3xl '>Select medicine unit</Text>
      </View>

    </SharedLayout>
     
   
  )
}

