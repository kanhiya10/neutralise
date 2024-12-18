import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';

interface SharedLayoutProps {
  children: React.ReactNode;  // This is where the inner content will be injected
}

const SharedLayout: React.FC<SharedLayoutProps> = ({ children }) => {
  return (
    <SafeAreaView className='flex-1 '>

       <Ionicons name="close-outline" size={30} color="black" className="absolute top-[57px] left-5" />
       <Text className="text-xl ml-16">Dosage Reminder</Text>

       <View className='items-center mb-16'>
        <Image source={require('../../assets/images/medical-equipment.png')} className='h-40 w-64' />
       </View>
      <View className='flex-1 pd-20 bg-blue items-center'>
        {children}  {/* This will display the inner content for each screen */}
      </View>
    
    </SafeAreaView>
  );
};



export default SharedLayout;
