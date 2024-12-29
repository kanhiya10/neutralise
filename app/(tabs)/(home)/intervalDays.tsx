import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import SharedLayout from '@/components/DosageComponents/sharedReminder';
import { useAppSelector } from '@/redux/store';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { CalendarDaysIcon } from '@/components/ui/icon';
import CalendarPicker from '@/components/DosageComponents/calenderPicker';
import { Increase } from '@/redux/platformCount_Slice';
import { useRouter } from 'expo-router';
import { useAppDispatch } from '@/redux/store';
import { format } from 'date-fns';

export default function IntervalDays() {

  const dispatch=useAppDispatch();
  const router=useRouter();

  const { time, unit } = useLocalSearchParams();

  const [dose, setDose] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const { dosageData, isLoading } = useAppSelector(state => state.Fetch)

  const [isVisible, setIsVisible] = useState(false);

  


  const handleRefill=()=>{
    // dispatch(Increase());
    console.log('go to refill')
    router.push(`/(tabs)/(home)/refill`);
  }

  return (
    <SharedLayout>

      <View className='w-[397px] h-[575px] top-[30px] left-[16px] gap-[6px]  '>
        {/* Display the title if dosageData has a title */}
        {Object.keys(dosageData).length > 0 && dosageData.title && (
          <View className="h-[21px] w-[397px] gap-[10px]">
            <Text className="text-[14px]">{String(dosageData.title)}</Text>
          </View>
        )}

        {/* Conditional rendering based on the value of the `time` prop */}

        <View className="h-[548px] w-[396px] rounded-[12px] border-[1px] p-[16px] gap-[16px] bg-[#ffffff] shadow-soft-1">
          {/* First reminder */}
          <View className="h-[27px] w-[364px] gap-[10px]">
            <Text className="text-[18px] font-[500] ">When would you like to be reminded?</Text>
          </View>

          <View className={unit === 'hour' ? "h-[341px] w-[364px]" : "h-[256px] w-[364px] "}>

            <View className='h-[15px] w-[364px] gap-[9px]'>
              {unit === 'hour' ? <Text className="text-[10px] font-[400] text-[#737373]">INTAKE EVERY {time} HOUR</Text> : <Text className="text-[10px] font-[400] text-[#737373]">INTAKE EVERY {time} DAYS</Text>}
            </View>

            <View className={unit === 'hour' ? "h-[324px] w-[364px] gap-[16px] " : "h-[239px] w-[364px] gap-[16px] s"}>


              <View className="h-[69px] w-[364px] gap-[8px]">

                <View className="h-[24px] w-[364px] ">
                  <Text className="text-[16px] font-[400] text-[#404040]">Start date</Text>
                </View>
                {/* <CalendarPicker 
                  selectedDate={selectedDate}
                  onDateChange={setSelectedDate}
                /> */}
                 <Button
        size="sm"
        variant="outline"
        action="primary"
        onPress={() => setIsVisible(true)}
        className="w-[100px] h-[37px] rounded-[8px] border-[1px] pr-[16px] pl-[16px] pt-[8px] pb-[8px] gap-[8px] border-[#83B0D8]-300"
      >
        <ButtonIcon as={CalendarDaysIcon} />
        <ButtonText className="font-[14px] font-[500] text-sm ml-2">
          {format(selectedDate, 'dd MMM')}
        </ButtonText>
      </Button>
              </View>



              <View className="h-[69px] w-[364px] gap-[8px]">

                <View className="h-[24px] w-[364px] ">
                  <Text className="text-[16px] font-[400] text-[#404040]">{unit === 'hour' ? "Starting at" : "Time"}</Text>
                </View>
                <Button
                  size="sm"
                  variant="outline"
                  action="primary"
                  className="w-[95px] h-[37px] rounded-[8px] border-[1px] pr-[16px] pl-[16px] pt-[8px] pb-[8px] gap-[8px]"
                >
                  <ButtonText className="font-medium text-sm ml-2">10:30 AM</ButtonText>
                </Button>
              </View>


              {
                unit === 'hour' && (
                  <View className="h-[69px] w-[364px] gap-[8px] b">

                    <View className="h-[24px] w-[364px] ">
                      <Text className="text-[16px] font-[400] text-[#404040]">Ending at</Text>
                    </View>
                    <Button
                      size="sm"
                      variant="outline"
                      action="primary"
                      className="w-[95px] h-[37px] rounded-[8px] border-[1px] pr-[16px] pl-[16px] pt-[8px] pb-[8px] gap-[8px]"
                    >
                      <ButtonText className="font-medium text-sm ml-2">10:30 Pm</ButtonText>
                    </Button>
                  </View>

                )
              }


              <View className="w-[364px] h-[69px] gap-[8px]">

                <View className="h-[24px] w-[364px] ">
                  <Text className="text-[16px] font-[400] text-[#404040]">Dose</Text>
                </View>

                <View className="h-[37px] w-[127px] gap-[4px] flex flex-row justify-between">
                  <TouchableOpacity
                    className="h-[37px] w-[98px] flex flex-row border-[1px] rounded-[8px] pr-[16px] pl-[16px] pt-[8px] pb-[8px] gap-[14px]"
                    onPress={() => setDose(dose > 0 ? dose - 1 : dose)}
                  >
                    <Ionicons name="remove-outline" size={15} color={"gray"} />
                    <Text>{dose}</Text>
                    <Ionicons name="add-outline" size={15} color={"gray"} onPress={() => setDose(dose + 1)} />
                  </TouchableOpacity>
                  <View className="h-[18px] w-auto top-2">
                    <Text className="text-[12px]">{String(dosageData.medicalUnit)}</Text>
                  </View>
                </View>

              </View>




            </View>
          </View>
        </View>

        <View className="h-[84px] w-[428px] top-[12px] flex justify-center items-center">
        <Button
          size="lg"
          variant="solid"
          action="primary"
          className=" absolute bottom-[110px] w-[396px] h-[44px] rounded-[8px] pr-[24px] pl-[24px] gap-[12px] bg-[#307CBE]"
          onPress={handleRefill}
        >
          <ButtonText className="font-medium text-sm ml-2">Next</ButtonText>
        </Button>
      </View>

      {isVisible && (
        <CalendarPicker 
        selectedDate={selectedDate}
        onDateChange={(date)=>{
          setSelectedDate(date);
          setIsVisible(false);
        }}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        />
      )}
      </View>
    </SharedLayout>
  )
}