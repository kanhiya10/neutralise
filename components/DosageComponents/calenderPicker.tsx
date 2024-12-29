import { useState } from 'react';
import { Modal, View,Platform,Dimensions,Pressable } from 'react-native';
import { Calendar } from 'react-native-calendars';


interface CalendarPickerProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

export default function CalendarPicker({ selectedDate, onDateChange, isVisible, setIsVisible }: CalendarPickerProps) {
  const screenWidth = Dimensions.get('window').width;
  const calendarWidth = Math.min(300, screenWidth * 0.8);

  // Format the date to YYYY-MM-DD string format
  const formattedSelectedDate = selectedDate.toISOString().split('T')[0];

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="fade"
      onRequestClose={() => setIsVisible(false)}
    >
      <Pressable
        className="flex-1 bg-black/30"
        onPress={() => setIsVisible(false)}
      >
        <View
          className="absolute bg-white rounded-lg shadow-lg"
          style={{
            width: calendarWidth,
            right: screenWidth * 0.15,
            top: '38%',
            elevation: Platform.select({ android: 5, default: 0 }),
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}
        >
          <Calendar
            current={formattedSelectedDate}
            onDayPress={(day: { dateString: string }) => {
              onDateChange(new Date(day.dateString));
              setIsVisible(false);
            }}
            markedDates={{
              [formattedSelectedDate]: {
                selected: true,
                selectedColor: '#307CBE',
              },
            }}
            theme={{
              backgroundColor: '#FFFFFF',
              calendarBackground: '#FFFFFF',
              textSectionTitleColor: '#1A1A1A',
              selectedDayBackgroundColor: '#307CBE',
              selectedDayTextColor: '#FFFFFF',
              todayTextColor: '#307CBE',
              dayTextColor: '#1A1A1A',
              arrowColor: '#307CBE',
              monthTextColor: '#307CBE',
              textDayFontFamily: 'Inter',
              textMonthFontFamily: 'Inter',
              textDayHeaderFontFamily: 'Inter',
              textDayFontSize: 12,
              textMonthFontSize: 14,
              textDayHeaderFontSize: 12,
              'stylesheet.calendar.header': {
                header: {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 10,
                  paddingRight: 10,
                  marginTop: 8,
                  alignItems: 'center',
                },
                monthText: {
                  fontSize: 14,
                  fontWeight: '600',
                  color: '#307CBE',
                  fontFamily: 'Inter-Medium',
                },
              },
            }}
            style={{
              width: calendarWidth,
            }}
            className="rounded-lg"
          />
        </View>
      </Pressable>
    </Modal>
  );
}