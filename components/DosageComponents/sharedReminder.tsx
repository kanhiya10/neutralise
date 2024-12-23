import React, { useEffect, useState } from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { View, Text, ScrollView } from 'react-native';
import { LinearGradient } from '../ui/gluestack-ui-provider/linear-gradient';
import Stepper from './stepper';
import { useRouter } from 'expo-router';
import { useAppDispatch,useAppSelector } from '@/redux/store';
import {Increase,Decrease} from '@/redux/platformCount_Slice';
import { useDispatch } from 'react-redux';

// Define the expected props for child components
// interface ChildComponentProps {
//   ScreenNo: number;
//   updateScreenNo: () => void;
// }

interface SharedLayoutProps {
 children: React.ReactNode; 
}

const SharedLayout: React.FC<SharedLayoutProps> = ({ children }) => {
  const [ScreenNo, setScreenNo] = useState<number>(1);
  const router=useRouter();
  const dispatch=useAppDispatch();
  const {dosageData,isLoading}=useAppSelector(state=>state.Fetch)

  const{count}=useAppSelector(state=>state.CountPlatform)

  // const updateScreenNo = () => {
  //   setScreenNo(prev => prev + 1);// Changed to directly set the value instead of adding
  // };

  console.log('ScreenNo in parent : ',ScreenNo);

  // const childrenWithProps = React.Children.map(children, (child) => {
  //   if (React.isValidElement(child)) {
  //     return React.cloneElement(child, {
  //       ScreenNo,
  //       updateScreenNo
  //     } as ChildComponentProps);
  //   }
  //   return child;
  // });
  useEffect(()=>{
    console.log('line 45 : ',count);
    setScreenNo(count);
  },[count]);

  const GoBack=()=>{
    dispatch(Decrease())
    router.back();
  }

  return (
    <LinearGradient
      className="flex-1"
      colors={['rgba(220, 248, 255, 1)', 'rgba(255, 255, 255, 1)']} // Very light sky blue with slight opacity at top, transparent at bottom
          start={{ x: 0.5, y: 0 }} // Start at the center top
          end={{ x: 0.5, y: 1 }} // End at the center bottom
     
    >
      <ScrollView className='top-[44px]'>
        <View className='h-[58px] w-[428px] gap-[6px] '>
          <View className='h-[48px] w-[428px] pt-[12px] pb-[12px] pr-[16px] pl-[16px] gap-[12px] flex flex-row items-center'>
          <Ionicons name="chevron-back-sharp" size={19} color="rgba(65, 64, 64, 1)" className="" onPress={GoBack}/>
          <Text className="text-[16px] text-[rgba(38, 38, 39, 1)]-900 font-[500]">Dosage Reminder</Text>
          </View>
          <Stepper currentStep={ScreenNo} />
        </View>

        <View className=' h-[96px] w-[96px] mt-[30px] left-[159px] flex-row justify-center items-center '>
          <MaterialIcons name="medical-services" size={100} color="rgb(79, 183, 224)" />
        </View>

        <View>
          {children}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SharedLayout;