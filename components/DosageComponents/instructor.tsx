import { View, Text,Image } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

// interface SearchType {
//   SearchText: string;
//   handleSearchText: (args: string) => void;
// }

const Instructor=()=>{
  return (
   
    <View className="h-[300px] top-[325px] pt-[20px] ">

       
        <View className="w-[70px] h-[70px] left-[179px] ">
          <View className="relative w-[52.49px] h-[52.49px] mt-[8.75px] ml-[8.76px]">
            <Image source={require('../../assets/images/search.png')} className="w-[52.49px] h-[52.49px] mt-[8.75px] ml-[8.76px]"/>
          </View>
        </View>
        
        <Text className='text-[18px] font-[500] text-center text-[#262627]-900 mt-[16px]'>Search Product to set reminder</Text>
        <Text className='text-[14px] font-[400] text-center text-[#525252]-700 mt-[17px]'>Lorem ipsum dolor sit amet consectetur. Maecenas socilis sit pulvinar in elit.</Text>
        
       
        <View className="flex flex-row items-center justify-center mt-[22px]  ">
  <View className="w-24 h-px bg-black" />
  <Text className="text-[12px] mx-2 text-[#525252]-700">Or</Text>
  <View className="w-24 h-px bg-black" />
</View>

<View className='h-[50px] w-64 border-2 border-blue-400 flex flex-row items-center justify-center rounded-xl mt-[20px] left-[100px]'>
<Text className="text-xl text-blue-400 font-bold mr-2">scan your med </Text>
 <Ionicons name="scan" size={25} color="rgb(79, 183, 224)"  />
</View>
     
    </View>
 
  );
};

export default Instructor;
