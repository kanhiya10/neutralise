import { View, Text, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

interface DateTimePickerProps {
  isVisible: boolean;
  onClose: () => void;
  onSelect: (intake: number, pause: number, unit: string) => void;
}

const NewDateTimePicker: React.FC<DateTimePickerProps> = ({ isVisible, onClose, onSelect }) => {
  const [selectedIntake, setSelectedIntake] = useState<number>(1);
  const [selectedPause, setSelectedPause] = useState<number>(1);
  const [selectedUnit, setSelectedUnit] = useState<string>('Days');

  // Define available options for intake, pause, and unit
  const intakeDays = Array.from({ length: 50 }, (_, i) => i + 1);
  const pauseDays = Array.from({ length: 40 }, (_, i) => i + 1);
  const units = ['Days', 'Weeks'];

  // Modify the available options based on selected unit
  const getIntakeOptions = () => {
    if (selectedUnit === 'Weeks') {
      return Array.from({ length: 12 }, (_, i) => i + 1); // 1-12 weeks
    }
    return Array.from({ length: 50 }, (_, i) => i + 1); // 1-50 days
  };

  const getPauseOptions = () => {
    if (selectedUnit === 'Weeks') {
      return Array.from({ length: 12 }, (_, i) => i + 1); // 1-12 weeks
    }
    return Array.from({ length: 40 }, (_, i) => i + 1); // 1-40 days
  };

  // Reset values when unit changes to prevent invalid selections
  const handleUnitChange = (newUnit: string) => {
    setSelectedUnit(newUnit);
    setSelectedIntake(1);
    setSelectedPause(1);
  };

  return (
    <Modal visible={isVisible} transparent={true} animationType="slide">
      <View className="flex-1  justify-end bg-black/50">
        <View className="h-[308px] bottom-[309px] left-[16px] w-[396px] bg-white rounded-[20px] ">
          {/* Picker section */}
          <View className="h-[244px] w-[396px] gap-[32px] flex-row justify-evenly">
            {/* Unit Picker */}
            <View className="w-[73px] h-[244px]">
              <View className='h-[44px] w-[73px] pt-[12px]'>
                <Text className="text-center text-[14px] font-medium">Unit</Text>
              </View>
              <Picker
                selectedValue={selectedUnit}
                onValueChange={handleUnitChange}>
                {units.map((unit) => (
                  <Picker.Item label={unit} value={unit} key={unit} />
                ))}
              </Picker>
            </View>

            {/* Intake Picker */}
            <View className="w-[73px] h-[244px]">
              <Text className="text-center text-[14px] font-medium pt-[12px]">Intake</Text>
              <Picker
                selectedValue={selectedIntake}
                onValueChange={(itemValue) => setSelectedIntake(itemValue)}>
                {getIntakeOptions().map((value) => (
                  <Picker.Item label={value.toString()} value={value} key={value} />
                ))}
              </Picker>
            </View>

            {/* Pause Picker */}
            <View className="w-[73px] h-[244px]">
              <Text className="text-center text-[14px] font-medium pt-[12px]">Pause</Text>
              <Picker
                selectedValue={selectedPause}
                onValueChange={(itemValue) => setSelectedPause(itemValue)}>
                {getPauseOptions().map((value) => (
                  <Picker.Item label={value.toString()} value={value} key={value} />
                ))}
              </Picker>
            </View>
          </View>

          {/* Action buttons */}
          <View className="h-[60px] w-[396px] flex-row  items-center pr-[12px] pl-[12px] pt-[8px] pb-[12px] flex-row justify-between  ">
          <View className='h-[40px] w-[372px]  gap-[8px] flex flex-row justify-end '>

//                         <TouchableOpacity 
                            onPress={onClose}
                            className="h-[40px] w-[68px] pt-[10px] pr-[12px] pb-[10px] pl-[12px] gap-[8px]  "
                        >
                            <Text className="text-[#307CBE] font-[500] text-center font-roboto text-[14px]">Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => onSelect(selectedIntake, selectedPause, selectedUnit)}
                            className="h-[40px] w-[43px] pt-[10px] pr-[12px] pb-[10px] pl-[12px]  gap-[8px] "
                        >
                            <Text className="text-[#307CBE] font-[500] text-center font-roboto text-[14px]">OK</Text>
                        </TouchableOpacity>
                        </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default NewDateTimePicker;
