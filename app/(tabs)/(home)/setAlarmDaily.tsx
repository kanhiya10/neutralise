// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import React, { useState } from 'react';
// import { Ionicons } from '@expo/vector-icons';
// import { useAppDispatch, useAppSelector } from '@/redux/store';
// import { Button, ButtonText } from '@/components/ui/button';
// import { useRouter,useLocalSearchParams} from 'expo-router';
// import SharedLayout from '@/components/DosageComponents/sharedReminder';
// import { ScrollView } from 'react-native';
// import TimePicker from '@/components/DosageComponents/timePicker';

// interface DosageReminderProps {
//   time?: number; 
// }




// const SetAlarmDaily: React.FC<DosageReminderProps> = ({ time: propTime }) => {
//   // State for tracking doses for each intake
//   const params = useLocalSearchParams();

//   const time = propTime || (params.intakes ? parseInt(params.intakes as string) : 1);

//   const isRouteNavigation = !propTime && params.intakes;

//   const [doses, setDoses] = useState<number[]>(Array(time).fill(1));
//   const { dosageData } = useAppSelector((state) => state.Fetch);
//   const dispatch = useAppDispatch();
//   const router = useRouter();

//   // Function to update dose for a specific intake
//   const handleDoseChange = (index: number, increment: boolean) => {
//     setDoses(prevDoses => {
//       const newDoses = [...prevDoses];
//       if (increment) {
//         newDoses[index] += 1;
//       } else {
//         newDoses[index] = Math.max(1, newDoses[index] - 1);
//       }
//       return newDoses;
//     });
//   };

//   // Function to render intake sections
//   const renderIntakeSections = () => {
//     return Array(time).fill(null).map((_, index) => (
//       <View key={index} className="h-[171px] w-[364px] gap-[2px]">
//         <Text className="text-[10px] font-[400] gap-[9px]">
//           {index === 0 ? "FIRST INTAKE" : 
//            index === 1 ? "SECOND INTAKE" : 
//            index === 2 ? "THIRD INTAKE" :
//            index === 3 ? "FOURTH INTAKE" :
//            index === 4 ? "FIFTH INTAKE" : "SIXTH INTAKE"}
//         </Text>

//         <View className="h-[154px] w-[364px] gap-[16px]">
//           <View className="h-[69px] w-[364px] gap-[8px]">
//             <Text className="text-[16px] font-[400] text-[#404040]">Time</Text>
//             <Button
//               size="sm"
//               variant="outline"
//               action="primary"
//               className="w-[95px] h-[37px] rounded-[8px] border-[1px] pr-[16px] pl-[16px] pt-[8px] pb-[8px] gap-[8px]"
//             >
//               <ButtonText className="font-medium text-sm ml-2">08:30 PM</ButtonText>
//             </Button>
//           </View>

//           <View className="w-[364px] h-[69px] gap-[8px]">
//             <Text className="text-[16px] font-[400] text-[#404040]">Dose</Text>
//             <View className="h-[37px] w-auto gap-[12px] flex flex-row">
//               <TouchableOpacity
//                 className="h-[37px] w-[98px] flex flex-row border-[1px] rounded-[8px] pr-[16px] pl-[16px] pt-[8px] pb-[8px] gap-[14px]"
//               >
//                 <Ionicons 
//                   name="remove-outline" 
//                   size={15} 
//                   color={"gray"} 
//                   onPress={() => handleDoseChange(index, false)}
//                 />
//                 <Text>{doses[index]}</Text>
//                 <Ionicons 
//                   name="add-outline" 
//                   size={15} 
//                   color={"gray"} 
//                   onPress={() => handleDoseChange(index, true)}
//                 />
//               </TouchableOpacity>
//               <View className="h-[18px] w-auto top-2">
//                 <Text className="text-[12px]">{String(dosageData.medicalUnit)}</Text>
//               </View>
//             </View>
//           </View>
//         </View>
//       </View>
//     ));
//   };

//   const content = (
    
//     <View className='w-[397px] min-h-[575px]  top-[30px] left-[16px] gap-[6px] border-[1px]'>
//       {Object.keys(dosageData).length > 0 && dosageData.title && (
//         <View className="h-[21px] w-[397px] gap-[10px]">
//           <Text className="text-[14px]">{String(dosageData.title)}</Text>
//         </View>
//       )}
      
//       <View className="min-h-[548px]  w-[396px] rounded-[12px] border-[1px] p-[16px] gap-[16px] bg-[#ffffff] border-[#F2F1F1]-100">
//         <View className="h-[27px] w-[364px] gap-[10px]">
//           <Text className="text-[18px] font-[500]">When would you like to be reminded?</Text>
//         </View>

//         <ScrollView className='h-auto'>
//         <View className="min-h-[362px] h-auto w-[364px] gap-[20px]">
//           {renderIntakeSections()}
//         </View>
//         </ScrollView>
//       </View>
      

//       <View className="h-[84px] w-[428px] top-[12px] flex justify-center items-center">
//         <Button
//           size="lg"
//           variant="solid"
//           action="primary"
//           className="w-[396px] h-[44px] rounded-[8px] pr-[24px] pl-[24px] gap-[12px] bg-[#307CBE]"
//         >
//           <ButtonText className="font-medium text-sm ml-2">Next</ButtonText>
//         </Button>
//       </View>
//     </View>
    
//   );

//   return isRouteNavigation ? <SharedLayout>{content}</SharedLayout> : content;
// };

// export default SetAlarmDaily;











