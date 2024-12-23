import { View, Text,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router';
import { Ionicons,MaterialIcons } from '@expo/vector-icons';
import SharedLayout from '@/components/DosageComponents/sharedReminder';
import {useAppSelector,useAppDispatch} from '../../../redux/store';
import { Add } from '@/redux/dosageInfo_Slice';
import { useRouter } from 'expo-router';
import {
  Button,
  ButtonText,
  ButtonSpinner,
  ButtonIcon,
  ButtonGroup,
} from '@/components/ui/button';
import { Radio, RadioIcon, RadioIndicator,RadioGroup } from '@/components/ui/radio';
import { CircleIcon } from '@/components/ui/icon';
import { Increase } from '@/redux/platformCount_Slice';



const DoseFrequency=()=> {

  const[values,setValues]=useState<string>('Once daily')
  const dispatch=useAppDispatch();

  const {dosageData,isLoading}=useAppSelector(state=>state.Fetch)
  const router=useRouter();

  const handleRemind=()=>{
    dispatch(Add({frequency:values}))
    dispatch(Increase());
   router.push(`/(tabs)/(home)/dosageAlarm`);
  }

  return (
    <SharedLayout>

    <View className='w-[397px] h-[575px] mt-[30px] left-[16px] gap-[6px] '>

   {
  
          Object.keys(dosageData).length >0 && dosageData.title &&(
        <View className='h-[21px] w-[397px] gap-[10px]'>
        <Text className='text-[14px] '>{String(dosageData.title)}</Text>
        </View>
          )
  }
    
    <View className='h-[548px] w-[396px] rounded-[12px]  p-[16px] gap-[16px] border-[1px] border-[#FFFFFF] bg-[#FFFFFF]'>

      <View className='h-[27px] w-[364px] gap-[10px]  '>
      <Text className='text-[18px] font-[500] '>How often do you take this medication?</Text>
      </View>
    
    {/* <View  className='flex flex-row  flex-wrap '> */}
    <View  className='h-[167px] w-[372px]  gap-[16px]  '>
      
        
        <TouchableOpacity  className='h-[45px] w-[372px] rounded-[12px] border-[1px]  p-[12px] flex flex-row justify-between  border-[#E6E6E6]' >
        <Text className='text-[14px] font-[500] font-poppins text-[#404040]-800 '>Once daily</Text>
        {/* <Ionicons name={'bandage-outline'} size={20} color={'black'}/> */}
        <RadioGroup  value={values} onChange={setValues}  >
        <Radio value='Once daily' size='sm'><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator></Radio>
        </RadioGroup>
        </TouchableOpacity> 

        <TouchableOpacity  className='h-[45px] w-[372px] rounded-[12px] border-[1px]  p-[12px] flex flex-row justify-between  border-[#E6E6E6]' >
        <Text className='text-[14px] font-[500] font-poppins text-[#404040]-800 '>Twice daily</Text>
        {/* <Ionicons name={'bandage-outline'} size={20} color={'black'}/> */}
        <RadioGroup value={values} onChange={setValues} >
        <Radio value='Twice daily' size='sm'  ><RadioIndicator><RadioIcon as={CircleIcon}/></RadioIndicator></Radio>
        </RadioGroup>
        </TouchableOpacity> 

        <TouchableOpacity  className='h-[45px] w-[372px] rounded-[12px] border-[1px]  p-[12px] flex flex-row justify-between  border-[#E6E6E6]' >
        <Text className='text-[14px] font-[500] font-poppins text-[#404040]-800 '>More options</Text>
        {/* <Ionicons name={'bandage-outline'} size={20} color={'black'}/> */}
        <RadioGroup value={values} onChange={setValues} >
        <Radio value='More options' size='sm'  ><RadioIndicator><RadioIcon as={CircleIcon}/></RadioIndicator></Radio>
        </RadioGroup>
        </TouchableOpacity> 



    </View>
    </View>

    
   

    </View>

    <View className='h-[84px] w-[428px]  mt-[12px] pt-[16px] pb-[24px] pl-[16px] pr-[16px] gap-[10px] '>
      <Button size='lg' variant='solid' action='primary' className='w-[396px] h-[44px] rounded-[8px] pr-[24px] pl-[24px] gap-[12px] bg-[#307CBE] ' onPress={handleRemind}  >
      <ButtonText className="font-[500] text-[18px] font-poppins text-[#FEFEFF]">Next</ButtonText>
      </Button>

    </View>

    

    

    

  </SharedLayout>
  )
}

export default DoseFrequency;