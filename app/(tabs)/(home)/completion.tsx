import { View, Text,Image } from 'react-native'
import React from 'react'

export default function Completion() {
  return (
    <View className='h-[926px] w-[428px]  bg-[#F6FDF7]'>

        <View className='h-[120px] w-[120px] top-[332px] left-[154px] border-2' >
        <Image source={require('../../../assets/logos/check.png')} className='h-[120px] w-[120px]'/>
        </View>

        {/* <Text > Successfully added</Text> */}
     
    </View>
  )
}