import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { Button, ButtonText } from '@/components/ui/button';
import { useRouter,useLocalSearchParams} from 'expo-router';
import SharedLayout from '@/components/DosageComponents/sharedReminder';
import { ScrollView } from 'react-native';
import TimePicker from '@/components/DosageComponents/timePicker';
import { Increase } from '@/redux/platformCount_Slice';

interface DosageReminderProps {
  // ScreenNo: number;
  // updateScreenNo: (args: number) => void;
  time?: number; // New prop to decide the layout
}

const SetAlarmDaily: React.FC<DosageReminderProps> = ({ time: propTime }) => {
  // State for tracking doses for each intake
  const params = useLocalSearchParams();

  const time = propTime || (params.intakes ? parseInt(params.intakes as string) : 1);

  const isRouteNavigation = !propTime && params.intakes;

  const [doses, setDoses] = useState<number[]>(Array(time).fill(1));
  const { dosageData } = useAppSelector((state) => state.Fetch);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [times, setTimes] = useState<string[]>(Array(time).fill('08:30 AM'));


const handleRefill=()=>{
  dispatch(Increase());
  router.push(`/(tabs)/(home)/refill`);
}

  // Function to update dose for a specific intake
  const handleDoseChange = (index: number, increment: boolean) => {
    setDoses(prevDoses => {
      const newDoses = [...prevDoses];
      if (increment) {
        newDoses[index] += 1;
      } else {
        newDoses[index] = Math.max(1, newDoses[index] - 1);
      }
      return newDoses;
    });
  };

  const handleTimeChange = (index: number, newTime: string) => {
    setTimes(prevTimes => {
      const newTimes = [...prevTimes];
      newTimes[index] = newTime;
      return newTimes;
    });
  };

  // Function to render intake sections
  const renderIntakeSections = () => {
    return Array(time).fill(null).map((_, index) => (

      <View key={index} className="h-[171px] w-[364px] gap-[2px] ">
        
        {time > 1 && (
          <Text className="text-[10px] font-[400] gap-[9px]">
            {index === 0 ? "FIRST INTAKE" : 
             index === 1 ? "SECOND INTAKE" : 
             index === 2 ? "THIRD INTAKE" :
             index === 3 ? "FOURTH INTAKE" :
             index === 4 ? "FIFTH INTAKE" : "SIXTH INTAKE"}
          </Text>
        )}

        <View className="h-[154px] w-[364px] gap-[16px]">
          <View className="h-[69px] w-[364px] gap-[8px]">
            <Text className="text-[16px] font-[400] text-[#404040]">Time</Text>
            <TimePicker 
              selectedTime={times[index]}
              onTimeChange={(newTime) => handleTimeChange(index, newTime)}
            />
          </View>

          <View className="w-[364px] h-[69px] gap-[8px]">
            <Text className="text-[16px] font-[400] text-[#404040]">Dose</Text>
            <View className="h-[37px] w-auto gap-[12px] flex flex-row">
              <TouchableOpacity
                className="h-[37px] w-[98px] flex flex-row border-[1px] rounded-[8px] pr-[16px] pl-[16px] pt-[8px] pb-[8px] gap-[14px]"
              >
                <Ionicons 
                  name="remove-outline" 
                  size={15} 
                  color={"gray"} 
                  onPress={() => handleDoseChange(index, false)}
                />
                <Text>{doses[index]}</Text>
                <Ionicons 
                  name="add-outline" 
                  size={15} 
                  color={"gray"} 
                  onPress={() => handleDoseChange(index, true)}
                />
              </TouchableOpacity>
              <View className="h-[18px] w-auto top-2">
                <Text className="text-[12px]">{String(dosageData.medicalUnit)}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    ));
  };

  const content = (
    
    <View className='w-[397px] h-[575px]  top-[30px] left-[16px] gap-[6px]  '>
      {Object.keys(dosageData).length > 0 && dosageData.title && (
        <View className="h-[21px] w-[397px] gap-[10px]">
          <Text className="text-[14px] font-[500] font-poppins text-[#404040]">{String(dosageData.title)}</Text>
        </View>
      )}
      
      <View className="min-h-[548px]  w-[396px] rounded-[12px] border-[1px] p-[16px] gap-[16px] bg-[#ffffff] border-[#FFFFFF]">
        <View className="h-[27px] w-[364px] gap-[10px]">
          <Text className="text-[18px] font-[500] font-poppins text-[#404040]">When would you like to be reminded?</Text>
        </View>

        <ScrollView className='h-auto '>
        <View className="min-h-[362px] h-auto w-[364px] gap-[20px]">
          {renderIntakeSections()}
        </View>
        </ScrollView>
      </View>
      

      {/* <View className="h-[84px] w-[428px] top-[12px] flex justify-center items-center">
        <Button
          size="lg"
          variant="solid"
          action="primary"
          className="w-[396px] h-[44px] rounded-[8px] pr-[24px] pl-[24px] gap-[12px] bg-[#307CBE]"
          onPress={handleRefill}
        >
          <ButtonText className="font-medium text-sm ml-2">Next</ButtonText>
        </Button>
      </View> */}

<View className='h-[84px] w-[428px]  mt-[12px] pt-[16px] pb-[24px] pl-[16px] pr-[16px] gap-[10px] '>
      <Button size='lg' variant='solid' action='primary' className='w-[396px] h-[44px] rounded-[8px] pr-[24px] pl-[24px] gap-[12px] bg-[#307CBE] ' onPress={handleRefill}  >
      <ButtonText className="font-[500] text-[18px] font-poppins text-[#FEFEFF]">Next</ButtonText>
      </Button>

    </View>
    </View>
    
  );

  return isRouteNavigation ? <SharedLayout>{content}</SharedLayout> : content;
};

export default SetAlarmDaily;














