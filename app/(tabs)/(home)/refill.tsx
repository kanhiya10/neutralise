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
import SkipModal from '@/components/DosageComponents/skipModal';



const Refill=()=> {

    const [inventory, setInventory] = useState<number>(60);
    const [threashold, setThreashold] = useState<number>(20);
    const [showModal, setShowModal] = useState<boolean>(false); 

  const dispatch=useAppDispatch();

  const {dosageData,isLoading}=useAppSelector(state=>state.Fetch)
  const router=useRouter();

  const handleSkip=()=>{
    setShowModal(true);
  }


  const handleRemind=()=>{
    // dispatch(Increase());
//    router.push(`/(tabs)/(home)/dosageAlarm`);
console.log('clicked');
  }

  return (
    <SharedLayout>

    <View className='w-[397px] h-[575px] top-[30px] left-[16px] gap-[6px] '>

        <Button variant='outline' size='sm' action='primary' className='absolute top-[-225px] left-[330px] border-[#83B0D8]-300 border-[1px] rounded-[8px] pr-[16px] pl-[16px] h-[36px] w-[62px] gap-[8px]'
       onPress={handleSkip}>
            <ButtonText className='text-[12px] font-[500] text-[#307CBE]' >Skip</ButtonText>
        </Button>
    

   {/* {
  
          Object.keys(dosageData).length >0 && dosageData.title &&(
        <View className='h-[21px] w-[397px] gap-[10px]'>
        <Text className='text-[14px] '>{String(dosageData.title)}</Text>
        </View>
          )
  } */}
    
    <View className='h-[548px] w-[396x] rounded-[12px] border-[1px] p-[16px] gap-[16px] bg-[#ffffff] border-[#F2F1F1]-100'>

      <View className='h-[54px] w-[364px] gap-[10px] '>
      <Text className='text-[18px] font-[500] '>Do you want to get reminder to refill your inventory?</Text>
      </View>
    
    {/* <View  className='flex flex-row  flex-wrap '> */}
    <View  className='h-[154px] w-[364px]  gap-[16px] '>

        {/* 1st section */}
      
        
    <View className="w-[364px] h-[69px] gap-[8px]">
        
        

<View className="h-[24px] w-[364px] ">
  <Text className="text-[16px] font-[400] text-[#404040]">Current Inventory</Text>
</View>

<View className="h-[37px] w-[131px] gap-[12px] flex flex-row justify-between">
  <TouchableOpacity
    className="h-[37px] w-[98px] flex flex-row border-[1px] rounded-[8px] pr-[16px] pl-[16px] pt-[8px] pb-[8px] gap-[14px]"
    onPress={() => setInventory(inventory > 0 ? inventory - 1 : inventory)}
  >
    <Ionicons name="remove-outline" size={15} color={"gray"} />
    <Text>{inventory}</Text>
    <Ionicons name="add-outline" size={15} color={"gray"} onPress={() => setInventory(inventory + 1)} />
  </TouchableOpacity>
  <View className="h-[18px] w-auto top-2">
    <Text className="text-[12px]">{String(dosageData.medicalUnit)}</Text>
  </View>
</View>

</View>

{/* 2nd sectiom */}

<View className="w-[364px] h-[69px] gap-[8px]">

<View className="h-[24px] w-[364px] ">
  <Text className="text-[16px] font-[400] text-[#404040]">Remind me when</Text>
</View>

<View className="h-[37px] w-[131px] gap-[12px] flex flex-row justify-between">
  <TouchableOpacity
    className="h-[37px] w-[98px] flex flex-row border-[1px] rounded-[8px] pr-[16px] pl-[16px] pt-[8px] pb-[8px] gap-[14px]"
    onPress={() => setThreashold(threashold > 0 ? threashold - 1 : threashold)}
  >
    <Ionicons name="remove-outline" size={15} color={"gray"} />
    <Text>{threashold}</Text>
    <Ionicons name="add-outline" size={15} color={"gray"} onPress={() => setThreashold(threashold + 1)} />
  </TouchableOpacity>
  <View className="h-[18px] w-auto top-2">
    <Text className="text-[12px]">{String(dosageData.medicalUnit)}</Text>
  </View>
</View>

</View>
       



    </View>
    </View>

    
   

    </View>

    <View className='h-[84px] w-[428px]  top-[12px] flex justify-center items-center'>
      <Button size='lg' variant='solid' action='primary' className='w-[396px] h-[44px] rounded-[8px] pr-[24px] pl-[24px] gap-[12px] bg-[#307CBE] ' onPress={handleRemind}  >
      <ButtonText className="font-medium text-sm ml-2">Next</ButtonText>
      </Button>

    </View>




    <SkipModal showModal={showModal} setShowModal={setShowModal} />
    
  </SharedLayout>
  )
}

export default Refill;