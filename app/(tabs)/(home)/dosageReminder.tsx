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

  const medicineUnits = [
    { id: 'Pill', width: 'w-[84px]' },
    { id: 'injection', width: 'w-[124px]' },
    { id: 'Drops', width: 'w-[105px]' },
    { id: 'Inhaler', width: 'w-[111px]' },
    { id: 'Spray', width: 'w-[105px]' },
  ];

  const handleUnit=(medicalVal:string)=>{
    setMedicalUnit(medicalVal);

  }

  const handleFrequency=()=>{
    // console.log('ScreenNo : ',ScreenNo);
    // updateScreenNo();
    
   if(medicalUnit){
    dispatch(Add({medicalUnit:medicalUnit}))
    dispatch(Increase());
    router.push(`/(tabs)/(home)/doseFrequency`);
   }
  }

  if(dosageData.title){
    console.log('reached',dosageData.title)
  }

  return (
    <SharedLayout>

      <View className='w-[397px] h-[572px] left-[16px] gap-[6px] mt-[30px]  '>

        {

        Object.keys(dosageData).length >0 && dosageData.title &&(
      <View className='h-[21px] w-[397px] gap-[10px]'>
      <Text className='text-[14px] font-[500] font-poppins text-[rgba(64, 64, 64, 1)]-800 '>{String(dosageData.title)}</Text>
      </View>
        )
}
      
      <View className='h-[545px] w-[397px] rounded-[12px] pt-[16px]  border-[1px] border-[#F2F1F1] bg-[#FFFFFF] shadow-soft-4'>

        <View className='h-[27px] w-[365px] gap-[10px] ml-[16px] ' >
        <Text className='text-[18px] font-[500] font-poppins text-[#404040]-800 '>Select medicine unit</Text>
        </View>
       
      {/* <View  className='flex flex-row  flex-wrap '> */}
      <View  className='h-[134px] w-[396px] pt-[16px] pr-[12px] pb-[16px] pl-[12px] gap-[12px]  flex flex-row flex-wrap'>

        
      {/* <Button size='lg' variant='outline' action='primary'  onPress={()=>handleUnit('Pill')} className={ medicalUnit === 'Pill' ? 'h-[45px] w-[84px] rounded-[99px] border-[1px] border-[#639DCF]  pt-[12px] pb-[12px] pl-[20px] pr-[20px] gap-[8px] bg-[#FFFFFF]' : 'h-[45px] w-[84px] rounded-[99px] border-[0px]  pt-[12px] pb-[12px] pl-[20px] pr-[20px] gap-[8px] bg-[#F6F6F6]' }  >
            <ButtonIcon as={PaperclipIcon} className='h-[11.95px] w-[11.95px]' color='#414040' ></ButtonIcon>
        <ButtonText className={medicalUnit ==='Pill' ?"font-[500] text-[14px] font-poppins text-[#404040]-800":"font-[400] text-[14px] font-poppins text-[#404040]-800"}>Pill</ButtonText>
        </Button>

        <Button size='lg' variant='outline' action='primary'  onPress={()=>handleUnit('injection')} className={ medicalUnit === 'injection' ? 'h-[45px] w-[124px] rounded-[99px] border-[1px] border-[#105469]  pt-[12px] pb-[12px] pl-[20px] pr-[20px] gap-[8px] bg-[#FFFFFF]' : 'h-[45px] w-[124px] rounded-[99px] border-[0px]  pt-[12px] pb-[12px] pl-[20px] pr-[20px] gap-[8px] bg-[#F6F6F6]' }   >
            <ButtonIcon as={PaperclipIcon} className='h-[12.8px] w-[12.8px]'color='#414040' ></ButtonIcon>
        <ButtonText className={medicalUnit ==='injection' ?"font-[500] text-[14px] font-poppins text-[#404040]-800":"font-[400] text-[14px] font-poppins text-[#404040]-800"}>injection</ButtonText>
        </Button>

        <Button size='lg' variant='outline' action='primary'  onPress={()=>handleUnit('Drops')} className={ medicalUnit === 'Drops' ? 'h-[45px] w-[105px] rounded-[99px] border-[1px] border-[#105469]  pt-[12px] pb-[12px] pl-[20px] pr-[20px] gap-[8px] bg-[#FFFFFF]' : 'h-[45px] w-[105px] rounded-[99px] border-[0px]  pt-[12px] pb-[12px] pl-[20px] pr-[20px] gap-[8px] bg-[#F6F6F6]' }  >
            <ButtonIcon as={PaperclipIcon} className='h-[14px] w-[10px]' color='#414040' ></ButtonIcon>
        <ButtonText className={medicalUnit ==='Drops' ?"font-[500] text-[14px] font-poppins text-[#404040]-800":"font-[400] text-[14px] font-poppins text-[#404040]-800"}>Drops</ButtonText>
        </Button>

        <Button size='lg' variant='outline' action='primary'   onPress={()=>handleUnit('Inhaler')} className={ medicalUnit === 'Inhaler' ? 'h-[45px] w-[111px] rounded-[99px] border-[1px] border-[#105469]  pt-[12px] pb-[12px] pl-[20px] pr-[20px] gap-[8px] bg-[#FFFFFF]' : 'h-[45px] w-[111px] rounded-[99px] border-[0px]  pt-[12px] pb-[12px] pl-[20px] pr-[20px] gap-[8px] bg-[#F6F6F6]' }  >
            <ButtonIcon as={PaperclipIcon} className='h-[14px] w-[12.46px]' color='#231F20' ></ButtonIcon>
        <ButtonText className={medicalUnit ==='Inhaler' ?"font-[500] text-[14px] font-poppins text-[#404040]-800":"font-[400] text-[14px] font-poppins text-[#404040]-800"}>Inhaler</ButtonText>
        </Button>

        <Button size='lg' variant='outline' action='primary'  onPress={()=>handleUnit('Spray')} className={ medicalUnit === 'Spray' ? 'h-[45px] w-[105px] rounded-[99px] border-[1px] border-[#105469]  pt-[12px] pb-[12px] pl-[20px] pr-[20px] gap-[8px] bg-[#FFFFFF]' : 'h-[45px] w-[105px] rounded-[99px] border-[0px]  pt-[12px] pb-[12px] pl-[20px] pr-[20px] gap-[8px] bg-[#F6F6F6]' }   >
            <ButtonIcon as={PaperclipIcon} className='h-[14px] w-[11px]' color='#535252' ></ButtonIcon>
        <ButtonText className={medicalUnit ==='Spray' ?"font-[500] text-[14px] font-poppins text-[#404040]-800":"font-[400] text-[14px] font-poppins text-[#404040]-800"}>Spray</ButtonText>
        </Button>  */}

{medicineUnits.map((unit) => (
          <Button
            key={unit.id}
            size='lg'
            variant='outline'
            action='primary'
            onPress={() => handleUnit(unit.id)}
            className={`${unit.width} h-[45px] rounded-[99px] pt-[12px] pb-[12px] pl-[20px] pr-[20px] gap-[8px] ${
              medicalUnit === unit.id
                ? 'border-[1px] border-[#639DCF] bg-[#FFFFFF]'
                : 'border-[0px] bg-[#F6F6F6]'
            }`}
          >
            <ButtonIcon as={PaperclipIcon} className='h-[11.95px] w-[11.95px]' color='#414040' />
            <ButtonText 
              className={`${
                medicalUnit === unit.id
                  ? "font-[500]"
                  : "font-[400]"
              } text-[14px] font-poppins text-[#404040]-800`}
            >
              {unit.id}
            </ButtonText>
          </Button>
        ))}

          
       

          

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