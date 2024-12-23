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
        const formattedTime = format(date, 'hh:mm a');
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
                className="w-[95px] h-[37px] rounded-[8px] border-[1px] pr-[16px] pl-[16px] pt-[8px] pb-[8px] gap-[8px]"
            >
                <ButtonText className="font-medium text-sm ml-2">{selectedTime}</ButtonText>
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