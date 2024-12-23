import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router';
import { Ionicons,MaterialIcons } from '@expo/vector-icons';
import SharedLayout from '@/components/DosageComponents/sharedReminder';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useAppDispatch,useAppSelector} from '../../../redux/store';
import { Add } from '@/redux/dosageInfo_Slice';
import { Increase} from '@/redux/platformCount_Slice';

import { Button, ButtonText,ButtonIcon } from '@/components/ui/button';
import { useRouter } from 'expo-router';
import { PaperclipIcon } from '@/components/ui/icon';

// interface DosageReminderProps {
//   ScreenNo: number;  
//   updateScreenNo: () => void;  // Changed to match parent's implementation
// }

const DosageReminder = () => {

  // const { product } = useLocalSearchParams();
  const {dosageData,isLoading}=useAppSelector(state=>state.Fetch)
  const[medicalUnit,setMedicalUnit]=useState<String>('');

  const dispatch=useAppDispatch();
  const router=useRouter();

  // const medicine=[
  //   ['Pill','bandage-outline'],["injection","medkit"],["Drops","medkit"],["inhaler","medkit"]
  // ]

  // useEffect(()=>{
  //   if(medicalUnit)

  // },[medicalUnit])

  const handlePills=(medicalVal:string)=>{
    dispatch(Add({medicalUnit:medicalVal}))
    setMedicalUnit(medicalVal);

  }

  const handleFrequency=()=>{
    // console.log('ScreenNo : ',ScreenNo);
    // updateScreenNo();
    
   if(medicalUnit)
    dispatch(Increase());
    router.push(`/(tabs)/(home)/doseFrequency`);
  }

  if(dosageData.title){
    console.log('reached',dosageData.title)
  }

  return (
    <SharedLayout>

      <View className='w-[397px] h-[572px] left-[16px] gap-[6px] mt-[30px] border-[1px] '>

        {

        Object.keys(dosageData).length >0 && dosageData.title &&(
      <View className='h-[21px] w-[397px] gap-[10px]'>
      <Text className='text-[14px] font-[500] font-poppins text-[rgba(64, 64, 64, 1)]-800 '>{String(dosageData.title)}</Text>
      </View>
        )
}
      
      <View className='h-[545px] w-[397px] rounded-[12px] pt-[16px]  border-[1px] border-[#FFFFFF] bg-[#FFFFFF]'>

        <View className='h-[27px] w-[365px] gap-[10px] ml-[16px] ' >
        <Text className='text-[18px] font-[500] font-poppins text-[#404040]-800 '>Select medicine unit</Text>
        </View>
      
      {/* <View  className='flex flex-row  flex-wrap '> */}
      <View  className='h-[134px] w-[396px] pt-[16px] pr-[12px] pb-[16px] pl-[12px] gap-[12px]  flex flex-row flex-wrap'>
      




          <Button size='lg' variant='outline' action='primary'  className='h-[45px] w-[84px] rounded-[99px] border-[1px]  pt-[12px] pb-[12px] pl-[4px] pr-[4px] gap-[4px] ' onPress={handleFrequency}  >
            <ButtonIcon as={PaperclipIcon} ></ButtonIcon>
        <ButtonText className="font-medium text-sm ml-2">Pill</ButtonText>
        </Button>

        <Button size='lg' variant='outline' action='primary' isHovered onPressOut={()=>handlePills('injection')} className='h-[45px] w-[124px] rounded-[99px] border-[1px]  pt-[12px] pb-[12px] pl-[4px] pr-[4px] gap-[4px]] ' onPress={handleFrequency}  >
            <ButtonIcon as={PaperclipIcon} ></ButtonIcon>
        <ButtonText className="font-medium text-sm ml-2">injection</ButtonText>
        </Button>

        <Button size='lg' variant='outline' action='primary' isHovered onPressOut={()=>handlePills('Drops')} className='h-[45px] w-[105px] rounded-[99px] border-[1px]  pt-[12px] pb-[12px] pl-[4px] pr-[4px] gap-[4px] ' onPress={handleFrequency}  >
            <ButtonIcon as={PaperclipIcon} ></ButtonIcon>
        <ButtonText className="font-medium text-sm ml-2">Drops</ButtonText>
        </Button>

        <Button size='lg' variant='outline' action='primary' isHovered  onPressOut={()=>handlePills('Inhaler')} className='h-[45px] w-[111px] rounded-[99px] border-[1px]  pt-[12px] pb-[12px] pl-[4px] pr-[4px] gap-[4px] ' onPress={handleFrequency}  >
            <ButtonIcon as={PaperclipIcon} ></ButtonIcon>
        <ButtonText className="font-medium text-sm ml-2">Inhaler</ButtonText>
        </Button>

        <Button size='lg' variant='outline' action='primary' isHovered onPressOut={()=>handlePills('Spray')} className='h-[45px] w-[105px] rounded-[99px] border-[1px]  pt-[12px] pb-[12px] pl-[4px] pr-[4px] gap-[4px] ' onPress={handleFrequency}  >
            <ButtonIcon as={PaperclipIcon} ></ButtonIcon>
        <ButtonText className="font-medium text-sm ml-2">Spray</ButtonText>
        </Button> 


          
       

          

      </View>
      </View>

      
     

      </View>

      <View className='h-[84px] w-[428px]  mt-[12px] pt-[16px] pb-[24px] pl-[16px] pr-[16px] gap-[10px] '>
      <Button size='lg' variant='solid' action='primary' className='w-[396px] h-[44px] rounded-[8px] pr-[24px] pl-[24px] gap-[12px] bg-[#307CBE] ' onPress={handleFrequency}  >
      <ButtonText className="font-[500] text-[18px] font-poppins text-[#FEFEFF]">Next</ButtonText>
      </Button>

    </View>

      

      

      

    </SharedLayout>
     
    //  bg-gray-200 flex flex-row items-center
   
  )
}

export default DosageReminder 