import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { Button, ButtonText } from '@/components/ui/button';
import ActiveMedicine from './activeMedicine';
import WeekPicker from '@/components/Reminder/weekPicker';

interface MedicineReminder {
  time: string;
  name: string;
  dose: number;
  unit: string;
  status: 'pending' | 'taken' | 'missed';
}

const Index = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<string>('Reminders');

  const getCurrentTime = () => {
    const date = new Date();
    return date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }).toUpperCase();
  };

  const isTimePassed = (medicineTime: string) => {
    const currentTime = new Date();
    const [medTime, period] = medicineTime.split(' ');
    const [medHour, medMinute] = medTime.split(':');
    
    let medHour24 = parseInt(medHour);
    if (period === 'PM' && medHour24 !== 12) {
      medHour24 += 12;
    } else if (period === 'AM' && medHour24 === 12) {
      medHour24 = 0;
    }

    const medicineDateTime = new Date();
    medicineDateTime.setHours(medHour24, parseInt(medMinute), 0);
    
    const midnight = new Date();
    midnight.setHours(23, 59, 59);
    
    if (currentTime >= midnight && medicineDateTime < midnight) {
      return 'missed';
    }
    return currentTime >= medicineDateTime ? 'overdue' : 'upcoming';
  };

  const [medicines, setMedicines] = useState<MedicineReminder[]>([
    {
      time: '10:00 AM',
      name: 'Hemantinic',
      dose: 1,
      unit: 'pill(s)',
      status: 'pending'
    },
    {
      time: '11:00 AM',
      name: 'Hemantinic',
      dose: 1,
      unit: 'pill(s)',
      status: 'pending'
    },
    {
      time: '7:00 AM',
      name: 'Hemantinic',
      dose: 1,
      unit: 'pill(s)',
      status: 'pending'
    }
  ]);

  const handleConfirmation = (index: number) => {
    setMedicines(prev => prev.map((med, i) => 
      i === index ? { ...med, status: 'taken' } : med
    ));
  };

