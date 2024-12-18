import { View, Text } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

// interface SearchType {
//   SearchText: string;
//   handleSearchText: (args: string) => void;
// }

const Instructor=()=>{
  return (
    <View className="flex-1 pt-6 justify-center ">
    <View className="h-[300px]  flex justify-evenly items-center ">

       
        <Text className='text-3xl font-medium text-center'>Search Product to set reminder</Text>
        <Text className='text-xl font-light text-center'>Lorem ipsum dolor sit amet consectetur. Maecenas socilis sit pulvinar in elit.</Text>
        
       
        <View className="flex flex-row items-center justify-center">
  <View className="w-24 h-px bg-black" />
  <Text className="text-xl mx-2">Or</Text>
  <View className="w-24 h-px bg-black" />
</View>

<View className='h-[50px] w-64 border-2 border-blue-400 flex flex-row items-center justify-center rounded-xl'>
<Text className="text-xl text-blue-400 font-bold mr-2">scan your med </Text>
 <Ionicons name="scan" size={25} color="rgb(79, 183, 224)"  />
</View>
     
    </View>
    </View>
  );
};

export default Instructor;
