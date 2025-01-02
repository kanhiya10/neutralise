import { View, Text } from 'react-native';
import React from 'react';
import { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from 'date-fns'
import { Button, ButtonText } from '@/components/ui/button';

interface TimePickerProps {
  selectedTime: string;
  onTimeChange: (time: string) => void;
  
}

export default function TimePicker({ selectedTime, onTimeChange }: TimePickerProps) {
    const [isTimePickerVisible, setTimePickerVisibility] = useState<boolean>(false);

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleConfirm = (date: Date) => {
        const formattedTime = format(date, 'hh:mm aa').toUpperCase();
        onTimeChange(formattedTime);
        hideTimePicker();
    };

    return (
        <View>
            <Button
                size="sm"
                variant="outline"
                action="primary"
                onPress={showTimePicker}
                className="w-[93px] h-[37px] rounded-[8px] border-[1px] border-[#307CBE] pr-[10px] pl-[10px] pt-[8px] pb-[8px] gap-[8px]"//p is change
            >
                <ButtonText className="font-[500] text-[14px] font-poppins text-[#307CBE]">{selectedTime}</ButtonText>
            </Button>

            <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleConfirm}
                onCancel={hideTimePicker}
            />
        </View>
    );
}