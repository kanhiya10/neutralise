import { useState } from 'react';
import { Modal, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { CalendarDaysIcon } from '@/components/ui/icon';

interface CalendarPickerProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

export default function CalendarPicker({ selectedDate, onDateChange }: CalendarPickerProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleConfirm = (event: any, date?: Date) => {
    setIsVisible(false);
    if (date) {
      onDateChange(date);
    }
  };

  return (
    <>
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

      <Modal
        transparent={true}
        visible={isVisible}
        animationType="fade"
        onRequestClose={() => setIsVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white p-4 rounded-lg h-[404px] w-[396px] rounded-[20px]">
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="inline"
              onChange={handleConfirm}
              minimumDate={new Date()}
            />
          </View>
        </View>
      </Modal>
    </>
  );
}