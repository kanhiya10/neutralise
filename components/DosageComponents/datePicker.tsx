// import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
// import React, { useState } from 'react';

// interface DateTimePickerProps {
//     isVisible: boolean;
//     onClose: () => void;
//     onSelect: (intake: number, pause: number, unit: string) => void;
// }

// const ITEM_HEIGHT = 56;
// const ITEM_WIDTH = 38;

// const DateTimePicker: React.FC<DateTimePickerProps> = ({ isVisible, onClose, onSelect }) => {
//     const [selectedIntake, setSelectedIntake] = useState(1);
//     const [selectedPause, setSelectedPause] = useState(1);
//     const [selectedUnit, setSelectedUnit] = useState('Days');

//     const intakeDays = Array.from({ length: 50 }, (_, i) => i + 1);
//     const pauseDays = Array.from({ length: 40 }, (_, i) => i + 1);
//     const units = ['Days', 'Weeks'];

//     const getItemLayout = (_: any, index: number) => ({
//         length: ITEM_HEIGHT,
//         offset: ITEM_HEIGHT * index,
//         index,
//     });

//     const renderIntakeItem = ({ item }: { item: number }) => (
//         <TouchableOpacity 
//             onPress={() => setSelectedIntake(item)}
//             className={`h-[56px] w-[38px] border-t-[1px] border-b-[1px] pt-[16px] pb-[16px] gap-[40px] opacity-50  ${selectedIntake === item ? 'bg-[#E5F1F9]' : ''}`}
//         >
//             <TouchableOpacity className='h-[24px] w-[38px] gap-[7px]'>
//                 <Text className={`text-[16px] text-center font-[400] font-poppins text-[#A3A3A3] ${selectedIntake === item ? 'text-[#307CBE] font-[500]' : 'text-[#404040]'}`}>
//                     {item}
//                 </Text>
//             </TouchableOpacity>
//         </TouchableOpacity>
//     );

//     const renderPauseItem = ({ item }: { item: number }) => (
//         <TouchableOpacity 
//             onPress={() => setSelectedPause(item)}
//             className={`h-[56px] w-[38px] border-t-[1px] border-b-[1px] pt-[16px] pb-[16px] gap-[40px] opacity-50  ${selectedPause === item ? 'bg-[#E5F1F9]' : ''}`}
//         >
//             <TouchableOpacity className='h-[24px] w-[38px] gap-[7px]'>
//                 <Text className={`text-[16px] text-center font-[400] font-poppins text-[#A3A3A3] ${selectedPause === item ? 'text-[#307CBE] font-[500]' : 'text-[#404040]'}`}>
//                     {item}
//                 </Text>
//             </TouchableOpacity>
//         </TouchableOpacity>
//     );

//     const renderUnitItem = ({ item }: { item: string }) => (
//         <TouchableOpacity 
//             onPress={() => setSelectedUnit(item)}
//             className={`h-[56px] w-[53px] border-t-[1px] pt-[16px] pb-[16px] gap-[40px] border-[#DCDBDB] justify-center items-center ${selectedUnit === item ? 'bg-[#E5F1F9]' : ''}`}
//         >
//             <Text className={`text-[16px] ${selectedUnit === item ? 'text-[#307CBE] font-[500]' : 'text-[#404040]'}`}>
//                 {item}
//             </Text>
//         </TouchableOpacity>
//     );

//     return (
//         <Modal
//             visible={isVisible}
//             transparent={true}
//             animationType="slide"
//         >
//             <View className="flex-1 justify-end bg-black/50">
//                 <View className="h-[308px] w-[396px] bottom-[309px] left-[16px]  bg-white rounded-[20px] pt-[4px]">
//                     {/* Lists Container */}
//                     <View className="h-[244px] w-[396px] gap-[32px] flex-row justify-evenly">

//                     <View className="w-[73px] h-[244px] flex-col justify-end  ">