//   const handleSnooze = (index: number) => {
//     setMedicines(prev => prev.map((med, i) => 
//       i === index ? { ...med, status: 'snoozed' } : med
//     ));
//   };

  useEffect(() => {
    const checkMissedDoses = () => {
      setMedicines(prev => prev.map(med => {
        if (med.status === 'pending' && isTimePassed(med.time) === 'missed') {
          return { ...med, status: 'missed' };
        }
        return med;
      }));
    };

    checkMissedDoses();

    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const timeUntilMidnight = midnight.getTime() - now.getTime();

    const timer = setTimeout(() => {
      checkMissedDoses();
      setInterval(checkMissedDoses, 24 * 60 * 60 * 1000);
    }, timeUntilMidnight);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View className='flex-1 bg-[#FFFFFF]'>
      <View className='h-[48px] w-[428px] mt-[44px] py-[12px] px-[16px] gap-[12px] flex-row items-center border-b-[1px] border-[#F2F1F1]'>
        <TouchableOpacity onPress={()=>router.back()}>
          <Ionicons name='chevron-back-outline' size={20} color='#414040'   />
        </TouchableOpacity>
        <View className='h-[24px] w-[364px] flex-col justify-center'>
          <Text className='text-[16px] font-[500] text-[#262627]'>Dosage Reminder</Text>
        </View>
      </View>

      {
        medicines.length>0 ? (
          <>
      

      <View className='w-[428px] h-[37px] mt-[12px] flex flex-row items-center justify-between'>
        <View className={currentPage === 'Reminders' ? 'h-[37px] w-[214px] py-[8px] px-[16px] gap-[10px] border-b-[1px] border-[#307CBE] flex flex-row justify-center items-center' : 'h-[37px] w-[214px] py-[8px] px-[16px] gap-[10px]  flex flex-row justify-center items-center'}>
          <TouchableOpacity onPress={()=>setCurrentPage('Reminders')}>
            <Text className={currentPage === 'Reminders' ? 'text-[14px] font-[500] font-poppins  text-[#307CBE]' : 'text-[14px] font-[500] font-poppins '}>Reminders</Text>
          </TouchableOpacity>
        </View>

        <View className={currentPage === 'Active medicine' ? 'h-[37px] w-[214px] py-[8px] px-[16px] gap-[10px] border-b-[1px] border-[#307CBE] flex flex-row justify-center items-center' : 'h-[37px] w-[214px] py-[8px] px-[16px] gap-[10px]  flex flex-row justify-center items-center'}>
          <TouchableOpacity onPress={()=>setCurrentPage('Active medicine')}>
            <Text className={currentPage === 'Active medicine' ? 'text-[14px] font-[500] font-poppins  text-[#307CBE]' : 'text-[14px] font-[500] font-poppins '}>Active medicine</Text>
          </TouchableOpacity>
        </View>
      </View>

      {currentPage === 'Reminders' ? (
        <>
          <View className='mt-[16px]'>
            <WeekPicker />
          </View>

{/* <View className='w-[428px] h-[131px] mt-[16px]  gap-[10px] bg-[#EAF2F9] border-2'>
            <WeekPicker />
          </View> */}

          {medicines.map((medicine, index) => (
            <React.Fragment key={index}>
              <Text className='text-[14px] font-[500] font-poppins text-[#404040] mt-[24px] ml-[16px]'>
                {medicine.time}
              </Text>

              <View className={ 
                medicine.status === 'taken' ? 
                  'w-[396px] h-[84px] mt-[4px] ml-[16px] rounded-[12px] p-[8px] gap-[16px] bg-[#FFFFFF] shadow-soft-1' :
                medicine.status === 'missed' ?
                  'w-[396px] h-[84px] mt-[4px] ml-[16px] rounded-[12px] p-[8px] gap-[16px] bg-[#FFFFFF] shadow-soft-1 border-[1px] border-[#FF6B6B]' :
                medicine.status === 'pending' && isTimePassed(medicine.time) === 'overdue' ?
                  'w-[396px] h-[130px] mt-[4px] ml-[16px] rounded-[12px] p-[8px] gap-[16px] bg-[#FFFFFF] shadow-soft-1' :
                  'w-[396px] h-[84px] mt-[4px] ml-[16px] rounded-[12px] p-[8px] gap-[16px] bg-[#FFFFFF] shadow-soft-1'
              }>
                <View className='w-[148px] h-[46px] gap-[8px] flex flex-row'>
                  <View className='w-[46px] h-[46px] rounded-[4px] p-[6px] gap-[10px] bg-[#EAF2F9] relative'>
                    <Image source={require('@/assets/images/Shape.png')} 
                      className='w-[17.92px] h-[17.92px] top-[7px] left-[8.5px]' 
                      />

                    {medicine.status === 'taken' && (
                      <View className='w-[20px] h-[20px] bg-[#FFFFFF] rounded-[999px]  absolute  left-[32px] top-[-2px]'>
                        <Image source={require('@/assets/images/Shape (2).png')} 
                      className='w-[16px] h-[16px]' 
                       />
                        </View>
                    )}
                  </View>
                  <View className={medicine.status === 'taken' ? 
                    'w-[326px] h-[68px] gap-[4px]' : 
                    'w-[94px] h-[46px] gap-[4px]'}>
                    <Text className='text-[16px] font-[500] font-poppins text-[#404040]'>{medicine.name}</Text>
                    <Text className='text-[12px] font-[400] font-poppins text-[#737373]'>Take {medicine.dose} {medicine.unit}</Text>
                    {medicine.status === 'taken' && (
                      <Text className='text-[12px] font-[500] font-poppins text-[#348352]'>Taken at {medicine.time}</Text>
                    )}
                  </View>
                </View>

                {medicine.status === 'pending' && isTimePassed(medicine.time) === 'overdue' && (
                  <>
                    <View className='w-[380px] h-[0px] border-[1px] border-[#F3F3F3]' />
                    <View className='w-[380px] h-[36px] gap-[16px] flex flex-row'>
                      <Button 
                        size='sm' 
                        variant='outline' 
                        action='secondary' 
                        className='w-[182px] h-[36px] rounded-[12px] border-[1px] border-[#C8F1D0] px-[16px] gap-[8px]'
                        
                      >
                        <ButtonText className='text-[14px] font-[500] font-poppins text-[#8C8C8C]'>Snooze</ButtonText>
                      </Button>
                      <Button 
                        size='sm' 
                        variant='outline' 
                        action='secondary' 
                        className='w-[182px] h-[36px] rounded-[12px] border-1 px-[16px] gap-[8px] bg-[#A3E8B0]'
                        onPress={() => handleConfirmation(index)}
                      >
                        <ButtonText className='text-[14px] font-[500] font-poppins text-[#404040]'>Confirm</ButtonText>
                      </Button>
                    </View>
                  </>
                )}

                {medicine.status === 'missed' && (
                  <Text className='text-[12px] font-[500] font-poppins text-[#FF6B6B]'>
                    Missed dose
                  </Text>
                )}
              </View>
            </React.Fragment>
          ))}
        </>
      ) : (
        <ActiveMedicine />
      )}
      </>
      ):(
        <View>
        <View className='w-[289.49px] h-[169.68px] mt-[188px] ml-[69px]'  >
          <Image source={require('@/assets/images/NoReminders.png')} className='w-[289.49px] h-[169.68px]' />
          </View>
          <View className='w-[396px] h-[27px] mt-[19.32px] ml-[16px] flex flex-row justify-center items-center'>
            <Text className='text-[18px] font-[500] font-poppins text-[#262627]'>No reminders</Text>
          </View>
          <View className='w-[396px] h-[21px] mt-[8px] ml-[16px] flex flex-row justify-center items-center'>
            <Text className='text-[14px] font-[400] font-poppins text-[#525252]'>Add a medicine to get reminders</Text>
            </View>
          </View>
      )
    }

      <View className='w-[428px] h-[84px] absolute bottom-[0px] pt-[16px] pb-[24px] px-[16px] gap-[10px] '>
        <Button size='lg' variant='solid' action='primary' onPress={()=>router.push('/(tabs)/(home)/home')} className='w-[396px] h-[44px] rounded-[8px] border-[1px] border-[#C8F1D0] px-[24px] gap-[12px] bg-[#307CBE] flex flex-row justify-center items-center'>
          <ButtonText className='text-[18px] font-[500] font-poppins text-[#FEFEFF]'>Add new reminder</ButtonText>
        </Button>
      </View>
    </View>
  );
};

export default Index;