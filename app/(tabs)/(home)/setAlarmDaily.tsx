import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState,useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { Button, ButtonText } from '@/components/ui/button';
import { useRouter,useLocalSearchParams} from 'expo-router';
import SharedLayout from '@/components/DosageComponents/sharedReminder';
import { ScrollView } from 'react-native';
import TimePicker from '@/components/DosageComponents/timePicker';
import { Increase } from '@/redux/platformCount_Slice';
// import { useDosageDaysCalculate } from '@/hooks/useDosageDaysCalculate';


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

// const { storeDosagePattern } = useDosageDaysCalculate();


  const [times, setTimes] = useState<string[]>(Array(time).fill('08:30 AM'));

  useEffect(() => {
    dispatch(Increase());
  }, [dosageData.frequency]);


const handleRefill=()=>{
  console.log('it is working');
  dispatch(Increase());
  // storeDosagePattern({
  //   type: 'daily',
  //   startDate: new Date(),
  //   times: times,
  //   intakes: doses.map((dose, index) => ({
  //     time: times[index],
  //     dose: dose
  //   })),
  // });
  
  
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

      <View key={index} className={time ===1? "h-[154px] w-[364px] gap-[16px]  " : "h-[171px] w-[364px] gap-[2px]  " } >
        
        {time > 1 && (
          <View className='h-[15px] w-[364px] gap-[9px]'>
          <Text className="text-[10px] font-[400] font-poppins gap-[9px] text-[#737373]">
            {index === 0 ? "FIRST INTAKE" : 
             index === 1 ? "SECOND INTAKE" : 
             index === 2 ? "THIRD INTAKE" :
             index === 3 ? "FOURTH INTAKE" :
             index === 4 ? "FIFTH INTAKE" : "SIXTH INTAKE"}
          </Text>
          </View>
        )}

        <View className="h-[154px] w-[364px] gap-[16px]">
          <View className="h-[69px] w-[364px] gap-[8px]">

            <View className='h-[24px] w-[364px]'>
            <Text className="text-[16px] font-[400] font-poppins text-[#404040]-800">Time</Text>
            </View>

            <TimePicker 
              selectedTime={times[index]}
              onTimeChange={(newTime) => handleTimeChange(index, newTime)}
            />
          </View>

          <View className="w-[364px] h-[69px] gap-[8px]">
          <View className='h-[24px] w-[364px]'>
            <Text className="text-[16px] font-[400] font-poppins text-[#404040]-800">Dose</Text>
            </View>
            <View className="h-[37px] w-auto gap-[12px] flex flex-row">
              <TouchableOpacity
                className="h-[37px] w-[98px] flex flex-row border-[1px] rounded-[8px] pr-[16px] pl-[16px] pt-[8px] pb-[8px] gap-[14px]"
              >
                <Ionicons 
                  name="remove-outline" 
                  size={15} 
                  color={"#242424"} 
                  onPress={() => handleDoseChange(index, false)}
                />
                <Text className='text-[14px] font-[500] font-poppins text-[#307CBE] align-center'>{doses[index]}</Text>
                <Ionicons 
                  name="add-outline" 
                  size={15} 
                  color={"#242424"} 
                  onPress={() => handleDoseChange(index, true)}
                />
              </TouchableOpacity>
              <View className="h-[18px] w-auto top-2">
                <Text className="text-[12px] font-[500] font-poppins text-[#404040]">{String(dosageData.medicalUnit)}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    ));
  };

  const content = (
    
    <View className='w-[397px] h-[575px]  top-[30px] left-[16px] gap-[6px]  '>
      {
      Object.keys(dosageData).length >0 && dosageData.title &&(
  <View className='h-[21px] w-[397px] gap-[10px]'>
  <Text className='text-[14px] font-[500] text-[#404040]'>{String(dosageData.title)}</Text>
  </View>
    )
      }
      
      <View className="h-[548px]  w-[396px] rounded-[12px] border-[1px] p-[16px] gap-[16px] bg-[#FFFFFF] border-[#E6E6E6] shadow-soft-1">
        <View className="h-[27px] w-[364px] gap-[10px]">
          <Text className="text-[18px] font-[500] font-poppins text-[#404040]">When would you like to be reminded?</Text>
        </View>

        <ScrollView className='h-auto ' showsVerticalScrollIndicator={false}>
        <View className="min-h-[362px] h-auto w-[364px] gap-[20px] ">
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

<View className='h-[84px] w-[428px]  mt-[12px] pt-[16px] pb-[24px] pl-[16px] pr-[16px] gap-[10px] border-2'>
      <Button size='lg' variant='solid' action='primary' className=' absolute bottom-[106px] w-[396px] h-[44px] rounded-[8px] pr-[24px] pl-[24px] gap-[12px] bg-[#307CBE] ' onPress={handleRefill}  >
      <ButtonText className="font-[500] text-[18px] font-poppins text-[#FEFEFF]">Next</ButtonText>
      </Button>

    </View>
    </View>
    
  );

  return isRouteNavigation ? <SharedLayout>{content}</SharedLayout> : content;
};

export default SetAlarmDaily;