//                         <View className='h-[200px] w-[77px] '>
//                             <View className='w-[38px] h-[56px] pt-[16px] pb-[16px] gap-[40px] opacity-50 '>

//                             </View>


                       
//                             <View className=" border-2">
//                                 <FlatList
//                                     data={units}
//                                     renderItem={renderUnitItem}
//                                     keyExtractor={(item) => item}
//                                     showsVerticalScrollIndicator={false}
//                                     getItemLayout={getItemLayout}
//                                     snapToInterval={ITEM_HEIGHT}
//                                     snapToAlignment="start"
//                                     decelerationRate="fast"
//                                 />
//                             </View>
//                             </View>
//                         </View>
//                         {/* Intake Days */}
//                         <View className="w-[73px] h-[244px]">

//                             <View className='h-[44px] w-[73px] pt-[12px] pb-[12px] gap-[10px]' >
//                             <Text className="text-[14px] text-[#404040] font-roboto font-[500] text-center text-[#404040]">Intake</Text>
//                             </View>
                            
//                             <View className="h-[200px] w-[62px] pt-[16px] pb-[16px] pl-[12px] pr-[12px]"> {/* Container for 3 items */}
//                                 <FlatList
//                                     data={intakeDays}
//                                     renderItem={renderIntakeItem}
//                                     keyExtractor={(item) => item.toString()}
//                                     showsVerticalScrollIndicator={false}
//                                     getItemLayout={getItemLayout}
//                                     snapToInterval={ITEM_HEIGHT}
//                                     snapToAlignment="start"
//                                     decelerationRate="fast"
//                                     initialScrollIndex={Math.max(0, selectedIntake - 2)}
//                                 />
//                             </View>
//                         </View>

//                         {/* Pause Days */}
//                         <View className="w-[73px] h-[244px] ">
//                             <View className='h-[44px] w-[73px] pt-[12px] pb-[12px] gap-[10px]' >
                               
//                                     <Text className="text-[14px] text-[#404040] font-roboto font-[500] text-center text-[#404040]">Pause</Text>
                                
//                             </View>
//                             <View className="h-[200px] w-[62px] pt-[16px] pb-[16px] pl-[12px] pr-[12px]">
//                                 <FlatList
//                                     data={pauseDays}
//                                     renderItem={renderPauseItem}
//                                     keyExtractor={(item) => item.toString()}
//                                     showsVerticalScrollIndicator={false}
//                                     getItemLayout={getItemLayout}
//                                     snapToInterval={ITEM_HEIGHT}
//                                     snapToAlignment="start"
//                                     decelerationRate="fast"
//                                     initialScrollIndex={Math.max(0, selectedPause - 2)}
//                                 />
//                             </View>
//                         </View>

//                         {/* Units */}
                       
//                     </View>

//                     {/* Footer */}
//                     <View className="h-[60px] w-[396px] flex-row  items-center pr-[12px] pl-[12px] pt-[8px] pb-[12px] flex-row justify-between ">
//                         <View className='h-[40px] w-[372px]  gap-[8px] flex flex-row justify-end '>

//                         <TouchableOpacity 
//                             onPress={onClose}
//                             className="h-[40px] w-[68px] pt-[10px] pr-[12px] pb-[10px] pl-[12px] gap-[8px]  "
//                         >
//                             <Text className="text-[#307CBE] font-[500] text-center font-roboto text-[14px]">Cancel</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity 
//                             onPress={() => onSelect(selectedIntake, selectedPause, selectedUnit)}
//                             className="h-[40px] w-[43px] pt-[10px] pr-[12px] pb-[10px] pl-[12px]  gap-[8px] "
//                         >
//                             <Text className="text-[#307CBE] font-[500] text-center font-roboto text-[14px]">OK</Text>
//                         </TouchableOpacity>
//                         </View>
//                     </View>
//                 </View>
//             </View>
//         </Modal>
//     );
// };

// export default DateTimePicker;