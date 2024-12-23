import { View, Text } from 'react-native';
import { useState } from 'react';
import {useAppSelector,useAppDispatch} from '../../../redux/store';
import { useRouter, useLocalSearchParams } from 'expo-router';
import SharedLayout from '@/components/DosageComponents/sharedReminder';
import SetAlarmDaily from './setAlarmDaily';
import SetAlarmCond from './setAlarmCond';
import { Increase } from '@/redux/platformCount_Slice';
// interface DosageReminderProps {
//   ScreenNo: number;  // Define the type of ScreenNo prop
//   updateScreenNo: (args: number) => void; 
// }

const DosageAlarm:React.FC = () => {
  const dispatch=useAppDispatch();
  
//  console.log(props);
     const {dosageData,isLoading}=useAppSelector(state=>state.Fetch)
  
  const renderComponent = () => {
    switch (dosageData.frequency) {
      case 'Once daily':
        return <SetAlarmDaily  time={1}/>
      case 'Twice daily':
        return <SetAlarmDaily time={2}/>
      case 'More options':
        return <SetAlarmCond/>
      default:
        return <Text>No frequency selected.</Text>;
    }
  };

  return (
    <SharedLayout>
       <View>
        {
             Object.keys(dosageData).length >0 && dosageData.frequency &&(
                renderComponent()
             )
        }
     
    </View>
    </SharedLayout>
   
  );
};

export default DosageAlarm;
