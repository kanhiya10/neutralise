import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState,useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import SharedLayout from '@/components/DosageComponents/sharedReminder';
import CalendarPicker from '@/components/DosageComponents/calenderPicker';
import { useAppSelector } from '@/redux/store';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { CalendarDaysIcon } from '@/components/ui/icon';
import { useRouter } from 'expo-router';


interface CyclicParams {
  intake: number;
  pause: number;
  unit: string;
}

const SpecificDay=()=> {

  const params= useLocalSearchParams();

  
  
  

  const [dose, setDose] = useState(1);

  const { dosageData, isLoading } = useAppSelector(state => state.Fetch)

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const router=useRouter();

  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [cyclicData, setCyclicData] = useState<CyclicParams | null>(null);

  useEffect(() => {
    try {
        if (params.selectedDays && !selectedDays.length) {
            const parsedDays = JSON.parse(params.selectedDays as string);
            setSelectedDays(parsedDays);
        } else if (params.cyclicData && !cyclicData) {
            const parsedCyclic = JSON.parse(params.cyclicData as string);
            setCyclicData(parsedCyclic);
        }
    } catch (error) {
        console.error('Error parsing params:', error);
    }
  }, [params]);




  if(selectedDays.length>0){
    console.log('selectedDays : ',selectedDays);
    console.log('selectedDays length : ',selectedDays.length);
  }

  const handleRefill=()=>{
    // dispatch(Increase());
    console.log('go to refill')
    router.push(`/(tabs)/(home)/refill`);
  }

  return (
    <SharedLayout>

      <View className='w-[397px] h-[575px] top-[30px] left-[16px] gap-[6px] '>
        {/* Display the title if dosageData has a title */}
        {Object.keys(dosageData).length > 0 && dosageData.title && (
          <View className="h-[21px] w-[397px] gap-[10px]">
            <Text className="text-[14px]">{String(dosageData.title)}</Text>
          </View>
        )}

        {/* Conditional rendering based on the value of the `time` prop */}

        <View className="h-[548px] w-[396px] rounded-[12px] border-[1px] p-[16px] gap-[16px] bg-[#ffffff]  shadow-soft-1">
          {/* First reminder */}
          <View className="h-[27px] w-[364px] gap-[10px]">
            <Text className="text-[18px] font-[500] ">When would you like to be reminded?</Text>
          </View>

          <View className= {selectedDays.length>0 ? "h-[256px] w-[364px]  " : "h-[105px] w-[364px] "} >

            <View className='h-[15px] w-[364px] gap-[9px] '>
              <Text className="text-[10px] font-[400] font-poppins">
                {selectedDays.length > 0 ? (`INTAKE ON ${selectedDays.join(', ').toUpperCase()}`) : (`${cyclicData?.intake} INTAKE DAYS, ${cyclicData?.pause} PAUSE DAYS`)}
              </Text>
            </View>

            <View className={selectedDays.length>0 ? "h-[239px] w-[364px] gap-[16px]" : "h-[88px] w-[364px] gap-[16px]"} >


              <View className={selectedDays.length>0 ? "h-[69px] w-[364px] gap-[8px] " : "h-[88px] w-[364px] gap-[8px]"} >

                <View className="h-[24px] w-[364px] ">
                  <Text className="text-[16px] font-[400] text-[#404040]">Start date</Text>
                </View>
                {selectedDays.length>0 ? (
                 <CalendarPicker 
                 selectedDate={selectedDate}
                 onDateChange={setSelectedDate}
               />
                ) : (
                  <View className='h-[56px] w-[128px] gap-[4px]'>
                     <CalendarPicker 
                  selectedDate={selectedDate}
                  onDateChange={setSelectedDate}
                />

                <View className='h-[15px] w-[128px] gap-[4px] flex flex-row'>
                  <Ionicons name="information-circle-outline" size={12} color={"#747474"} />
                  <Text className='text-[10px] font-[400] font-poppins text-[#737373]'>Pause starts in 21 days</Text>
                </View>

                    </View>
                )}
              </View>

              { selectedDays.length>0 && (
                <>
              <View className="h-[69px] w-[364px] gap-[8px]">

                <View className="h-[24px] w-[364px] ">
                  <Text className="text-[16px] font-[400] text-[#404040]">Time</Text>
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
              </>
              )}

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
      </View>
    </SharedLayout>
  )
}

export default SpecificDay;