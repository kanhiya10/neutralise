import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import {Button,ButtonText,ButtonIcon} from '@/components/ui/button';
import { useRouter } from 'expo-router';
import { Radio, RadioIcon, RadioIndicator, RadioGroup } from '@/components/ui/radio';
import { AddIcon, CircleIcon,RemoveIcon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import DateTimePicker from '@/components/DosageComponents/datePicker';
import { Increase } from '@/redux/platformCount_Slice';
import {
    Select,
    SelectTrigger,
    SelectInput,
    SelectIcon,
    SelectPortal,
    SelectBackdrop,
    SelectContent,
    SelectDragIndicatorWrapper,
    SelectDragIndicator,
    SelectItem,
} from "@/components/ui/select"
import { ChevronDownIcon } from '@/components/ui/icon';


// interface DosageReminderProps {
//   ScreenNo: number;
//   updateScreenNo: (args: number) => void;
//   time: number; // New prop to decide the layout
// }

const SetAlarmCond = () => {

    const { dosageData } = useAppSelector((state) => state.Fetch);
    const dispatch = useAppDispatch();
    const router = useRouter();

    // const [firstOption, setFirstOption] = useState<boolean>(false);
    // const [secondOption, setSecondOption] = useState<boolean>(false);
    // const [thirdOption, setThirdOption] = useState<boolean>(false);
    // const [fourthOption, setFourthOption] = useState<boolean>(false);

    const [values, setValues] = useState<string>('');

    const [time, setTime] = useState<number>(1);

    const [intervalUnit, setIntervalUnit] = useState<string>('hour');
    // Add new state for multiple times daily value
    const [dailyIntakes, setDailyIntakes] = useState<string>('');
    // Add state for selected days
    const [selectedDays, setSelectedDays] = useState<string[]>([]);

    // const clickMe=()=>{
    //     console.log('clicked');
    // }

    
        // ... other state declarations remain the same
    
        const handleMultipleStates = () => {
            console.log('Button pressed - handleMultipleStates triggered'); // Add this line
            
            if (!values) {
                console.log('No option selected');
                return;
            }
    
            console.log('Selected option:', values);
            
            switch (values) {
                case 'Specific days':
                    if (selectedDays.length > 0) {
                        console.log('Navigating to specific days with:', selectedDays);
                        // dispatch(Increase());
                        router.push({
                            pathname: `/(tabs)/(home)/specificDay`,
                            params: {
                                type: 'specific-days',
                                selectedDays: JSON.stringify(selectedDays)
                            }
                        });
                    } else {
                        console.log('No days selected');
                    }
                    break;
    
                case 'Interval':
                    if (time > 0) {
                        console.log('Navigating to interval with:', time, intervalUnit);
                        // dispatch(Increase());
                        router.push({
                            pathname: `/(tabs)/(home)/intervalDays`,
                            params: {
                                type: 'interval',
                                time: time,
                                unit: intervalUnit
                            }
                        });
                    }
                    break;
    
                case 'Multiple days':
                    if (dailyIntakes) {
                        console.log('Navigating to daily with intakes:', dailyIntakes);
                        
                        router.push({
                            pathname: `/(tabs)/(home)/setAlarmDaily`,
                            params: {
                                type: 'multiple-days',
                                intakes: parseInt(dailyIntakes)
                            }
                        });
                    } else {
                        console.log('No daily intakes selected');
                    }
                    break;

                    
    
                default:
                    console.log('Please select an option');
            }
        }
    

      const handleDaySelection = (day: string) => {
        setSelectedDays(prev => 
            prev.includes(day) 
                ? prev.filter(d => d !== day)
                : [...prev, day]
        );
    };

    console.log('selectedDays:', selectedDays);

    console.log(values);






    return (
        <View className='w-[397px] h-[575px] top-[30px] left-[16px] gap-[6px] '>
            {/* Display the title if dosageData has a title */}
            {Object.keys(dosageData).length > 0 && dosageData.title && (
                <View className="h-[21px] w-[397px] gap-[10px]">
                    <Text className="text-[14px]">{String(dosageData.title)}</Text>
                </View>
            )}


            <View className="h-[548px] w-[396px] rounded-[12px] border-[1px] p-[16px] gap-[16px] bg-[#ffffff] border-[#F2F1F1]-100">
                {/* First reminder */}
                <View className="h-[54px] w-[364px] gap-[10px] ">
                    <Text className="text-[18px] font-[500] ">Which of these options works for your medication schedule?</Text>
                </View>

                <View className="h-[361px] w-[372px] gap-[16px]">

                    {/* 1st option */}

                    <View className={values === 'Specific days' ? "h-[125px] border-[1px] border-[#E6E6E6] w-[372px] gap-[4px] rounded-[12px] p-[12px]" : "h-[67px] w-[372px] gap-[4px] rounded-[12px] p-[12px] border-[1px] border-[#E6E6E6]"}>

                        <TouchableOpacity className='h-[21px] w-[348px] flex flex-row justify-between  ' >
                            <Text className='text-[14px] font-[400] '>Specific days of the week</Text>

                            <RadioGroup value={values} onChange={setValues} className='mt-[2px]'>
                                <Radio value='Specific days'><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator></Radio>
                            </RadioGroup>
                        </TouchableOpacity>

                        <View className='w-[102px] h-[18px]'>
                            <Text className='text-[12px] font-[400]'>e.g. Mon, Wed, Fri</Text>
                        </View>

                        {
                            values === 'Specific days' && (

                                <View className='h-[34px] w-[348px] gap-[4px] flex flex-row justify-between '>

                                    <Pressable className={selectedDays.includes('Monday') ? 'bg-[#307CBE] h-[34px] w-[44px] gap-[10px] p-[8px] rounded-[8px] flex flex-row justify-center items-center ' : 'bg-[#F2F1F1] h-[34px] w-[44px] gap-[10px] p-[8px] rounded-[8px] flex flex-row justify-center items-center '}
        

                                        onPress={() => handleDaySelection('Monday')} >
                                        <Text className={selectedDays.includes('Monday') ? 'text-white font-[500] text-[12px]' : 'text-black font-[500] text-[12px]'}>Mon</Text>
                                    </Pressable>

                                    <Pressable className={selectedDays.includes('Tuesday') ? 'bg-[#307CBE] h-[34px] w-[44px] gap-[10px] p-[8px] rounded-[8px] flex flex-row justify-center items-center ' : 'bg-[#F2F1F1] h-[34px] w-[44px] gap-[10px] p-[8px] rounded-[8px] flex flex-row justify-center items-center '}
                                        onPress={() => handleDaySelection('Tuesday')} >
                                        <Text className={selectedDays.includes('Tuesday') ? 'text-white font-[500] text-[12px]' : 'text-black font-[500] text-[12px]'}>Tue</Text>
                                    </Pressable>

                                    <Pressable className={selectedDays.includes('Wednesday') ? 'bg-[#307CBE] h-[34px] w-[44px] gap-[10px] p-[8px] rounded-[8px] flex flex-row justify-center items-center ' : 'bg-[#F2F1F1] h-[34px] w-[44px] gap-[10px] p-[8px] rounded-[8px] flex flex-row justify-center items-center '}
                                        onPress={() => handleDaySelection('Wednesday')} >
                                        <Text className={selectedDays.includes('Wednesday') ? 'text-white font-[500] text-[12px]' : 'text-black font-[500] text-[12px]'}>Wed</Text>
                                    </Pressable>

                                    <Pressable className={selectedDays.includes('Thrusday') ? 'bg-[#307CBE] h-[34px] w-[44px] gap-[10px] p-[8px] rounded-[8px] flex flex-row justify-center items-center ' : 'bg-[#F2F1F1] h-[34px] w-[44px] gap-[10px] p-[8px] rounded-[8px] flex flex-row justify-center items-center '}
                                        onPress={() => handleDaySelection('Thrusday')} >
                                        <Text className={selectedDays.includes('Thrusday') ? 'text-white font-[500] text-[12px]' : 'text-black font-[500] text-[12px]'}>Thr</Text>
                                    </Pressable>

                                    <Pressable className={selectedDays.includes('Friday') ? 'bg-[#307CBE] h-[34px] w-[44px] gap-[10px] p-[8px] rounded-[8px] flex flex-row justify-center items-center ' : 'bg-[#F2F1F1] h-[34px] w-[44px] gap-[10px] p-[8px] rounded-[8px] flex flex-row justify-center items-center '}
                                        onPress={() => handleDaySelection('Friday')} >
                                        <Text className={selectedDays.includes('Friday') ? 'text-white font-[500] text-[12px]' : 'text-black font-[500] text-[12px]'}>Fri</Text>
                                    </Pressable>

                                    <Pressable className={selectedDays.includes('Saturday') ? 'bg-[#307CBE] h-[34px] w-[44px] gap-[10px] p-[8px] rounded-[8px] flex flex-row justify-center items-center ' : 'bg-[#F2F1F1] h-[34px] w-[44px] gap-[10px] p-[8px] rounded-[8px] flex flex-row justify-center items-center '}
                                        onPress={() => handleDaySelection('Saturday')} >
                                        <Text className={selectedDays.includes('Saturday') ? 'text-white font-[500] text-[12px]' : 'text-black font-[500] text-[12px]'}>Sat</Text>
                                    </Pressable>

                                    <Pressable className={selectedDays.includes('Sunday') ? 'bg-[#307CBE] h-[34px] w-[44px] gap-[10px] p-[8px] rounded-[8px] flex flex-row justify-center items-center ' : 'bg-[#F2F1F1] h-[34px] w-[44px] gap-[10px] p-[8px] rounded-[8px] flex flex-row justify-center items-center '}
                                        onPress={() => handleDaySelection('Sunday')} >
                                        <Text className={selectedDays.includes('Sunday') ? 'text-white font-[500] text-[12px]' : 'text-black font-[500] text-[12px]'}>Sun</Text>
                                    </Pressable>

                                </View>

                            )
                        }
                    </View>







                    {/* 2nd option */}

                    <View className={values === 'Interval' ? "h-[112px] border-[1px] border-[#E6E6E6] w-[372px] gap-[12px] rounded-[12px] p-[12px]" : "h-[67px] w-[372px] gap-[12px] rounded-[12px] p-[12px] border-[1px] border-[#E6E6E6]"}>

                        <View className='h-[43px] w-[348px] gap-[4px]'>

                            <TouchableOpacity className='h-[21px] w-[348px] flex flex-row justify-between  ' >
                                <Text className='text-[14px] font-[400] '>Interval</Text>

                                <RadioGroup value={values} onChange={setValues} className='mt-[2px]'>
                                    <Radio value='Interval'><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator></Radio>
                                </RadioGroup>
                            </TouchableOpacity>

                            <View className='w-[284px] h-[18px]'>
                                <Text className='text-[12px] font-[400]'>e.g. once every second day, once every 6 hours</Text>
                            </View>
                        </View>

                        {
                            values === 'Interval' && (
                                <View className='h-[0px] w-[348px] border-[1px] border-[#E6E6E6] my-[6px]'>

                                </View>
                            )
                        }


                        {
                            values === 'Interval' && (
                                <View className='h-[21px] w-[348px] gsp-[4px] flex flex-row  border-[#E6E6E6]'>

                                    <View className='w-[160px] h-[21px]  '>
                                        <Text className='text-[14px] font-[400]'>Remind every</Text>
                                    </View>


                                    <Button variant='outline' className='h-[21px] w-[98px] gap-[14px] rounded-[8px] border-0 pr-[16px] pl-[16px] '>
                                       
                                        <TouchableOpacity onPress={() => setTime(time > 0 ? time - 1 : time)}>
                                        <ButtonIcon as={RemoveIcon}/>
                                        </TouchableOpacity>
                                        
                                        <ButtonText className='text-[14px] font-[500] align-center'>{time}</ButtonText>
                                       
                                        <TouchableOpacity onPress={() => setTime(time + 1)}> 
                                        <ButtonIcon as={AddIcon}/>
                                        </TouchableOpacity>
                                        
                                    </Button>

                                    <Select className="h-[20px] w-[75px] gap-[6px] ml-4 " onValueChange={setIntervalUnit} selectedValue={intervalUnit}>
        
                                        <SelectTrigger className='border-[1px]  h-[20px] flex flex-row justify-between'>
                                            <SelectInput placeholder="hour" className='text-blue-500 h-[20px]' />
                                            <SelectIcon as={ChevronDownIcon} className='text-primary-500 h-[15px] w-[15px]'/>
                                        </SelectTrigger>
                                        <SelectPortal>
                                            <SelectBackdrop />
                                            <SelectContent>
                                                <SelectDragIndicatorWrapper>
                                                    <SelectDragIndicator />
                                                </SelectDragIndicatorWrapper>
                                                <SelectItem label="hour" value="hour" />
                                                <SelectItem label="day" value="day" />
                                            </SelectContent>
                                        </SelectPortal>

                                    </Select>



                                </View>
                            )
                        }



                    </View>




                    {/* 3rd option */}

                    <View className={values === 'Multiple days' ? "h-[112px] border-[1px] border-[#E6E6E6] w-[372px] gap-[12px] rounded-[12px] p-[12px]" : "h-[67px] w-[372px] gap-[12px] rounded-[12px] p-[12px] border-[1px] border-[#E6E6E6]"}>

                        <View className='h-[43px] w-[348px] gap-[4px]'>

                            <TouchableOpacity className='h-[21px] w-[348px] flex flex-row justify-between  ' >
                                <Text className='text-[14px] font-[400] '>Multiple times daily</Text>

                                <RadioGroup value={values} onChange={setValues} className='mt-[2px]'>
                                    <Radio value='Multiple days'><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator></Radio>
                                </RadioGroup>
                            </TouchableOpacity>

                            <View className='w-[156px] h-[18px]'>
                                <Text className='text-[12px] font-[400]'>e.g. 3 or more times a day</Text>
                            </View>

                        </View>

                        {
                            values === 'Multiple days' && (
                                <View className='h-[0px] w-[348px] border-[1px] border-[#E6E6E6] my-[6px]'>

                                </View>
                            )
                        }

                        {
                            values === 'Multiple days' && (

                                <View className='h-[20px] w-[348px] gap-[4px] flex flex-row justify-between'>
                                    <Text className='text-[14px] font-[400]'>Intakes</Text>
                                    <Select className="h-[20px] w-[120px] gap-[6px] "  onValueChange={setDailyIntakes} selectedValue={dailyIntakes}>
                                        <SelectTrigger  className='  h-[20px] flex flex-row justify-between'>
                                            <SelectInput placeholder="4 times daily" className='text-blue-500 text-[14px]' />
                                            <SelectIcon as={ChevronDownIcon} className='text-primary-500 h-[15px] w-[15px]'/>
                                        </SelectTrigger>
                                        <SelectPortal>
                                            <SelectBackdrop />
                                            <SelectContent>
                                                <SelectDragIndicatorWrapper>
                                                    <SelectDragIndicator />
                                                </SelectDragIndicatorWrapper>
                                                <SelectItem value="3" label='3 times daily'/>
                                                <SelectItem value="4" label='4 times daily'/>
                                                <SelectItem value="5" label='5 times daily'/>
                                                <SelectItem value="6" label='6 times daily'/>
                                            </SelectContent>
                                        </SelectPortal>

                                    </Select>
                                </View>
                            )
                        }
                    </View>


       

                    {/* 4th option */}

                    <View className={values === 'Cyclic' ? "h-[112px] w-[372px] border-[1px] border-[#E6E6E6] gap-[12px] rounded-[12px] p-[12px]" : "h-[67px] w-[372px] gap-[4px] rounded-[12px] p-[12px] border-[1px] border-[#E6E6E6]"}>

                        <View className='h-[43px] w-[348px] gap-[4px]'>
                        <TouchableOpacity className='h-[21px] w-[348px] flex flex-row justify-between  ' >
                            <Text className='text-[14px] font-[400] '>Cycle mode</Text>

                            <RadioGroup value={values} onChange={setValues} className='mt-[2px]'>
                                <Radio value='Cyclic'><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator></Radio>
                            </RadioGroup>
                        </TouchableOpacity>

                        <View className='w-[193px] h-[18px]'>
                            <Text className='text-[12px] font-[400]'>e.g. 21 intake days, 7 pause days</Text>
                        </View>
                        </View>


                        {
                            values === 'Cyclic' && (
                                <View className='h-[0px] w-[348px] border-[1px] border-[#E6E6E6] my-[6px]'>

                                </View>
                            )
                        }

                        

                        {
                            values === 'Cyclic' && (
                            
                                
                                    <DateTimePicker/>
                                
                                
                            )
                        }


                    </View>




                    
                </View>


            </View>

            
      <View className='h-[84px] w-[428px]  mt-[12px] pt-[16px] pb-[24px] pl-[16px] pr-[16px] gap-[10px] '>
      <Button size='lg' variant='solid' action='primary' className='w-[396px] h-[44px] rounded-[8px] pr-[24px] pl-[24px] gap-[12px] bg-[#307CBE] ' onPress={handleMultipleStates}  >
      <ButtonText className="font-[500] text-[18px] font-poppins text-[#FEFEFF]">Next</ButtonText>
      </Button>

    </View>

            

        </View>

    );
};
export default SetAlarmCond;







