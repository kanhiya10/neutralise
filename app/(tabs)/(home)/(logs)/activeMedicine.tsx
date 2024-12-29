import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import React from 'react';

interface MedicineItem {
  name: string;
  status: 'active' | 'Paused';
}

const ActiveMedicine = () => {
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);
  const [medicines, setMedicines] = useState<MedicineItem[]>([
    { name: 'Muscleblaze Biozyme Performance', status: 'active' },
    { name: 'Muscleblaze Bodybuilding', status: 'active' },
    { name: 'Muscleblaze Bodybuilding', status: 'active' }
  ]);

  const handleMenu = (index: number) => {
    setActiveMenuIndex(activeMenuIndex === index ? null : index);
  };

  const handleMedication = (index: number) => {
    setMedicines(prevMedicines => {
      const newMedicines = [...prevMedicines];
      newMedicines[index].status = newMedicines[index].status === 'active' ? 'Paused' : 'active';
      return newMedicines;
    });
    setActiveMenuIndex(null);
  };

  return (
    <View className='w-[396px] h-[272px] mt-[16px] ml-[16px] gap-[16px]'>
      {medicines.map((item, index) => (
        <View key={index} className='w-[396px] h-[80px] z-1 rounded-[12px] border-[1px] border-[#F2F1F1] p-[12px] gap-[16px] bg-[#FFFFFF] rounded-[12px] shadow-soft-1'>
          <View className='w-[372px] h-[56px] gap-[12px] flex flex-row'>
            <View className='w-[56px] h-[56px] gap-[10px] rounded-[12px] bg-[#EAF2F9] relative'>
              <Image source={require('@/assets/images/Speech_Bubble.png')} className='w-[17.95px] h-[25.49px]' style={{top:12.58,left:20.72}} />
              
              {item.status === 'Paused' && (
              <View className='w-[42px] h-[14px] bg-[#A3E8B0] rounded-tr-[99px] rounded-br-[99px] py-[2px] px-[6px] gap-[4px] absolute  right-[25px] '>
                <Text className='text-[8px] font-[400] font-poppins text-[#404040]'>Paused</Text>
                </View>
              )}
            </View>
            <View className='w-[304px] h-[54px] gap-[6px]'>
              <View className='w-[304px] h-[24px] flex flex-row justify-between items-center'>
                <View className='w-[280px] h-[24px]'>
                  <Text className='text-[16px] font-[500] font-poppins text-[#404040]'>{item.name}</Text>
                </View>
                <View className='w-[24px] h-[24px] rounded-[4px] p-[4px] gap-[6px]bg-[#FFFFFF]'>
                  <TouchableOpacity onPress={() => handleMenu(index)}>
                    <Image source={require('@/assets/images/Shape (1).png')} className='w-[2px] h-[10px]' />
                  </TouchableOpacity>
                </View>
              </View>
              <View className='w-[304px] h-[24px] gap-[6px]'>
                <View className='w-[45px] h-[24px] gap-[4px] flex flex-row items-center'>
                  <View className='w-[24px] h-[24px] bg-[#F6F6F6] flex justify-center items-center'>
                  <Image source={require('@/assets/images/Shape.png')} className='w-[11.95px] h-[11.95px]' />
                  </View>
                  <Text className='text-[12px] font-[400] font-poppins text-[#404040]'>
                    Pill
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {activeMenuIndex === index && (
            <View className="absolute right-[30px] z-10 w-[210px] h-[143px] p-[4px] bg-[#FFFFFF] border-[1px] border-[#E6E6E6] rounded-[6px]">
              <View className="w-[202px] h-[45px] p-[12px] gap-[8px] rounded-[4px] bg-[#FFFFFF]">
                <TouchableOpacity onPress={() => handleMedication(index)}>
                  <Text className="text-[14px] font-[400] font-poppins text-[#525252]">
                    {item.status === 'active' ? 'Pause medication' : 'Resume medication'}
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="w-[202px] h-[45px] p-[12px] gap-[8px] rounded-[4px] bg-[#FFFFFF]">
                <TouchableOpacity>
                  <Text className="text-[14px] font-[400] font-poppins text-[#404040]">Edit</Text>
                </TouchableOpacity>
              </View>
              <View className="w-[202px] h-[45px] p-[12px] gap-[8px] rounded-[4px] bg-[#FFFFFF]">
                <TouchableOpacity>
                  <Text className="text-[14px] font-[400] font-poppins text-[#404040]">Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

export default ActiveMedicine;